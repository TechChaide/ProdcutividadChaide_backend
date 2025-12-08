const { Orden_empleado_decimal } = require("../models");
const { handleError } = require("../helpers/error.helper");
const { format } = require("date-fns"); // <-- ¡AÑADE ESTA LÍNEA!
const { QueryTypes } = require("sequelize");
const db = require("../models");

const determinarTurnoConciso = (horaString) => {
  const hora = parseInt(horaString.substring(0, 2), 10);
  return hora >= 7 && hora < 18 ? "DIURNO" : "NOCTURNO";
};

module.exports = {
  // Create or update record
  createOrUpdate: async (req, res) => {
    try {
      let {
        ID,

        NUM_ORDEN,

        CODIGO_EMP,

        UNIDADES_PROD,

        FECHA,

        HORA,

        TURNO,

        CENTRO,

        CODIGO,

        MAQUINA,
      } = req.body;

      // Validar campos obligatorios

      if (ID === undefined || ID === null) {
        return res.status(400).json({
          error: "Missing required fields",
          details: {
            ID:
              ID === undefined ? "undefined" : ID === null ? "null" : "present",
          },
        });
      }

      if (ID == 0) {
        // Create new record

        const newRecord = await db.sequelize.query(
          `EXEC [${process.env.DB_NAME2}].[dbo].[sp_InsertarOrdenEmpleadoDecimal] :NUM_ORDEN, :CODIGO_EMP, :UNIDADES_PROD, :TURNO, :CENTRO, :CODIGO, :MAQUINA`,
          {
            // Se usan replacements para evitar inyección SQL
            replacements: {
              NUM_ORDEN: NUM_ORDEN,
              CODIGO_EMP: CODIGO_EMP,
              UNIDADES_PROD: UNIDADES_PROD,
              TURNO: determinarTurnoConciso(HORA),
              CENTRO: CENTRO,
              CODIGO: CODIGO,
              MAQUINA: MAQUINA,
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
      const records = await Orden_empleado_decimal.findAll({
        include: [],
        order: [["ID", "ASC"]],
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
      const record = await Orden_empleado_decimal.findByPk(id, {
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
