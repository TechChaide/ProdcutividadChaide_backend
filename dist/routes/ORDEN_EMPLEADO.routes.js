"use strict";

var express = require('express');
var router = express.Router();
var Orden_empleadoController = require('../controllers/ORDEN_EMPLEADO.controller');

// CRUD Endpoints
router.get('/', Orden_empleadoController.getAll);
router.post('/', Orden_empleadoController.createOrUpdate);
router.get('/:id', Orden_empleadoController.getById);
module.exports = router;