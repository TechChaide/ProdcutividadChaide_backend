
const { Area_process_control } = require('../models');
const { handleError } = require('../helpers/error.helper');

module.exports = {
    // Create or update record
    createOrUpdate: async (req, res) => {
        try {
            const {
                codigo_rcp,

                maquina,
                
                resp_ctrl_prod,

                direccion_ip,
                
                estado
                
            } = req.body;

            // Validar campos obligatorios
            
            if (codigo_rcp === undefined || codigo_rcp === null) {
                return res.status(400).json({ 
                    error: 'Missing required fields',
                    details: {
                        
                        codigo_rcp: codigo_rcp === undefined ? 'undefined' : codigo_rcp === null ? 'null' : 'present'
                        
                    }
                });
            }
            

            if (codigo_rcp == 0) {
                // Create new record
                const newRecord = await Area_process_control.create({

                    maquina: maquina,
                    
                    resp_ctrl_prod: resp_ctrl_prod,

                    direccion_ip: direccion_ip,
                    
                    estado: estado
                    
                });

                const response = await Area_process_control.findByPk(newRecord.codigo_rcp, {
                    include: [
                        
                    ]
                });

                return res.status(201).json({
                    data: response,
                    length: 1
                });
            } else {
                // Update existing record
                const record = await Area_process_control.findByPk(codigo_rcp, {
                    include: [
                        
                    ]
                });
                
                if (!record) {
                    return res.status(404).json({ error: 'Record not found' });
                }

                // Update fields

                record.maquina = maquina ?? record.maquina;
                
                record.resp_ctrl_prod = resp_ctrl_prod ?? record.resp_ctrl_prod;

                record.direccion_ip = direccion_ip ?? record.direccion_ip;
                
                record.estado = estado ?? record.estado;
                

                await record.save();

                const response = await Area_process_control.findByPk(record.codigo_rcp, {
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
            const records = await Area_process_control.findAll({
                
                where: { estado: 'A' },
                
                include: [
                    
                ],
                order: [['codigo_rcp', 'ASC']]
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
            const record = await Area_process_control.findByPk(id, {
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
            const record = await Area_process_control.findByPk(id);

            if (!record) {
                return res.status(404).json({ error: 'Record not found' });
            }

            record.estado = 'I';
            await record.save();

            const response = await Area_process_control.findByPk(id, {
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