"use strict";

var express = require('express');
var router = express.Router();
var DepartamentoController = require('../controllers/departamento.controller');

// CRUD Endpoints
router.get('/', DepartamentoController.getAll);
router.post('/', DepartamentoController.createOrUpdate);
router.get('/:id', DepartamentoController.getById);
router["delete"]('/:id', DepartamentoController.deactivate);
module.exports = router;