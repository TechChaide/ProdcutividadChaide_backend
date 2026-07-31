"use strict";

var express = require('express');
var router = express.Router();
var Log_cambio_plasticosController = require('../controllers/log_cambio_plasticos.controller');

// CRUD Endpoints
router.get('/', Log_cambio_plasticosController.getAll);
router.post('/', Log_cambio_plasticosController.createOrUpdate);
router.get('/:id', Log_cambio_plasticosController.getById);
router["delete"]('/:id', Log_cambio_plasticosController.deactivate);
module.exports = router;