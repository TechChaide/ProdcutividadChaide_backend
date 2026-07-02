const express = require("express");
const router = express.Router();
const {
  getOperadoresPorNombredeAreaYFechaInicio,
  getTiempoProduccionPorHojaRutaYMaterial,
  getHabilidadesOperadorPorCodigoOperador,
  getDepartamenrtosDisponibles,
  getOrdenestrabajadosPorDepartamentoYCodigoEmpleadoYFechaInicio,

  getInformacionOrdenes,
  getInformacionOrdenesDelEmpleado,
  getProductividadDiariaPersonaPorCodigoEmpleadoFecha,
  getProductividadPersonaEnIntervaloDias,

  getProductividadPersonaEnIntervaloFechas,
  getFiltrosPorArea,


  getRegistrosProductividad,
  getTiemposJustificadosEnIntervaloFechas

} = require("../controllers/servicios_dashboard.controller");
const { route } = require("./area_process_control.routes");
const { ro } = require("date-fns/locale");


router.post('/operadoresByAreaYFI', getOperadoresPorNombredeAreaYFechaInicio);
router.post('/habilidadesOperadorByCodigo', getHabilidadesOperadorPorCodigoOperador);
router.post('/TiempoProduccionMaterialHR', getTiempoProduccionPorHojaRutaYMaterial);

///Este endpoint devuelve las ordenes trabajadas por la persona y por ende el
router.post('/OrdenesTrabajadasPorPDFI', getOrdenestrabajadosPorDepartamentoYCodigoEmpleadoYFechaInicio);
router.get('/DepartamentosDisponibles', getDepartamenrtosDisponibles);

router.post('/orderInfo',getInformacionOrdenes);
router.post('/orderInfoE',getInformacionOrdenesDelEmpleado);


///////Endpoint para la productividad de la persona
router.post('/ProductividadDiasPersona', getProductividadDiariaPersonaPorCodigoEmpleadoFecha);
router.post('/ProductividadSegmentoDiasPersona', getProductividadPersonaEnIntervaloDias);
router.post('/ProductividadFechasPersona', getProductividadPersonaEnIntervaloFechas);

router.get('/getFiltrosPorArea', getFiltrosPorArea)


router.post('/getRegistrosProductividad', getRegistrosProductividad);
router.post('/tiemposJustificadosEnIntervaloFechas', getTiemposJustificadosEnIntervaloFechas);



module.exports = router;
