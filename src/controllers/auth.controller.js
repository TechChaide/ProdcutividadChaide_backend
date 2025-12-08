// const jwt = require('jsonwebtoken');
// const db = require('../models');
// const { handleError } = require('../helpers/error.helper');

// const SECRET_KEY = process.env.SECRET_KEY;
// const TOKEN_EXPIRES_IN = '1h';


// const login = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // Find user by email
//         // const user = await db.User.findOne({
//         //     where: { email: email }
//         // });

//         const user = {
//             id: '0',
//             name: 'Operario',
//             email: email
//         }

//         if (!user) {
//             return res.status(404).json({ 
//                 message: 'User not found',
//                 code: 'USER_NOT_FOUND'
//             });
//         }

//         // Verify password
//         //const isPasswordValid = await bcrypt.compare(password, user.password);

//         // if (!isPasswordValid) {
//         //     return res.status(401).json({ 
//         //         message: 'Invalid credentials',
//         //         code: 'INVALID_CREDENTIALS'
//         //     });
//         // }

//         // Generate JWT token
//         const token = jwt.sign(
//             { 
//                 id: user.id,
//                 email: user.email
//             },
//             SECRET_KEY,
//             { expiresIn: TOKEN_EXPIRES_IN }
//         );

//         // Successful response
//         res.json({
//             message: 'Login successful',
//             token,
//             expiresIn: TOKEN_EXPIRES_IN,
//             user: {
//                 id: user.id,
//                 name: user.name,
//                 email: user.email
//             }
//         });
//     } catch (error) {
//         handleError(res, error, 'Server error');
//     }
// };

// module.exports = { login };

// src/controllers/auth.controller.js

const jwt = require('jsonwebtoken');
const db = require('../models');
const { handleError } = require('../helpers/error.helper');
const { QueryTypes } = require('sequelize'); // Importa QueryTypes

const SECRET_KEY = process.env.SECRET_KEY;
const TOKEN_EXPIRES_IN = '1h';

// --- Función Helper ---
const getFichaSocial = async (db, codigo, direccion_ip) => {
    try {
        if (!codigo || !direccion_ip) {
            throw new Error('El código y el área son requeridos.');
        }

        // La consulta devuelve un array con todos los resultados
        const resultados = await db.sequelize2.query(
            `EXEC [${process.env.DB_NAME}].[${process.env.DB_SCHEMA}].[Z_Consulta_FichaSocial] :codigo, :direccion_ip`,
            {
                replacements: { codigo, direccion_ip },
                type: QueryTypes.SELECT
            }
        );

        //console.log("Resultados de la consulta Ficha Social:", resultados[0]);

        // Si no hay resultados, retorna null
        if (resultados.length === 0) {
            return null;
        }

        // Si hay resultados, los consolidamos en un solo objeto
        // 1. Tomamos el primer resultado como base para los datos comunes
        const fichaConsolidada = { ...resultados[0] };

        // 2. Usamos map() para extraer los valores y join() para unirlos con '&'
        const respCtrlProd = resultados.map(r => r.resp_ctrl_prod).join('&');
        const maquinas = resultados.map(o => o.maquina).join('&');

        // 3. Actualizamos el objeto consolidado con los campos concatenados
        fichaConsolidada.resp_ctrl_prod = respCtrlProd;
        fichaConsolidada.maquina = maquinas;
        
        // 4. Retornamos el objeto único ya procesado
        return fichaConsolidada;

    } catch (error) {
        console.error("Error en getFichaSocial:", error);
        throw new Error('Error al consultar la ficha social.');
    }
};

const getFichaSocialColaborador = async (db, codigo) => {
    try {
        if (!codigo) {
            throw new Error('El código');
        }

        // La consulta devuelve un array con todos los resultados
        const resultados = await db.sequelize2.query(
            `EXEC [${process.env.DB_NAME}].[${process.env.DB_SCHEMA}].[Z_Consulta_FichaSocial_Colaborador] :codigo`,
            {
                replacements: { codigo},
                type: QueryTypes.SELECT
            }
        );

        // Si no hay resultados, retorna null
        if (resultados.length === 0) {
            return null;
        }

        const fichaConsolidada = { ...resultados[0] };

        return fichaConsolidada;

    } catch (error) {
        console.error("Error en getFichaSocial:", error);
        throw new Error('Error al consultar la ficha social.');
    }
};

// --- Controlador Login Modificado ---
const login = async (req, res) => {
    const { codigoEmpleado, direccion_ip } = req.body;

    try {
        
        const userAttemp = {
            id: codigoEmpleado,
            direccion_ip: direccion_ip,
        };

        const fichaSocial = await getFichaSocial(db, userAttemp.id,  userAttemp.direccion_ip);

        if (!fichaSocial) {
            return res.status(404).json({ 
                message: 'Ficha de empleado no encontrada',
                code: 'FICHA_NOT_FOUND'
            });
        }
        
        // --- FIN DE LA MODIFICACIÓN ---

        const token = jwt.sign(
            { 
                id: fichaSocial.CODIGO,
                nombres: fichaSocial.NOMBRE,
                // Puedes añadir más datos de la ficha al token si es necesario
                direccion_ip: fichaSocial.DEPARAMENTO,
                regional: fichaSocial.LOCALIDAD,
            },
            SECRET_KEY,
            { expiresIn: TOKEN_EXPIRES_IN }
        );

        res.json({
            message: 'Login successful',
            token,
            expiresIn: TOKEN_EXPIRES_IN,
            user: {
                id: userAttemp.id,
                ficha: fichaSocial // Se adjuntan los datos de la ficha a la respuesta
            }
        });
    } catch (error) {
        handleError(res, error, 'Server error');
    }
};

const colaborar = async (req, res) => {
    const { codigoEmpleado} = req.body;

    try {
        
        const userAttemp = {
            id: codigoEmpleado,
        };

        const fichaSocial = await getFichaSocialColaborador(db, userAttemp.id);

        if (!fichaSocial) {
            return res.status(404).json({ 
                message: 'Ficha de empleado no encontrada',
                code: 'FICHA_NOT_FOUND'
            });
        }
        
        res.json({
            user: {
                id: userAttemp.id,
                ficha: fichaSocial // Se adjuntan los datos de la ficha a la respuesta
            }
        });
    } catch (error) {
        handleError(res, error, 'Server error');
    }
};

module.exports = { login, colaborar };