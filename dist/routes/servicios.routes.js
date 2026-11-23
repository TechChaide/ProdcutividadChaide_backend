"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/servicios.controller"),
  getOrdenesProduccion = _require.getOrdenesProduccion,
  getOrdenesProduccionAlmohadas = _require.getOrdenesProduccionAlmohadas,
  getUsersIP = _require.getUsersIP,
  generarBC = _require.generarBC,
  cambiarEstadoEtiquetaDistribucionAlmohadas = _require.cambiarEstadoEtiquetaDistribucionAlmohadas,
  consultarOrdenDistribucionAlmohadas = _require.consultarOrdenDistribucionAlmohadas,
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
  getPreNotificacionPorOrden = _require.getPreNotificacionPorOrden,
  insertarLogPlanchasEspumaPrensado = _require.insertarLogPlanchasEspumaPrensado,
  buscarOrdenesPlanchasEspumaPrensado = _require.buscarOrdenesPlanchasEspumaPrensado,
  buscarSecuencialPrensado = _require.buscarSecuencialPrensado,
  cambiarEstadoEtiquetasPrensado = _require.cambiarEstadoEtiquetasPrensado,
  buscarEtiquetasXOrdenPrensado = _require.buscarEtiquetasXOrdenPrensado,
  buscarEtiquetasXQRPrensado = _require.buscarEtiquetasXQRPrensado,
  buscarCantQRxEstacionRangoPrensado = _require.buscarCantQRxEstacionRangoPrensado,
  buscarDesperdicioXCodBarras = _require.buscarDesperdicioXCodBarras,
  ingresarDesperdicio = _require.ingresarDesperdicio,
  getBodegasPorCentro = _require.getBodegasPorCentro,
  geetInformacionQR = _require.geetInformacionQR,
  geetInformacionMaterial = _require.geetInformacionMaterial,
  getMaterialesPivoteadosByCodigoFertPrincipal = _require.getMaterialesPivoteadosByCodigoFertPrincipal,
  getMaterialesPivoteadosByMaterial = _require.getMaterialesPivoteadosByMaterial,
  getMovimientosPorIngreso = _require.getMovimientosPorIngreso;
router.post("/ordenes", getOrdenesProduccion);
router.post("/ordenesAlmh", getOrdenesProduccionAlmohadas);
router.get("/ipLOGON", getUsersIP);
router.post("/bar-code_generation", generarBC);
router.post("/bar-code_status", cambiarEstadoEtiquetaDistribucionAlmohadas);
router.post("/bar-code_order", consultarOrdenDistribucionAlmohadas);
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

//////////////////Endpoints para planchas de espuma prensado
router.post("/insertarLogPlanchasEspumaPrensado", insertarLogPlanchasEspumaPrensado);
router.post("/buscarOrdenesPlanchasEspumaPrensado", buscarOrdenesPlanchasEspumaPrensado);
router.get("/buscarSecuencialPrensado", buscarSecuencialPrensado);
router.post("/cambiarEstadoEtiquetasPrensado", cambiarEstadoEtiquetasPrensado);
router.post("/buscarEtiquetasXOrdenPrensado", buscarEtiquetasXOrdenPrensado);
router.post("/buscarEtiquetasXQRPrensado", buscarEtiquetasXQRPrensado);
router.post("/buscarCantQRxEstacionRangoPrensado", buscarCantQRxEstacionRangoPrensado);

//////////////////Endpoints para lectura de desperdicios
router.post("/buscarDesperdicioXCodBarras", buscarDesperdicioXCodBarras);
router.post("/ingresarDesperdicio", ingresarDesperdicio);
router.get("/getBodegasPorCentro", getBodegasPorCentro);
router.post("/getInformacionQR", geetInformacionQR);
router.post("/getInformacionMaterial", geetInformacionMaterial);
router.post("/MaterialesPivotFertPrincipal", getMaterialesPivoteadosByCodigoFertPrincipal);
router.post("/MaterialesPivotPorMaterial", getMaterialesPivoteadosByMaterial);
router.post("/MovimientosPorIngreso", getMovimientosPorIngreso);
module.exports = router;