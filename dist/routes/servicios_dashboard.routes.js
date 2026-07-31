"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/servicios_dashboard.controller"),
  getOperadoresPorNombredeAreaYFechaInicio = _require.getOperadoresPorNombredeAreaYFechaInicio,
  getTiempoProduccionPorHojaRutaYMaterial = _require.getTiempoProduccionPorHojaRutaYMaterial,
  getHabilidadesOperadorPorCodigoOperador = _require.getHabilidadesOperadorPorCodigoOperador,
  getDepartamenrtosDisponibles = _require.getDepartamenrtosDisponibles,
  getOrdenestrabajadosPorDepartamentoYCodigoEmpleadoYFechaInicio = _require.getOrdenestrabajadosPorDepartamentoYCodigoEmpleadoYFechaInicio,
  getInformacionOrdenes = _require.getInformacionOrdenes,
  getInformacionOrdenesDelEmpleado = _require.getInformacionOrdenesDelEmpleado,
  getProductividadDiariaPersonaPorCodigoEmpleadoFecha = _require.getProductividadDiariaPersonaPorCodigoEmpleadoFecha,
  getProductividadPersonaEnIntervaloDias = _require.getProductividadPersonaEnIntervaloDias,
  getProductividadPersonaEnIntervaloFechas = _require.getProductividadPersonaEnIntervaloFechas,
  getFiltrosPorArea = _require.getFiltrosPorArea,
  getRegistrosProductividad = _require.getRegistrosProductividad,
  getTiemposJustificadosEnIntervaloFechas = _require.getTiemposJustificadosEnIntervaloFechas;
var _require2 = require("./area_process_control.routes"),
  route = _require2.route;
var _require3 = require("date-fns/locale"),
  ro = _require3.ro;
router.post('/operadoresByAreaYFI', getOperadoresPorNombredeAreaYFechaInicio);
router.post('/habilidadesOperadorByCodigo', getHabilidadesOperadorPorCodigoOperador);
router.post('/TiempoProduccionMaterialHR', getTiempoProduccionPorHojaRutaYMaterial);

///Este endpoint devuelve las ordenes trabajadas por la persona y por ende el
router.post('/OrdenesTrabajadasPorPDFI', getOrdenestrabajadosPorDepartamentoYCodigoEmpleadoYFechaInicio);
router.get('/DepartamentosDisponibles', getDepartamenrtosDisponibles);
router.post('/orderInfo', getInformacionOrdenes);
router.post('/orderInfoE', getInformacionOrdenesDelEmpleado);

///////Endpoint para la productividad de la persona
router.post('/ProductividadDiasPersona', getProductividadDiariaPersonaPorCodigoEmpleadoFecha);
router.post('/ProductividadSegmentoDiasPersona', getProductividadPersonaEnIntervaloDias);
router.post('/ProductividadFechasPersona', getProductividadPersonaEnIntervaloFechas);
router.get('/getFiltrosPorArea', getFiltrosPorArea);
router.post('/getRegistrosProductividad', getRegistrosProductividad);
router.post('/tiemposJustificadosEnIntervaloFechas', getTiemposJustificadosEnIntervaloFechas);
module.exports = router;