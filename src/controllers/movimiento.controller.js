const { Movimiento, Ingresos } = require('../models');
const { handleError } = require('../helpers/error.helper');

module.exports = {
    // Create or update record
    createOrUpdate: async (req, res) => {
        try {
            const {
                codigo_movimiento,
                tipo_movimiento,
                cantidad_movimiento,
                fecha_movimiento,
                usuario_movimiento,
                estado,
                fecha_modificacion,
                usuario_modificacion,
                codigo_ingreso
            } = req.body;

            // Validate required fields

            if (codigo_movimiento == 0 || codigo_movimiento === undefined) {
                // Create new record
                const newRecord = await Movimiento.create({
                    tipo_movimiento: tipo_movimiento,
                    cantidad_movimiento: cantidad_movimiento,
                    fecha_movimiento: fecha_movimiento,
                    usuario_movimiento: usuario_movimiento,
                    estado: estado,
                    fecha_modificacion: fecha_modificacion,
                    usuario_modificacion: usuario_modificacion,
                    codigo_ingreso: codigo_ingreso
                });

                const response = await Movimiento.findByPk(newRecord.codigo_movimiento, {
                    include: [
                        { model: Ingresos, as: 'ingresos' }
                    ]
                });

                return res.status(201).json({
                    data: response,
                    length: 1
                });
            } else {
                // Update existing record
                const record = await Movimiento.findByPk(codigo_movimiento, {
                    include: [
                        { model: Ingresos, as: 'ingresos' }
                    ]
                });
                
                if (!record) {
                    return res.status(404).json({ error: 'Record not found' });
                }

                // Update fields
                if (tipo_movimiento !== undefined) record.tipo_movimiento = tipo_movimiento;
                if (cantidad_movimiento !== undefined) record.cantidad_movimiento = cantidad_movimiento;
                if (fecha_movimiento !== undefined) record.fecha_movimiento = fecha_movimiento;
                if (usuario_movimiento !== undefined) record.usuario_movimiento = usuario_movimiento;
                if (estado !== undefined) record.estado = estado;
                if (fecha_modificacion !== undefined) record.fecha_modificacion = fecha_modificacion;
                if (usuario_modificacion !== undefined) record.usuario_modificacion = usuario_modificacion;
                if (codigo_ingreso !== undefined) record.codigo_ingreso = codigo_ingreso;
                
                await record.save();

                const updatedRecord = await Movimiento.findByPk(codigo_movimiento, {
                    include: [
                        { model: Ingresos, as: 'ingresos' }
                    ]
                });

                return res.status(200).json({
                    data: updatedRecord,
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
            const { page = 1, limit = 10000 } = req.query;
            const offset = (page - 1) * limit;

            const { count, rows } = await Movimiento.findAndCountAll({
                limit: parseInt(limit),
                offset: parseInt(offset),
                include: [
                    { model: Ingresos, as: 'ingresos' }
                ]
            });

            return res.status(200).json({
                data: rows,
                length: rows.length,
                total: count,
                page: parseInt(page),
                totalPages: Math.ceil(count / limit)
            });
        } catch (error) {
            handleError(res, error, 'Error fetching records');
        }
    },

    // Get record by ID
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            
            const record = await Movimiento.findByPk(id, {
                include: [
                    { model: Ingresos, as: 'ingresos' }
                ]
            });

            if (!record) {
                return res.status(404).json({ 
                    error: 'Record not found',
                    id: id
                });
            }

            return res.status(200).json({
                data: record,
                length: 1
            });
        } catch (error) {
            handleError(res, error, 'Error fetching record by ID');
        }
    },

    // Deactivate record (soft delete)
    deactivate: async (req, res) => {
        try {
            const { id } = req.params;
            
            const record = await Movimiento.findByPk(id);
            
            if (!record) {
                return res.status(404).json({ error: 'Record not found' });
            }

            // Soft delete by setting status
            record.estado = 'I';
            await record.save();

            return res.status(200).json({
                message: 'Record deactivated successfully',
                id: id
            });
        } catch (error) {
            handleError(res, error, 'Error deactivating record');
        }
    }
};