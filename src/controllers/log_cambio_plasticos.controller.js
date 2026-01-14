
const { Log_cambio_plasticos } = require('../models');
const { handleError } = require('../helpers/error.helper');

module.exports = {
    // Create or update record
    createOrUpdate: async (req, res) => {
        try {
            const {
                codigo_log_cp,
                
                identificacion_producto,
                
                nombre_producto,
                
                fecha_cambio,
                
                tipo_cambio,

                materiales_cambio,
                
                operador,
                
                colaboradores,
                
                estacion,
                
                tiempo_empleado,
                
                estado
                
            } = req.body;

            // Validar campos obligatorios
            
            if (codigo_log_cp === undefined || codigo_log_cp === null || identificacion_producto === undefined || identificacion_producto === null) {
                return res.status(400).json({ 
                    error: 'Missing required fields',
                    details: {
                        
                        codigo_log_cp: codigo_log_cp === undefined ? 'undefined' : codigo_log_cp === null ? 'null' : 'present',
                        
                        identificacion_producto: identificacion_producto === undefined ? 'undefined' : identificacion_producto === null ? 'null' : 'present'
                        
                    }
                });
            }
            

            if (codigo_log_cp == 0) {
                // Create new record (fecha_cambio omitted so DB GETDATE() is used)
                const newRecord = await Log_cambio_plasticos.create({
                    identificacion_producto: identificacion_producto,
                    nombre_producto: nombre_producto,
                    materiales_cambio: materiales_cambio,
                    tipo_cambio: tipo_cambio,
                    operador: operador,
                    colaboradores: colaboradores,
                    estacion: estacion,
                    tiempo_empleado: tiempo_empleado,
                    estado: estado
                });

                const response = await Log_cambio_plasticos.findByPk(newRecord.codigo_log_cp, {
                    include: [
                        
                    ]
                });

                return res.status(201).json({
                    data: response,
                    length: 1
                });
            } else {
                // Update existing record
                const record = await Log_cambio_plasticos.findByPk(codigo_log_cp, {
                    include: [
                        
                    ]
                });
                
                if (!record) {
                    return res.status(404).json({ error: 'Record not found' });
                }

                // Update fields
                
                record.identificacion_producto = identificacion_producto ?? record.identificacion_producto;
                
                record.nombre_producto = nombre_producto ?? record.nombre_producto;
                
                record.fecha_cambio = fecha_cambio ?? record.fecha_cambio;
                
                record.materiales_cambio = materiales_cambio ?? record.materiales_cambio;
                
                record.tipo_cambio = tipo_cambio ?? record.tipo_cambio;
                
                record.operador = operador ?? record.operador;
                
                record.colaboradores = colaboradores ?? record.colaboradores;
                
                record.estacion = estacion ?? record.estacion;
                
                record.tiempo_empleado = tiempo_empleado ?? record.tiempo_empleado;
                
                record.estado = estado ?? record.estado;
                

                await record.save();

                const response = await Log_cambio_plasticos.findByPk(record.codigo_log_cp, {
                    include: [
                        
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
            const records = await Log_cambio_plasticos.findAll({
                
                where: { estado: 'A' },
                
                include: [
                    
                ],
                order: [['codigo_log_cp', 'ASC']]
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
            const record = await Log_cambio_plasticos.findByPk(id, {
                include: [
                    
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
            const record = await Log_cambio_plasticos.findByPk(id);

            if (!record) {
                return res.status(404).json({ error: 'Record not found' });
            }

            record.estado = 'I';
            await record.save();

            const response = await Log_cambio_plasticos.findByPk(id, {
                include: [
                    
                ]
            });

            res.json({
                data: response,
                length: 1
            });
        } catch (error) {
            handleError(res, error, 'Error deactivating record');
        }
    }
    
};