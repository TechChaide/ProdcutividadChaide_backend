
const { Departamento } = require('../models');
const { handleError } = require('../helpers/error.helper');

module.exports = {
    // Create or update record
    createOrUpdate: async (req, res) => {
        try {
            const {
                codigo_departamento,
                
                nombre_departamento,
                
                estado,
                
                usuario_modificacion,
                
                fecha_modificacion,

                see
                
            } = req.body;

            // Validar campos obligatorios
            
            if (codigo_departamento === undefined || codigo_departamento === null) {
                return res.status(400).json({ 
                    error: 'Missing required fields',
                    details: {
                        
                        codigo_departamento: codigo_departamento === undefined ? 'undefined' : codigo_departamento === null ? 'null' : 'present'
                        
                    }
                });
            }
            

            if (codigo_departamento == 0) {
                // Create new record
                const newRecord = await Departamento.create({
                    
                    nombre_departamento: nombre_departamento,
                    
                    estado: estado,
                    
                    usuario_modificacion: usuario_modificacion,
                    
                    see: see,
                });

                const response = await Departamento.findByPk(newRecord.codigo_departamento, {
                    include: [
                        
                    ]
                });

                return res.status(201).json({
                    data: response,
                    length: 1
                });
            } else {
                // Update existing record
                const record = await Departamento.findByPk(codigo_departamento, {
                    include: [
                        
                    ]
                });
                
                if (!record) {
                    return res.status(404).json({ error: 'Record not found' });
                }

                // Update fields
                
                record.nombre_departamento = nombre_departamento ?? record.nombre_departamento;
                
                record.estado = estado ?? record.estado;
                
                record.usuario_modificacion = usuario_modificacion ?? record.usuario_modificacion;

                record.see = see ?? record.see;
                
                const now = new Date();
                const offset = now.getTimezoneOffset() * 60000;
                const localDate = new Date(now - offset);
                record.fecha_modificacion = localDate.toISOString().slice(0, 19).replace('T', ' ');
                

                await record.save();

                const response = await Departamento.findByPk(record.codigo_departamento, {
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
            const records = await Departamento.findAll({
                
                where: { estado: 'A' },
                
                include: [
                    
                ],
                order: [['codigo_departamento', 'ASC']]
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
            const record = await Departamento.findByPk(id, {
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
            const record = await Departamento.findByPk(id);

            if (!record) {
                return res.status(404).json({ error: 'Record not found' });
            }

            record.estado = 'I';
            await record.save();

            const response = await Departamento.findByPk(id, {
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