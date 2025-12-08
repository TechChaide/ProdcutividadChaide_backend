
const { Linea } = require('../models');
const { handleError } = require('../helpers/error.helper');

module.exports = {
    // Create or update record
    createOrUpdate: async (req, res) => {
        try {
            const {
                codigo_linea,
                
                nombre_linea,
                
                estado,
                
                usuario_modificacion,
                
                fecha_modificacion
                
            } = req.body;

            // Validar campos obligatorios
            
            if (codigo_linea === undefined || codigo_linea === null) {
                return res.status(400).json({ 
                    error: 'Missing required fields',
                    details: {
                        
                        codigo_linea: codigo_linea === undefined ? 'undefined' : codigo_linea === null ? 'null' : 'present'
                        
                    }
                });
            }
            

            if (codigo_linea == 0) {
                // Create new record
                const newRecord = await Linea.create({
                    
                    nombre_linea: nombre_linea,
                    
                    estado: estado,
                    
                    usuario_modificacion: usuario_modificacion,
                    
                    fecha_modificacion: fecha_modificacion
                    
                });

                const response = await Linea.findByPk(newRecord.codigo_linea, {
                    include: [
                    ]
                });

                return res.status(201).json({
                    data: response,
                    length: 1
                });
            } else {
                // Update existing record
                const record = await Linea.findByPk(codigo_linea, {
                    include: [
                        
                    ]
                });
                
                if (!record) {
                    return res.status(404).json({ error: 'Record not found' });
                }

                // Update fields
                
                record.nombre_linea = nombre_linea ?? record.nombre_linea;
                
                record.estado = estado ?? record.estado;
                
                record.usuario_modificacion = usuario_modificacion ?? record.usuario_modificacion;
                
                const now = new Date();
                const offset = now.getTimezoneOffset() * 60000;
                const localDate = new Date(now - offset);
                record.fecha_modificacion = localDate.toISOString().slice(0, 19).replace('T', ' ');
                

                await record.save();

                const response = await Linea.findByPk(record.codigo_linea, {
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
            const records = await Linea.findAll({
                
                where: { estado: 'A' },
                
                include: [
                ],
                order: [['codigo_linea', 'ASC']]
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
            const record = await Linea.findByPk(id, {
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
            const record = await Linea.findByPk(id);

            if (!record) {
                return res.status(404).json({ error: 'Record not found' });
            }

            record.estado = 'I';
            await record.save();

            const response = await Linea.findByPk(id, {
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