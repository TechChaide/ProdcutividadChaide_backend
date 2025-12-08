const { Log_reimpresiones } = require("../models");
const { handleError } = require("../helpers/error.helper");
const { QueryTypes } = require("sequelize");
const db = require("../models");

module.exports = {
  // Create or update record
  createOrUpdate: async (req, res) => {
    try {
      const {
        codigo_log,

        orden,

        paquete,

        fecha,

        parametros,

        estado,

        usuario_reimpresion,
      } = req.body;

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
          `EXEC [${process.env.DB_NAME}].[dbo].[sp_logReimpresion] :orden, :paquete, :parametros, :estado, :usuario_reimpresion`,
          {
            // Se usan replacements para evitar inyección SQL
            replacements: {
              orden: orden,
              paquete: paquete,
              parametros: parametros,
              usuario_reimpresion: usuario_reimpresion,
              estado: estado,
            },
            type: QueryTypes.SELECT,
          }
        );

        const response = newRecord[0];

        return res.status(201).json({
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
      const records = await Log_reimpresiones.findAll({
        where: { estado: "A" },

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
      const record = await Log_reimpresiones.findByPk(id, {
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

  // Get record by numero_orden
  getByNumeroOrden: async (req, res) => {
    try {
      const { numero_orden } = req.body;

      // Validar que numero_orden esté presente y no sea undefined/null
      if (!numero_orden) {
        return res.status(400).json({
          error: "Missing required field: numero_orden",
          details: {
            numero_orden:
              numero_orden === undefined
                ? "undefined"
                : numero_orden === null
                ? "null"
                : "empty",
          },
        });
      }

      const records = await Log_reimpresiones.findAll({
        where: { orden: numero_orden, estado: "A" },
      });

      res.json({
        data: records,
        length: records.length || 0,
      });
    } catch (error) {
      handleError(res, error, "Error getting records by numero_orden");
    }
  },

  // Deactivate record (set status to 'I')

  deactivate: async (req, res) => {
    try {
      const { id } = req.params;
      const record = await Log_reimpresiones.findByPk(id);

      if (!record) {
        return res.status(404).json({ error: "Record not found" });
      }

      record.estado = "I";
      await record.save();

      const response = await Log_reimpresiones.findByPk(id, {
        include: [],
      });

      res.json({
        data: response,
        length: 1,
      });
    } catch (error) {
      handleError(res, error, "Error deactivating record");
    }
  },

  getByCodigoBarras: async (req, res) => {
    try {
      const { codigo_barras } = req.body;

      console.log("codigo_barras recibido:", codigo_barras);

      // Validar que codigo_barras esté presente y no sea undefined/null
      if (!codigo_barras) {
        return res.status(400).json({
          error: "Missing required field: codigo_barras",
          details: {
            codigo_barras:
              codigo_barras === undefined
                ? "undefined"
                : codigo_barras === null
                ? "null"
                : "empty",
          },
        });
      }

      const resultados = await db.sequelize.query(
        `EXEC [Etiquetas].[dbo].[sp_ConsultarLogRE_ImpresionPorCodigoBarras] :CodigoBarras`,
        {
          // Se usan replacements para evitar inyección SQL
          replacements: {
            CodigoBarras: codigo_barras,
          },
          type: QueryTypes.SELECT,
        }
      );

      // 4. Envía los resultados como respuesta
      res.status(200).json({ data: resultados, length: resultados.length });
    } catch (error) {
      handleError(res, error, "Error getting records by codigo_barras");
    }
  },
};
