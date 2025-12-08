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
module.exports = router;
