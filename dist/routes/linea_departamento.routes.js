"use strict";

var express = require('express');
var router = express.Router();
var LineaDepartamentoController = require('../controllers/linea_departamento.controller');

// CRUD Endpoints
router.get('/', LineaDepartamentoController.getAll);
router.post('/', LineaDepartamentoController.createOrUpdate);
router.get('/:id', LineaDepartamentoController.getById);
router.post('/departamento', LineaDepartamentoController.getByDepartamento);
router["delete"]('/:id', LineaDepartamentoController.deactivate);
module.exports = router;