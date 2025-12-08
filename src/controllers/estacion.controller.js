
const { Estacion, Linea } = require('../models');
const { handleError } = require('../helpers/error.helper');

module.exports = {
    // Create or update record
    createOrUpdate: async (req, res) => {
        try {
            const {
                codigo_estacion,
                
                nombre_estacion,

                direccion_ip,

                notifica,
                
                estado,
                
                usuario_modificacion,
                
                fecha_modificacion,
                
                codigo_linea,

                ip_impresion,
                
            } = req.body;

            // Validar campos obligatorios
            
            if (codigo_estacion === undefined || codigo_estacion === null) {
                return res.status(400).json({ 
                    error: 'Missing required fields',
                    details: {
                        
                        codigo_estacion: codigo_estacion === undefined ? 'undefined' : codigo_estacion === null ? 'null' : 'present'
                        
                    }
                });
            }
            

            if (codigo_estacion == 0) {
                // Create new record
                const now = new Date();
                const offset = now.getTimezoneOffset() * 60000;
                const localDate = new Date(now - offset);
                const fechaFormateada = localDate.toISOString().slice(0, 19).replace('T', ' ');

                const newRecord = await Estacion.create({
                    
                    nombre_estacion: nombre_estacion,

                    direccion_ip: direccion_ip,

                    notifica: notifica ? 1 : 0,
                    
                    estado: estado,
                                                            
                    codigo_linea: codigo_linea,

                    ip_impresion: ip_impresion,
                    
                });

                const response = await Estacion.findByPk(newRecord.codigo_estacion, {
                    include: [
                        
                        { model: Linea, as: 'linea' }
                        
                    ]
                });

                return res.status(201).json({
                    data: response,
                    length: 1
                });
            } else {
                // Update existing record
                const record = await Estacion.findByPk(codigo_estacion, {
                    include: [
                        
                        { model: Linea, as: 'linea' }
                        
                    ]
                });
                
                if (!record) {
                    return res.status(404).json({ error: 'Record not found' });
                }

                // Update fields
                
                record.nombre_estacion = nombre_estacion ?? record.nombre_estacion;

                record.direccion_ip = direccion_ip ?? record.direccion_ip;

                record.notifica = (notifica !== undefined && notifica !== null) ? (notifica ? 1 : 0) : record.notifica;

                record.estado = estado ?? record.estado;
                
                record.usuario_modificacion = usuario_modificacion ?? record.usuario_modificacion;
                
                const now = new Date();
                const offset = now.getTimezoneOffset() * 60000;
                const localDate = new Date(now - offset);
                record.fecha_modificacion = localDate.toISOString().slice(0, 19).replace('T', ' ');
                
                record.codigo_linea = codigo_linea ?? record.codigo_linea;

                record.ip_impresion = ip_impresion ?? record.ip_impresion;
                

                await record.save();

                const response = await Estacion.findByPk(record.codigo_estacion, {
                    include: [
                        
                        { model: Linea, as: 'linea' }
                        
                    ]
                });

                return res.status(200).json({
                    data: response,
                    length: 1
                });
            }
        } catch (error) {
            handleError(res, error, 'Error creating or updating record');
        }
    },

    // Get all records
    getAll: async (req, res) => {
        try {
            const records = await Estacion.findAll({
                
                where: { estado: 'A' },
                
                include: [
                    
                    { model: Linea, as: 'linea' }
                    
                ],
                order: [['codigo_estacion', 'ASC']]
            });

            res.json({
                data: records,
                length: records.length || 0
            });
        } catch (error) {
            handleError(res, error, 'Error getting records');
        }
    },

    // Get record by ID
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const record = await Estacion.findByPk(id, {
                include: [
                    
                    { model: Linea, as: 'linea' }
                    
                ]
            });

            if (!record) {
                return res.status(404).json({ error: 'Record not found' });
            }

            res.json({
                data: record,
                length: 1
            });
        } catch (error) {
            handleError(res, error, 'Error getting record by ID');
        }
    },

    // Deactivate record (set status to 'I')
    
    deactivate: async (req, res) => {
        try {
            const { id } = req.params;
            const record = await Estacion.findByPk(id);

            if (!record) {
                return res.status(404).json({ error: 'Record not found' });
            }

            record.estado = 'I';
            await record.save();

            const response = await Estacion.findByPk(id, {
                include: [
                    
                    { model: Linea, as: 'linea' }
                    
                ]
            });

            res.json({
                data: response,
                length: 1
            });
        } catch (error) {
            handleError(res, error, 'Error deactivating record');
        }
    },

    getEstacionesByIP: async (req, res) => {
        const { IP } = req.body;

        try {
            const records = await Estacion.findAll({
                
                where: { direccion_ip: IP, estado: 'A' },
                
                order: [['codigo_estacion', 'ASC']]
            });

            res.json({
                data: records,
                length: records.length || 0
            });
        } catch (error) {
            handleError(res, error, 'Error getting records');
        }
    },
    
};