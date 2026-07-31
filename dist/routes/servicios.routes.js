"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/servicios.controller"),
  getOrdenesProduccion = _require.getOrdenesProduccion,
  getOrdenesProduccionAlmohadas = _require.getOrdenesProduccionAlmohadas,
  getUsersIP = _require.getUsersIP,
  generarBC = _require.generarBC,
  pistolearBC = _require.pistolearBC,
  consultarBC = _require.consultarBC,
  getOrdenPPH = _require.getOrdenPPH,
  getOrdenesReimpresion = _require.getOrdenesReimpresion,
  getImpresionPlastificado = _require.getImpresionPlastificado,
  cargarOrdenes = _require.cargarOrdenes,
  buscarMaterialesPorMaterialCentro = _require.buscarMaterialesPorMaterialCentro,
  getProcesosPorSolicitante = _require.getProcesosPorSolicitante,
  getProcesosPorTipoCambio = _require.getProcesosPorTipoCambio,
  getPUltimosProcesosPorProductos = _require.getPUltimosProcesosPorProductos,
  getMaterialesCambiados = _require.getMaterialesCambiados,
  getMaterialesCambiadosPorFechas = _require.getMaterialesCambiadosPorFechas,
  insertarPreNotificacion = _require.insertarPreNotificacion,
  getOrdenesCorteTelaListaPorFecha = _require.getOrdenesCorteTelaListaPorFecha,
  getOrdenCorteTelaPorOrden = _require.getOrdenCorteTelaPorOrden,
  getPreNotificacionesPorFecha = _require.getPreNotificacionesPorFecha,
  getPreNotificacionPorOrden = _require.getPreNotificacionPorOrden;
router.post("/ordenes", getOrdenesProduccion);
router.post("/ordenesAlmh", getOrdenesProduccionAlmohadas);
router.get("/ipLOGON", getUsersIP);
router.post("/bar-code_generation", generarBC);
router.post("/bar-code_reader", pistolearBC);
router.post("/bar-code_readerC", consultarBC);
router.post("/reprintPlastificado", getImpresionPlastificado);
router.post("/order", getOrdenPPH);
router.post("/reprint_order", getOrdenesReimpresion);
router.post("/cargar_ordenes", cargarOrdenes);
router.post("/getElementsByCentroAndFert", buscarMaterialesPorMaterialCentro);

//////////////////Endpoints para el dashboard de Cambios de Plásticos
router.get("/UltimosCambios", getPUltimosProcesosPorProductos);
router.get("/ProcesosPorTipoCambio", getProcesosPorTipoCambio);
router.get("/getProcesosPorSolicitante", getProcesosPorSolicitante);
router.get("/getMaterialesCambiados", getMaterialesCambiados);
router.post("/getMaterialesCambiadosPorFechas", getMaterialesCambiadosPorFechas);

//////////////////Endpoints para pre-notificaciones
router.post("/insertarPreNotificacion", insertarPreNotificacion);
router.post("/ordenesCorteTelaListaPorFecha", getOrdenesCorteTelaListaPorFecha);
router.post("/ordenCorteTelaPorOrden", getOrdenCorteTelaPorOrden);
router.post("/preNotificacionesPorFecha", getPreNotificacionesPorFecha);
router.post("/preNotificacionPorOrden", getPreNotificacionPorOrden);
module.exports = router;