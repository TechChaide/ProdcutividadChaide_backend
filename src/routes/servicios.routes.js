const express = require("express");
const router = express.Router();
const {
  getOrdenesProduccion,
  getOrdenesProduccionAlmohadas,
  getUsersIP,
  generarBC,
  pistolearBC,
  consultarBC,
  getOrdenPPH,
  getOrdenesReimpresion,
  getImpresionPlastificado,
  cargarOrdenes,
  buscarMaterialesPorMaterialCentro,

  getProcesosPorSolicitante,
  getProcesosPorTipoCambio,
  getPUltimosProcesosPorProductos,
  getMaterialesCambiados,
  getMaterialesCambiadosPorFechas,
  insertarPreNotificacion,
  getOrdenesCorteTelaListaPorFecha,
  getOrdenCorteTelaPorOrden,
  getPreNotificacionesPorFecha,
  getPreNotificacionPorOrden,
  insertarLogPlanchasEspumaPrensado,
  buscarOrdenesPlanchasEspumaPrensado,
  buscarSecuencialPrensado,
  cambiarEstadoEtiquetasPrensado,
  buscarEtiquetasXOrdenPrensado,

  getBodegasPorCentro,
  geetInformacionQR,
  geetInformacionMaterial,
  getMaterialesPivoteadosByCodigoFertPrincipal,
  getMaterialesPivoteadosByMaterial,
  getMovimientosPorIngreso,

} = require("../controllers/servicios.controller");

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

//////////////////Endpoints para planchas de espuma prensado
router.post("/insertarLogPlanchasEspumaPrensado", insertarLogPlanchasEspumaPrensado);
router.post("/buscarOrdenesPlanchasEspumaPrensado", buscarOrdenesPlanchasEspumaPrensado);
router.get("/buscarSecuencialPrensado", buscarSecuencialPrensado);
router.post("/cambiarEstadoEtiquetasPrensado", cambiarEstadoEtiquetasPrensado);
router.post("/buscarEtiquetasXOrdenPrensado", buscarEtiquetasXOrdenPrensado);

router.get("/getBodegasPorCentro", getBodegasPorCentro);
router.post("/getInformacionQR", geetInformacionQR);
router.post("/getInformacionMaterial", geetInformacionMaterial);
router.post("/MaterialesPivotFertPrincipal", getMaterialesPivoteadosByCodigoFertPrincipal);
router.post("/MaterialesPivotPorMaterial", getMaterialesPivoteadosByMaterial);
router.post("/MovimientosPorIngreso", getMovimientosPorIngreso);

module.exports = router;
