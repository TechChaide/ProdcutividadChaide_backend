"use strict";

var express = require('express');
var router = express.Router();
var IngresosController = require('../controllers/ingresos.controller');

// CRUD Endpoints
router.get('/', IngresosController.getAll);
router.post('/', IngresosController.createOrUpdate);
router.post('/byQR', IngresosController.getByQR);
router.get('/:id', IngresosController.getById);
router["delete"]('/:id', IngresosController.deactivate);
module.exports = router;