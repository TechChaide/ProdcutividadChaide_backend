const { Sesion, Area_process_control } = require("../models");
const { handleError } = require("../helpers/error.helper");
const { QueryTypes } = require("sequelize");
const db = require("../models");

module.exports = {
  // Create or update record
  createOrUpdate: async (req, res) => {
    try {
      const {
        codigo_sesion,

        codigo_estacion,

        codigo_rcp,

        codigo_operador,

        fecha_evento,

        tipo_evento,

        estado,
      } = req.body;

      // Validar campos obligatorios

      if (codigo_sesion === undefined || codigo_sesion === null) {
        return res.status(400).json({
          error: "Missing required fields",
          details: {
            codigo_sesion:
              codigo_sesion === undefined
                ? "undefined"
                : codigo_sesion === null
                ? "null"
                : "present",
          },
        });
      }

      if (codigo_sesion == 0) {
        // Create new record
        const newRecord = await db.sequelize.query(
          `EXEC [${process.env.DB_NAME}].[dbo].[sp_InsertarSesion] :codigo_estacion, :codigo_rcp, :codigo_operador,  :tipo_evento, :estado`,
          {
            // Se usan replacements para evitar inyección SQL
            replacements: {
              codigo_estacion: codigo_estacion,

              codigo_rcp: codigo_rcp,

              codigo_operador: codigo_operador,

              tipo_evento: tipo_evento,

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
      const records = await Sesion.findAll({
        where: { estado: "A", tipo_evento: "beg" },

        include: [{ model: Area_process_control, as: "area_process_control" }],
        order: [["codigo_sesion", "ASC"]],
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
      const record = await Sesion.findByPk(id, {
        include: [{ model: Area_process_control, as: "area_process_control" }],
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

  getByCodigoOperador: async (req, res) => {
    //console.log("Llega hasta aqui:", req.params);
    try {
      const { codigoEmpleado } = req.params;
      const records = await Sesion.findAll({
        // Renombré 'record' a 'records' (plural) por claridad
        where: {
          codigo_operador: codigoEmpleado, // Sintaxis de objeto correcta
          tipo_evento: "beg",
          estado: "A",
        },
        include: [{ model: Area_process_control, as: "area_process_control" }],
      });

      // Comprobación correcta para un array vacío
      if (!records || records.length === 0) {
        return res.status(202).json({ data: [], length: 0 });
      }

      res.json({
        data: records,
        length: records.length, // Longitud dinámica
      });
    } catch (error) {
      handleError(
        res,
        error,
        "Error al obtener registros por código de operador"
      );
    }
  },

  // Deactivate record (set status to 'I')

  deactivate: async (req, res) => {
    try {
      const { id } = req.params;
      const record = await Sesion.findByPk(id);

      if (!record) {
        return res.status(404).json({ error: "Record not found" });
      }

      record.estado = "I";
      await record.save();

      const response = await Sesion.findByPk(id, {
        include: [{ model: Area_process_control, as: "area_process_control" }],
      });

      res.json({
        data: response,
        length: 1,
      });
    } catch (error) {
      handleError(res, error, "Error deactivating record");
    }
  },

  deactivateByUser: async (req, res) => {
    try {
      const { codigoEmpleado } = req.body;

      // 1. Primero, encontramos todos los registros que cumplen la condición.
      const recordsToUpdate = await Sesion.findAll({
        where: {
          codigo_operador: codigoEmpleado,
          tipo_evento: "beg",
          estado: "A",
        },
        // Si necesitas incluir relaciones en la respuesta, puedes añadirlas aquí:
        // include: [{ model: Area_process_control, as: "area_process_control" }]
      });

      // 2. Si encontramos registros, los actualizamos en la base de datos.
      if (recordsToUpdate && recordsToUpdate.length > 0) {
        // Usamos Promise.all para ejecutar todas las promesas de guardado en paralelo.
        await Promise.all(
          recordsToUpdate.map((record) => {
            record.estado = "I"; // Cambiamos el estado
            return record.save(); // Guardamos el registro actualizado
          })
        );
      }

      // 3. Respondemos siempre con 200 OK.
      // 'recordsToUpdate' contiene los datos ya actualizados.
      // Si no se encontró nada, será un arreglo vacío, lo cual es correcto.
      res.status(200).json({
        length: recordsToUpdate.length,
        data: recordsToUpdate,
      });
    } catch (error) {
      handleError(res, error, "Error al desactivar las sesiones.");
    }
  },

  getMetricasByCodigoOperador: async (req, res) => {
    try {
      // 1. Obtiene los parámetros de la URL (query string)
      const { codigo_empleado } = req.body;

      // 2. Validación básica de los parámetros
      if (!codigo_empleado) {
        return res.status(400).json({
          msg: 'El parámetro "codigo_empleado" es requerido.',
        });
      }

      // 3. Ejecuta el Stored Procedure en la segunda base de datos (sequelize2)
      const resultados = await db.sequelize.query(
        `EXEC [${process.env.DB_NAME}].[dbo].[sp_ReporteSesionesPorOperador] :codigo_empleado`,
        {
          // Se usan replacements para evitar inyección SQL
          replacements: {
            codigo_empleado: codigo_empleado,
          },
          type: QueryTypes.SELECT,
        }
      );

      // 4. Envía los resultados como respuesta
      res.status(200).json({ data: resultados, length: resultados.length });
    } catch (error) {
      console.error("Error al consultar órdenes de producción:", error);
      res.status(500).json({
        msg: "Error en el servidor al consultar las órdenes.",
      });
    }
  },
};
