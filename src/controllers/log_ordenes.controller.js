const { Log_ordenes, Configuracion } = require("../models");
const { handleError } = require("../helpers/error.helper");
const { QueryTypes } = require("sequelize");
const db = require("../models");

module.exports = {
  // Create or update record
  createOrUpdate: async (req, res) => {
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    const fecha = new Date();

    const opts = {
      timeZone: "America/Guayaquil",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // ¡Importante para formato 24h!
    };

    const partes = new Intl.DateTimeFormat("en-US", opts).formatToParts(fecha);

    const fechaObjeto = {};
    for (const parte of partes) {
      if (parte.type !== "literal") {
        fechaObjeto[parte.type] = parte.value;
      }
    }
    const timestampISO = `${fechaObjeto.year}-${fechaObjeto.month}-${fechaObjeto.day}T${fechaObjeto.hour}:${fechaObjeto.minute}:${fechaObjeto.second}Z`;
    /////////////////////////////////////////////////////////////////////////////////////////////////
    try {
      const {
        codigo_log,

        orden_log,

        codigo_empleado,

        codigo_equipo,

        fecha_log,

        cantidad_entregada,

        cantidad_rechazada,

        cantidad_reproceso,

        orden_reproceso,
      } = req.body;

      //console.log("Fecha de la orden recibida", fecha_log);

      // Validar campos obligatorios

      if (codigo_log === undefined || codigo_log === null) {
        return res.status(400).json({
          error: "Missing required fields",
          details: {
            codigo_log:
              codigo_log === undefined
                ? "undefined"
                : codigo_log === null
                ? "null"
                : "present",
          },
        });
      }

      if (codigo_log == 0) {
        // Create new record
        const newRecord = await db.sequelize.query(
          `EXEC [${process.env.DB_NAME}].[dbo].[sp_InsertarLogOrden] 
          :orden_log,
          :cantidad_entregada,
          :cantidad_rechazada,
          :codigo_empleado,
          :codigo_equipo,
          :cantidad_reproceso,
          :orden_reproceso`,
          {
            // Se usan replacements para evitar inyección SQL
            replacements: {
              orden_log: orden_log,
              cantidad_entregada: cantidad_entregada,
              cantidad_rechazada: cantidad_rechazada,
              codigo_empleado: codigo_empleado,
              codigo_equipo: codigo_equipo,
              cantidad_reproceso: cantidad_reproceso,
              orden_reproceso: orden_reproceso,
            },
            type: QueryTypes.SELECT,
          }
        );

        const response = newRecord[0];

        return res.status(201).json({
          data: response,
          length: 1,
        });
      } else {
        // Update existing record
        const record = await Log_ordenes.findByPk(codigo_log, {
          include: [],
        });

        if (!record) {
          return res.status(404).json({ error: "Record not found" });
        }

        // Update fields

        record.orden_log = orden_log ?? record.orden_log;

        record.codigo_empleado = codigo_empleado ?? record.codigo_empleado;

        record.codigo_equipo = codigo_equipo ?? record.codigo_equipo;

        record.fecha_log = timestampISO ?? record.fecha_log;

        record.cantidad_entregada =
          cantidad_entregada ?? record.cantidad_entregada;

        record.cantidad_rechazada =
          cantidad_rechazada ?? record.cantidad_rechazada;

        record.cantidad_reproceso =
          cantidad_reproceso ?? record.cantidad_reproceso;

        record.orden_reproceso = orden_reproceso ?? record.orden_reproceso;

        await record.save();

        const response = await Log_ordenes.findByPk(record.codigo_log, {
          include: [],
        });

        return res.status(200).json({
          data: response,
          length: 1,
        });
      }
    } catch (error) {
      handleError(res, error, "Error creating or updating record");
    }
  },

  // Get all records
  getAll: async (req, res) => {
    try {
      const records = await Log_ordenes.findAll({
        include: [],
        order: [["codigo_log", "ASC"]],
      });

      res.json({
        data: records,
        length: records.length || 0,
      });
    } catch (error) {
      handleError(res, error, "Error getting records");
    }
  },

  // Get record by ID
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const record = await Log_ordenes.findByPk(id, {
        include: [],
      });

      if (!record) {
        return res.status(404).json({ error: "Record not found" });
      }

      res.json({
        data: record,
        length: 1,
      });
    } catch (error) {
      handleError(res, error, "Error getting record by ID");
    }
  },

  // Deactivate record (set status to 'I')
};
