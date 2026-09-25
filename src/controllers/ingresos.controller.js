const { Ingresos } = require('../models');
const { handleError } = require('../helpers/error.helper');

module.exports = {
    // Create or update record
    createOrUpdate: async (req, res) => {
        try {
            const {
                codigo_ingreso,
                bodega_origen,
                bodega_destino,
                qr_bmp,
                codigo_material,
                cantidad,
                unidades,
                fecha_ingreso,
                usuario_ingreso,
                estado,
                fecha_modificacion,
                usuario_modificacion
            } = req.body;

            // Validate required fields

            if (codigo_ingreso == 0 || codigo_ingreso === undefined) {
                // Create new record
                const newRecord = await Ingresos.create({
                    bodega_origen: bodega_origen,
                    bodega_destino: bodega_destino,
                    qr_bmp: qr_bmp,
                    codigo_material: codigo_material,
                    cantidad: cantidad,
                    unidades: unidades,
                    fecha_ingreso: fecha_ingreso,
                    usuario_ingreso: usuario_ingreso,
                    estado: estado,
                    fecha_modificacion: fecha_modificacion,
                    usuario_modificacion: usuario_modificacion
                });

                const response = await Ingresos.findByPk(newRecord.codigo_ingreso);

                return res.status(201).json({
                    data: response,
                    length: 1
                });
            } else {
                // Update existing record
                const record = await Ingresos.findByPk(codigo_ingreso);
                
                if (!record) {
                    return res.status(404).json({ error: 'Record not found' });
                }

                // Update fields
                if (bodega_origen !== undefined) record.bodega_origen = bodega_origen;
                if (bodega_destino !== undefined) record.bodega_destino = bodega_destino;
                if (qr_bmp !== undefined) record.qr_bmp = qr_bmp;
                if (codigo_material !== undefined) record.codigo_material = codigo_material;
                if (cantidad !== undefined) record.cantidad = cantidad;
                if (unidades !== undefined) record.unidades = unidades;
                if (fecha_ingreso !== undefined) record.fecha_ingreso = fecha_ingreso;
                if (usuario_ingreso !== undefined) record.usuario_ingreso = usuario_ingreso;
                if (estado !== undefined) record.estado = estado;
                if (fecha_modificacion !== undefined) record.fecha_modificacion = fecha_modificacion;
                if (usuario_modificacion !== undefined) record.usuario_modificacion = usuario_modificacion;
                
                await record.save();

                const updatedRecord = await Ingresos.findByPk(codigo_ingreso);

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

            const { count, rows } = await Ingresos.findAndCountAll({
                limit: parseInt(limit),
                offset: parseInt(offset),
                where: {
                    estado: 'A'
                }
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
            
            const record = await Ingresos.findByPk(id);

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

    // Buscar ingreso activo por código QR / BMP
    getByQR: async (req, res) => {
        try {
            const { qr_bmp, Codigo } = req.body;
            const codigoQr = String(qr_bmp || Codigo || '').trim();

            if (!codigoQr) {
                return res.status(400).json({
                    error: 'Faltan parámetros: qr_bmp (o Codigo) es requerido.'
                });
            }

            const records = await Ingresos.findAll({
                where: {
                    qr_bmp: codigoQr,
                    estado: 'A'
                }
            });

            return res.status(200).json({
                data: records,
                length: records.length
            });
        } catch (error) {
            handleError(res, error, 'Error fetching record by QR');
        }
    },

    // Deactivate record (soft delete)
    deactivate: async (req, res) => {
        try {
            const { id } = req.params;
            
            const record = await Ingresos.findByPk(id);
            
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