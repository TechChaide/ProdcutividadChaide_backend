const { Detalle_movimiento, Movimiento } = require('../models');
const { handleError } = require('../helpers/error.helper');

module.exports = {
    // Create or update record
    createOrUpdate: async (req, res) => {
        try {
            const {
                codigo_detalle_movimiento,
                codigo_movimiento,
                orden,
                cantidad_utilizada,
                estado,
                fecha_modificacion,
                usuario_modificacion
            } = req.body;

            // Validate required fields

            if (codigo_detalle_movimiento == 0 || codigo_detalle_movimiento === undefined) {
                // Create new record
                const newRecord = await Detalle_movimiento.create({
                    codigo_movimiento: codigo_movimiento,
                    orden: orden,
                    cantidad_utilizada: cantidad_utilizada,
                    estado: estado,
                    fecha_modificacion: fecha_modificacion,
                    usuario_modificacion: usuario_modificacion
                });

                const response = await Detalle_movimiento.findByPk(newRecord.codigo_detalle_movimiento, {
                    include: [
                        { model: Movimiento, as: 'movimiento' }
                    ]
                });

                return res.status(201).json({
                    data: response,
                    length: 1
                });
            } else {
                // Update existing record
                const record = await Detalle_movimiento.findByPk(codigo_detalle_movimiento, {
                    include: [
                        { model: Movimiento, as: 'movimiento' }
                    ]
                });
                
                if (!record) {
                    return res.status(404).json({ error: 'Record not found' });
                }

                // Update fields
                if (codigo_movimiento !== undefined) record.codigo_movimiento = codigo_movimiento;
                if (orden !== undefined) record.orden = orden;
                if (cantidad_utilizada !== undefined) record.cantidad_utilizada = cantidad_utilizada;
                if (estado !== undefined) record.estado = estado;
                if (fecha_modificacion !== undefined) record.fecha_modificacion = fecha_modificacion;
                if (usuario_modificacion !== undefined) record.usuario_modificacion = usuario_modificacion;
                
                await record.save();

                const updatedRecord = await Detalle_movimiento.findByPk(codigo_detalle_movimiento, {
                    include: [
                        { model: Movimiento, as: 'movimiento' }
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

            const { count, rows } = await Detalle_movimiento.findAndCountAll({
                limit: parseInt(limit),
                offset: parseInt(offset),
                include: [
                    { model: Movimiento, as: 'movimiento' }
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
            
            const record = await Detalle_movimiento.findByPk(id, {
                include: [
                    { model: Movimiento, as: 'movimiento' }
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
            
            const record = await Detalle_movimiento.findByPk(id);
            
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