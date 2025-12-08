const { Linea_Departamento, Departamento, Linea } = require('../models');
const { handleError } = require('../helpers/error.helper');

module.exports = {
    // Create or update record
    createOrUpdate: async (req, res) => {
        try {
            const {
                codigo_linea_departamento,
                codigo_departamento,
                codigo_linea,
                estado,
                usuario_modificacion,
                fecha_modificacion
            } = req.body;

            // Validar campos obligatorios
            if (codigo_linea_departamento === undefined || codigo_linea_departamento === null) {
                return res.status(400).json({ 
                    error: 'Missing required fields',
                    details: {
                        codigo_linea_departamento: codigo_linea_departamento === undefined ? 'undefined' : codigo_linea_departamento === null ? 'null' : 'present'
                    }
                });
            }

            if (codigo_linea_departamento == 0) {
                // Create new record
                const newRecord = await Linea_Departamento.create({
                    codigo_departamento: codigo_departamento,
                    codigo_linea: codigo_linea,
                    estado: estado,
                    usuario_modificacion: usuario_modificacion,
                    fecha_modificacion: fecha_modificacion
                });

                const response = await Linea_Departamento.findByPk(newRecord.codigo_linea_departamento, {
                    include: [
                        { model: Departamento, as: 'departamento' },
                        { model: Linea, as: 'linea' }
                    ]
                });

                return res.status(201).json({
                    data: response,
                    length: 1
                });
            } else {
                // Update existing record
                const record = await Linea_Departamento.findByPk(codigo_linea_departamento, {
                    include: [
                        { model: Departamento, as: 'departamento' },
                        { model: Linea, as: 'linea' }
                    ]
                });
                
                if (!record) {
                    return res.status(404).json({ error: 'Record not found' });
                }

                // Update fields
                record.codigo_departamento = codigo_departamento ?? record.codigo_departamento;
                record.codigo_linea = codigo_linea ?? record.codigo_linea;
                record.estado = estado ?? record.estado;
                record.usuario_modificacion = usuario_modificacion ?? record.usuario_modificacion;
                
                const now = new Date();
                const offset = now.getTimezoneOffset() * 60000;
                const localDate = new Date(now - offset);
                record.fecha_modificacion = localDate.toISOString().slice(0, 19).replace('T', ' ');

                await record.save();

                const response = await Linea_Departamento.findByPk(record.codigo_linea_departamento, {
                    include: [
                        { model: Departamento, as: 'departamento' },
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
            const records = await Linea_Departamento.findAll({
                where: { estado: 'A' },
                include: [
                    { model: Departamento, as: 'departamento' },
                    { model: Linea, as: 'linea' }
                ],
                order: [['codigo_linea_departamento', 'ASC']]
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
            const record = await Linea_Departamento.findByPk(id, {
                include: [
                    { model: Departamento, as: 'departamento' },
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

    // Get all lineas by departamento
    getByDepartamento: async (req, res) => {
        try {
            const { codigo_departamento } = req.body;
            const records = await Linea_Departamento.findAll({
                where: { 
                    codigo_departamento: codigo_departamento,
                    estado: 'A' 
                },
                include: [
                    { model: Departamento, as: 'departamento' },
                    { model: Linea, as: 'linea' }
                ],
                order: [['codigo_linea_departamento', 'ASC']]
            });

            res.json({
                data: records,
                length: records.length || 0
            });
        } catch (error) {
            handleError(res, error, 'Error getting records by departamento');
        }
    },

    // Deactivate record (set status to 'I')
    deactivate: async (req, res) => {
        try {
            const { id } = req.params;
            const record = await Linea_Departamento.findByPk(id);

            if (!record) {
                return res.status(404).json({ error: 'Record not found' });
            }

            record.estado = 'I';
            await record.save();

            const response = await Linea_Departamento.findByPk(id, {
                include: [
                    { model: Departamento, as: 'departamento' },
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
    }
};
