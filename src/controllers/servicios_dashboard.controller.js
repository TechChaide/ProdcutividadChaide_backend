const { QueryTypes } = require("sequelize");
const db = require("../models"); // Importa el objeto db desde los modelos


//este spse contruye con fines de alimentar el dashboard de producción del proyecto productividad chaide


module.exports = {

  // --- Controlador para Z_Consulta_Ordenes_Produccion ---
  getOperadoresPorNombredeAreaYFechaInicio: async (req, res) => {
    try {
      // 1. Obtiene los parámetros de la URL (query string)
      const { departamento, fechaInicio } = req.body;

      // 2. Validación básica de los parámetros
      if (!departamento || !fechaInicio) {
        return res.status(400).json({
          msg: 'Los parámetros "departamento" y "fechaInicio" son requeridos.',
        });
      }

      // 3. Ejecuta el Stored Procedure en la segunda base de datos (sequelize2)
      const resultados = await db.sequelize.query(
        `EXEC [${process.env.DB_NAME}].[dbo].[SP_Get_EmpleadosAreaByFechaInicio] :departamento, :fechaInicio`,
        {
          // Se usan replacements para evitar inyección SQL
          replacements: {
            departamento: departamento,
            fechaInicio: fechaInicio,
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

  getTiempoProduccionPorHojaRutaYMaterial: async (req, res) => {
    try {
      // 1. Obtiene los parámetros de la URL (query string)
      const { hojaRuta, material } = req.body;

      // 2. Validación básica de los parámetros
      if (!hojaRuta || !material) {
        return res.status(400).json({
          msg: 'Los parámetros "hojaRuta" y "material" son requeridos.',
        });
      }

      // 3. Ejecuta el Stored Procedure en la segunda base de datos (sequelize2)
      const resultados = await db.sequelize.query(
        `EXEC [${process.env.DB_NAME}].[dbo].[sp_Get_tiempoProduccionMaterialByHojaRuta] :hojaRuta, :material`,
        {
          // Se usan replacements para evitar inyección SQL
          replacements: {
            hojaRuta: hojaRuta,
            material: material,
          },
          type: QueryTypes.SELECT,
        }
      );

      // 4. Envía los resultados como respuesta
      res.status(200).json({ data: resultados, length: resultados.length });
    } catch (error) {
      console.error("Error al consultar tiempo de producción por hoja de ruta y material:", error);
      res.status(500).json({
        msg: "Error en el servidor al consultar tiempo de producción por hoja de ruta y material.",
      });
    }
  },

  getHabilidadesOperadorPorCodigoOperador: async (req, res) => {
    try {
      // 1. Obtiene los parámetros de la URL (query string)
      const { Codigo } = req.body;

      // 2. Validación básica de los parámetros
      if (!Codigo) {
        return res.status(400).json({
          msg: 'El parámetro "Codigo" es requerido.',
        });
      }

      // 3. Ejecuta el Stored Procedure en la segunda base de datos (sequelize2)
      const resultados = await db.sequelize.query(
        `EXEC [${process.env.DB_NAME}].[dbo].[SP_Get_HabilidadesOperadorPorCodigoOperador] :Codigo`,
        {
          // Se usan replacements para evitar inyección SQL
          replacements: {
            Codigo: Codigo,
          },
          type: QueryTypes.SELECT,
        }
      );

      // 4. Envía los resultados como respuesta
      res.status(200).json({ data: resultados, length: resultados.length });
    } catch (error) {
      console.error("Error al consultar habilidades del operador por código:", error);
      res.status(500).json({
        msg: "Error en el servidor al consultar habilidades del operador por código.",
      });
    }
  },


  ////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////

  getDepartamenrtosDisponibles: async (req, res) => {
    try {

      const resultados = await db.sequelize.query(
        `EXEC [${process.env.DB_NAME}].[dbo].[sp_Get_DepartamentosProductividad]`,
        {
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

  getOrdenestrabajadosPorDepartamentoYCodigoEmpleadoYFechaInicio: async (req, res) => {
    try {
      // 1. Obtiene los parámetros de la URL (query string)
      const { Departamento, CodigoEmpleado, fechaInicio } = req.body;

      // 2. Validación básica de los parámetros
      if (!Departamento || !CodigoEmpleado || !fechaInicio) {
        return res.status(400).json({
          msg: 'Los parámetros "Departamento", "CodigoEmpleado" y "fechaInicio" son requeridos.',
        });
      }

      const resultados = await db.sequelize.query(
        `EXEC [${process.env.DB_NAME}].[dbo].[sp_Get_OrdenesTrabajadasPorDepartamentoEmpleadpYFechaInicio] :Departamento, :CodigoEmpleado, :fechaInicio`,
        {
          replacements: {
            Departamento: Departamento,
            CodigoEmpleado: CodigoEmpleado,
            fechaInicio: fechaInicio,
          },
          type: QueryTypes.SELECT,
        }
      );

      res.status(200).json({ data: resultados, length: resultados.length });
    } catch (error) {
      console.error("Error al consultar órdenes trabajadas por departamento, código de empleado y fecha de inicio:", error);
      res.status(500).json({
        msg: "Error en el servidor al consultar órdenes trabajadas por departamento, código de empleado y fecha de inicio.",
      });

    };
  },

  getInformacionOrdenes: async (req, res) => {
    try {
      // 1. Obtiene los parámetros de la URL (query string)
      const { CodigoOrden } = req.body;

      // 2. Validación básica de los parámetros
      if (!CodigoOrden) {
        return res.status(400).json({
          msg: 'El parámetro "CodigoOrden" es requerido.',
        });
      }

      const resultados = await db.sequelize.query(
        `EXEC [${process.env.DB_NAME}].[dbo].[sp_Get_InformacionOrdenes] :CodigoOrden`,
        {
          replacements: {
            CodigoOrden: CodigoOrden,
          },
          type: QueryTypes.SELECT,
        }
      );

      res.status(200).json({ data: resultados, length: resultados.length });
    } catch (error) {
      console.error("Error al consultar información de órdenes:", error);
      res.status(500).json({
        msg: "Error en el servidor al consultar información de órdenes.",
      });
    };
  },

  getInformacionOrdenesDelEmpleado: async (req, res) => {
    try {
      // 1. Obtiene los parámetros de la URL (query string)
      const { Orden, CodigoEmpleado } = req.body;

      // 2. Validación básica de los parámetros
      if (!Orden || !CodigoEmpleado) {
        return res.status(400).json({
          msg: 'Los parámetros "Orden" y "CodigoEmpleado" son requeridos.',
        });
      }

      const resultados = await db.sequelize.query(
        `EXEC [${process.env.DB_NAME}].[dbo].[sp_Get_InformacionCuboProductividadPorOrden] :Orden, :CodigoEmpleado`,
        {
          replacements: {
            Orden: Orden,
            CodigoEmpleado: CodigoEmpleado,
          },
          type: QueryTypes.SELECT,
        }
      );

      res.status(200).json({ data: resultados, length: resultados.length });
    } catch (error) {
      console.error("Error al consultar información de órdenes:", error);
      res.status(500).json({
        msg: "Error en el servidor al consultar información de órdenes.",
      });
    };
  },

  getProductividadDiariaPersonaPorCodigoEmpleadoFecha: async (req, res) => {
    try {
      // 1. Obtiene los parámetros de la URL (query string)
      const { CodigoPersona, fechaInicio, fechaFin, HoraInicio, HoraFin } = req.body;

      // 2. Validación básica de los parámetros
      if (!CodigoPersona || !fechaInicio || !fechaFin) {
        return res.status(400).json({
          msg: 'Los parámetros "CodigoPersona", "fechaInicio" y "fechaFin" son requeridos.',
        });
      }

      const resultados = await db.sequelize.query(
        `EXEC [${process.env.DB_NAME}].[dbo].[sp_Get_ProductividadPersonaByCodigoEmpleadoYFechaDIA] :CodigoPersona, :fechaInicio, :fechaFin, :HoraInicio, :HoraFin`,
        {
          replacements: {
            CodigoPersona: CodigoPersona,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            HoraInicio: HoraInicio,
            HoraFin: HoraFin,
          },
          type: QueryTypes.SELECT,
        }
      );

      res.status(200).json({ data: resultados, length: resultados.length });
    } catch (error) {
      console.error("Error al consultar productividad diaria de la persona por código de empleado y fecha:", error);
      res.status(500).json({
        msg: "Error en el servidor al consultar productividad diaria de la persona por código de empleado y fecha.",
      });
    }
  },


  getProductividadPersonaEnIntervaloDias: async (req, res) => {
    try {
      // 1. Obtiene los parámetros de la URL (query string)
      const { CodigosPersonas, fechaInicio, fechaFin, Departamento, Cargo } = req.body;

      // 2. Validación básica de los parámetros
      if (!CodigosPersonas || !fechaInicio || !fechaFin || !Departamento || !Cargo) {
        return res.status(400).json({
          msg: 'Los parámetros "CodigosPersonas", "fechaInicio", "fechaFin", "Departamento" y "Cargo" son requeridos.',
        });
      }

      const formatoFechaISO = /^\d{4}-\d{2}-\d{2}$/;
      if (!formatoFechaISO.test(fechaInicio) || !formatoFechaISO.test(fechaFin)) {
        return res.status(400).json({
          msg: 'Los parámetros "fechaInicio" y "fechaFin" deben tener formato YYYY-MM-DD.',
        });
      }

      if (new Date(fechaInicio) > new Date(fechaFin)) {
        return res.status(400).json({
          msg: '"fechaInicio" no puede ser mayor que "fechaFin".',
        });
      }


      const resultados = await db.sequelize.query(
        `EXEC [${process.env.DB_NAME}].[dbo].[sp_Get_productividadPersonaByIntervaloTiempo] :CodigosPersonas, :fechaInicio, :fechaFin, :Departamento, :Cargo`,
        {
          replacements: {
            CodigosPersonas: codigosPersonasNormalizados,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            Departamento: Departamento,
            Cargo: Cargo,

          },
          type: QueryTypes.SELECT,
        }
      );


      res.status(200).json({ data: resultados, length: resultados.length });
    } catch (error) {
      console.error("Error al consultar productividad de la persona en intervalo de días:", error);
      res.status(500).json({
        msg: "Error en el servidor al consultar productividad de la persona en intervalo de días.",
      });
    }
  },







    getProductividadPersonaEnIntervaloFechas: async (req, res) => {
    try {
      // 1. Obtiene los parámetros de la URL (query string)
      const { CodigosPersonas, fechaInicio, fechaFin, Departamento, Cargo } = req.body;

      // 2. Validación básica de los parámetros
      if (!CodigosPersonas || !fechaInicio || !fechaFin) {
        return res.status(400).json({
          msg: 'Los parámetros "CodigosPersonas", "fechaInicio" y "fechaFin" son requeridos.',
        });
      }

      // El SP espera un NVARCHAR con códigos separados por '&'.
      const codigosPersonasNormalizados = Array.isArray(CodigosPersonas)
        ? CodigosPersonas.map((codigo) => String(codigo).trim()).filter(Boolean).join("&")
        : String(CodigosPersonas)
            .split(/[,&]/)
            .map((codigo) => codigo.trim())
            .filter(Boolean)
            .join("&");

      if (!codigosPersonasNormalizados) {
        return res.status(400).json({
          msg: 'El parámetro "CodigosPersonas" no contiene códigos válidos.',
        });
      }

      const formatoFechaISO = /^\d{4}-\d{2}-\d{2}$/;
      if (!formatoFechaISO.test(fechaInicio) || !formatoFechaISO.test(fechaFin)) {
        return res.status(400).json({
          msg: 'Los parámetros "fechaInicio" y "fechaFin" deben tener formato YYYY-MM-DD.',
        });
      }

      if (new Date(fechaInicio) > new Date(fechaFin)) {
        return res.status(400).json({
          msg: '"fechaInicio" no puede ser mayor que "fechaFin".',
        });
      }


      const resultados = await db.sequelize.query(
        `EXEC [${process.env.DB_NAME}].[dbo].[sp_Get_ProduccionPersonasPorIntervaloFechas] :CodigosPersonas, :fechaInicio, :fechaFin, :Departamento, :Cargo`,
        {
          replacements: {
            CodigosPersonas: codigosPersonasNormalizados,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            Departamento: Departamento,
            Cargo: Cargo,
          },
          type: QueryTypes.SELECT,
        }
      );


      res.status(200).json({ data: resultados, length: resultados.length });
    } catch (error) {
      console.error("Error al consultar productividad de la persona en intervalo de días:", error);
      res.status(500).json({
        msg: "Error en el servidor al consultar productividad de la persona en intervalo de días.",
      });
    }
  },




  getFiltrosPorArea: async (req, res) => {
    try {

      const resultados = await db.sequelize.query(
        `EXEC [${process.env.DB_NAME}].[dbo].[sp_Get_FiltrosPorDepartamento]`,
        {
          replacements: {
          },
          type: QueryTypes.SELECT,
        }
      );

      res.status(200).json({ data: resultados, length: resultados.length });
    } catch (error) {
      console.error("Error al consultar filtros por área:", error);
      res.status(500).json({
        msg: "Error en el servidor al consultar productividad diaria de la persona por código de empleado y fecha.",
      });
    }
  },





  ////////////////////////////sps finales divide and conquer para el dashboard de producción del proyecto productividad chaide
  
  getTiemposJustificadosEnIntervaloFechas: async (req, res) => {
    try {
      // 1. Obtiene los parámetros de la URL (query string)
      const { CodigosPersonas, fechaInicio, fechaFin} = req.body;

      // 2. Validación básica de los parámetros
      if (!CodigosPersonas || !fechaInicio || !fechaFin) {
        return res.status(400).json({
          msg: 'Los parámetros "CodigosPersonas", "fechaInicio" y "fechaFin" son requeridos.',
        });
      }

      // El SP espera un NVARCHAR con códigos separados por '&'.
      const codigosPersonasNormalizados = Array.isArray(CodigosPersonas)
        ? CodigosPersonas.map((codigo) => String(codigo).trim()).filter(Boolean).join("&")
        : String(CodigosPersonas)
            .split(/[,&]/)
            .map((codigo) => codigo.trim())
            .filter(Boolean)
            .join("&");

      if (!codigosPersonasNormalizados) {
        return res.status(400).json({
          msg: 'El parámetro "CodigosPersonas" no contiene códigos válidos.',
        });
      }

      const formatoFechaISO = /^\d{4}-\d{2}-\d{2}$/;
      if (!formatoFechaISO.test(fechaInicio) || !formatoFechaISO.test(fechaFin)) {
        return res.status(400).json({
          msg: 'Los parámetros "fechaInicio" y "fechaFin" deben tener formato YYYY-MM-DD.',
        });
      }

      if (new Date(fechaInicio) > new Date(fechaFin)) {
        return res.status(400).json({
          msg: '"fechaInicio" no puede ser mayor que "fechaFin".',
        });
      }


      const resultados = await db.sequelize.query(
        `EXEC [${process.env.DB_NAME}].[dbo].[sp_Get_HorasJustificadasPersona] :CodigosPersonas, :fechaInicio, :fechaFin`,
        {
          replacements: {
            CodigosPersonas: codigosPersonasNormalizados,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin
          },
          type: QueryTypes.SELECT,
        }
      );


      res.status(200).json({ data: resultados, length: resultados.length });
    } catch (error) {
      console.error("Error al consultar horas justificadas de la persona en intervalo de días:", error);
      res.status(500).json({
        msg: "Error en el servidor al consultar horas justificadas de la persona en intervalo de días.",
      });
    }
  },


  getRegistrosProductividad: async (req, res) => {
    try {
      // 1. Obtiene los parámetros de la URL (query string)
      const { CodigosPersonas, fechaInicio, fechaFin, Departamento, Cargo} = req.body;

      // 2. Validación básica de los parámetros
      if (!CodigosPersonas || !fechaInicio || !fechaFin) {
        return res.status(400).json({
          msg: 'Los parámetros "CodigosPersonas", "fechaInicio" y "fechaFin" son requeridos.',
        });
      }

      // El SP espera un NVARCHAR con códigos separados por '&'.
      const codigosPersonasNormalizados = Array.isArray(CodigosPersonas)
        ? CodigosPersonas.map((codigo) => String(codigo).trim()).filter(Boolean).join("&")
        : String(CodigosPersonas)
            .split(/[,&]/)
            .map((codigo) => codigo.trim())
            .filter(Boolean)
            .join("&");

      if (!codigosPersonasNormalizados) {
        return res.status(400).json({
          msg: 'El parámetro "CodigosPersonas" no contiene códigos válidos.',
        });
      }

      const formatoFechaISO = /^\d{4}-\d{2}-\d{2}$/;
      if (!formatoFechaISO.test(fechaInicio) || !formatoFechaISO.test(fechaFin)) {
        return res.status(400).json({
          msg: 'Los parámetros "fechaInicio" y "fechaFin" deben tener formato YYYY-MM-DD.',
        });
      }

      if (new Date(fechaInicio) > new Date(fechaFin)) {
        return res.status(400).json({
          msg: '"fechaInicio" no puede ser mayor que "fechaFin".',
        });
      }

      const normalizeListParam = (param) => {
        if (param === undefined || param === null) return "";
        if (Array.isArray(param)) {
          return param.map((item) => String(item).trim()).filter(Boolean).join("&");
        }

        return String(param).trim();
      };

      const departamentoParam = normalizeListParam(Departamento);
      const cargoParam = normalizeListParam(Cargo);

      // Si Cargo viene vacío o null, el SP recibe cadena vacía.
      // El procedimiento en la base de datos debe poder manejar esta condición.


      const resultados = await db.sequelize.query(
        `EXEC [${process.env.DB_NAME}].[dbo].[sp_Get_RegistrosCruceProductividadPersona] :CodigosPersonas, :fechaInicio, :fechaFin, :Departamento, :Cargo`,
        {
          replacements: {
            CodigosPersonas: codigosPersonasNormalizados,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            Departamento: departamentoParam,
            Cargo: cargoParam,
          },
          type: QueryTypes.SELECT,
        }
      );


      res.status(200).json({ data: resultados, length: resultados.length });
    } catch (error) {
      console.error("Error al consultar registros de productividad de la persona en intervalo de días:", error);
      res.status(500).json({
        msg: "Error en el servidor al consultar registros de productividad de la persona en intervalo de días.",
      });
    }
  },



};
