// src/controllers/consultas.controller.js

const { QueryTypes } = require("sequelize");
const db = require("../models"); // Importa el objeto db desde los modelos

// --- Controlador para Z_Consulta_Ordenes_Produccion ---
const getOrdenesProduccion = async (req, res) => {
  try {
    // 1. Obtiene los parámetros de la URL (query string)
    const { maquinas, usuarios } = req.body;

    // 2. Validación básica de los parámetros
    if (!maquinas || !usuarios) {
      return res.status(400).json({
        msg: 'Los parámetros "maquinas" y "usuarios" son requeridos.',
      });
    }

    // 3. Ejecuta el Stored Procedure en la segunda base de datos (sequelize2)
    const resultados = await db.sequelize.query(
      `EXEC [${process.env.DB_NAME}].[dbo].[Z_Consulta_Ordenes_Produccion] :maquinas, :usuarios`,
      {
        // Se usan replacements para evitar inyección SQL
        replacements: {
          maquinas: maquinas,
          usuarios: usuarios,
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
};


// --- Controlador para Z_Consulta_Ordenes_Produccion ---
const getOrdenesProduccionAlmohadas = async (req, res) => {
  try {
    // 1. Obtiene los parámetros de la URL (query string)
    const { maquinas, usuarios } = req.body;

    // 2. Validación básica de los parámetros
    if (!maquinas || !usuarios) {
      return res.status(400).json({
        msg: 'Los parámetros "maquinas" y "usuarios" son requeridos.',
      });
    }

    // 3. Ejecuta el Stored Procedure en la segunda base de datos (sequelize2)
    const resultados = await db.sequelize.query(
      `EXEC [${process.env.DB_NAME}].[dbo].[sp_Consulta_Ordenes_Produccion_Almohadas] :maquinas, :usuarios`,
      {
        // Se usan replacements para evitar inyección SQL
        replacements: {
          maquinas: maquinas,
          usuarios: usuarios,
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
};

const getUsersIP = async (req, res) => {
  const ip = req.ip;
  res.status(200).json({ data: ip, length: 1 });
};

const generarBC = async (req, res) => {
  try {
    const { orden, cantidad, operador, colaboradores, estacion } = req.body;

    // Log para depuración
    if (
      orden === undefined ||
      cantidad === undefined ||
      operador === undefined ||
      colaboradores === undefined ||
      estacion === undefined
    ) {
      return res.status(400).json({
        msg: "Faltan parámetros en la solicitud.",
      });
    }

    const resultados = await db.sequelize.query(
      `EXEC [RFID].[dbo].[SP_InsertarDistribucionAlmohadas] :Orden, :Cantidad, :Operador, :Colaboradores, :Estacion`,
      {
        // Se usan replacements para evitar inyección SQL
        replacements: {
          Orden: orden, // Coincide con el nombre del parámetro en el SP
          Cantidad: cantidad,
          Operador: operador,
          Colaboradores: colaboradores,
          Estacion: estacion,
        },
        type: QueryTypes.SELECT,
      }
    );

    // 4. Envía los resultados como respuesta
    res.status(200).json({ data: resultados, length: resultados.length });
  } catch (error) {
    console.error("Error al generar el código de barras:", error);
    res.status(500).json({
      msg: "Error en el servidor al generar el código de barras.",
    });
  }
};

const consultarBC = async (req, res) => {
  try {
    const { codigoBarras } = req.body;
    if (
      codigoBarras === undefined ||
      codigoBarras === null ||
      codigoBarras === ""
    ) {
      return res.status(400).json({
        msg: "Faltan parámetros en la solicitud.",
      });
    }
    //console.log("Código de barras recibido:", codigoBarras);
    //const resultados = []; // Aquí deberías implementar la lógica para consultar el código de barras
    const resultados = await db.sequelize.query(
      `EXEC [RFID].[dbo].[SP_ConsultaCodBarrasDistribucionAlmohadas] :CodigoBarras`,
      {
        // Se usan replacements para evitar inyección SQL
        replacements: {
          CodigoBarras: codigoBarras,
        },
        type: QueryTypes.SELECT,
      }
    );
    //4. Envía los resultados como respuesta
    res.status(200).json({ data: resultados, length: resultados.length });
  } catch (error) {
    console.error("Error al pistolear el código de barras:", error);
    res.status(500).json({
      msg: "Error en el servidor al pistolear el código de barras.",
    });
  }
};

const pistolearBC = async (req, res) => {
  try {
    const { codigoBarras } = req.body;
    if (
      codigoBarras === undefined ||
      codigoBarras === null ||
      codigoBarras === ""
    ) {
      return res.status(400).json({
        msg: "Faltan parámetros en la solicitud.",
      });
    }
    const resultados = await db.sequelize.query(
      `EXEC [RFID].[dbo].[SP_ActualizaCodBarrasDistribucionAlmohadas] :CodigoBarras`,
      {
        // Se usan replacements para evitar inyección SQL
        replacements: {
          CodigoBarras: codigoBarras,
        },
        type: QueryTypes.SELECT,
      }
    );
    // 4. Envía los resultados como respuesta
    res.status(200).json({ data: resultados, length: resultados.length });
  } catch (error) {
    console.error("Error al pistolear el código de barras:", error);
    res.status(500).json({
      msg: "Error en el servidor al pistolear el código de barras.",
    });
  }
};

const getOrdenPPH = async (req, res) => {
  try {
    // 1. Obtiene los parámetros de la URL (query string)
    const { num_orden } = req.body;

    // 2. Validación básica de los parámetros
    if (!num_orden) {
      return res.status(400).json({
        msg: 'El parámetro "num_orden" es requerido.',
      });
    }

    // 3. Ejecuta el Stored Procedure en la segunda base de datos (sequelize2)
    const resultados = await db.sequelize.query(
      `EXEC [${process.env.DB_NAME}].[dbo].[sp_BuscarProduccionConHistorial] :NumeroOrden`,
      {
        // Se usan replacements para evitar inyección SQL
        replacements: {
          NumeroOrden: num_orden,
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
};


const getOrdenesReimpresion = async (req, res) => {
  try {
    // 1. Obtiene los parámetros de la URL (query string)
    const { num_orden } = req.body;

    // 2. Validación básica de los parámetros
    if (!num_orden) {
      return res.status(400).json({
        msg: 'El parámetro "num_orden" es requerido.',
      });
    }

    // 3. Ejecuta el Stored Procedure en la segunda base de datos (sequelize2)
    const resultados = await db.sequelize.query(
      `EXEC [${process.env.DB_NAME}].[dbo].[CONSULTA_ORDEN_PRENOTI_PO] :ORDEN`,
      {
        // Se usan replacements para evitar inyección SQL
        replacements: {
          ORDEN: num_orden,
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
};

const getImpresionPlastificado = async (req, res) => {
  try {
    // 1. Obtiene los parámetros de la URL (query string)
    const { codQR } = req.body;

    // 2. Validación básica de los parámetros
    if (!codQR) {
      return res.status(400).json({
        msg: 'El parámetro "codQR" es requerido.',
      });
    }

    // 3. Ejecuta el Stored Procedure en la segunda base de datos (sequelize2)
    const resultados = await db.sequelize.query(
      `EXEC [Etiquetas].[dbo].[sp_ObtenerDetallePorCodigoBarrasPlastificado  ] :CodBarras`,
      {
        // Se usan replacements para evitar inyección SQL
        replacements: {
          CodBarras: codQR,
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
};



// --- Controlador para Cargar Ordenes (Cambio Descripción) ---
const cargarOrdenes = async (req, res) => {
  try {
    const { orden, descripcion, almacen } = req.body;

    if (!orden || !descripcion || !almacen) {
      return res.status(400).json({
        msg: "Faltan parámetros: orden, descripcion y almacen son requeridos.",
      });
    }

    const resultados = await db.sequelize.query(
      `EXEC [${process.env.DB_NAME}].[dbo].[sp_InsertarOrdenCambioDescripcion] :Orden, :Descripcion, :Almacen`,
      {
        replacements: {
          Orden: orden,
          Descripcion: descripcion,
          Almacen: almacen,
        },
        type: QueryTypes.SELECT,
      }
    );

    res.status(200).json({ data: resultados, msg: "Orden actualizada correctamente." });
  } catch (error) {
    console.error("Error al cargar ordenes:", error);
    res.status(500).json({
      msg: "Error en el servidor al cargar las ordenes.",
    });
  }
};

module.exports = {
  // ... tus otras funciones de controlador
  getOrdenesProduccion,
  getOrdenesProduccionAlmohadas,
  getUsersIP,
  generarBC,
  consultarBC,
  pistolearBC,
  getOrdenPPH,
  getOrdenesReimpresion,
  getImpresionPlastificado,
  cargarOrdenes,
};

