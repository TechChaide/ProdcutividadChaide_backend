"use strict";

var express = require('express');
var router = express.Router();
var SesionController = require('../controllers/sesion.controller');
router.get('/as/:codigoEmpleado', SesionController.getByCodigoOperador);
router["delete"]('/cerrarSUsuario', SesionController.deactivateByUser);
router.post('/metricasPorOperador', SesionController.getMetricasByCodigoOperador);

// CRUD Endpoints
router.get('/', SesionController.getAll);
router.post('/', SesionController.createOrUpdate);
router.get('/:id', SesionController.getById);
router["delete"]('/:id', SesionController.deactivate);
module.exports = router;