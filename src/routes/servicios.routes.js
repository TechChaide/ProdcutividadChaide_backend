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
module.exports = router;
