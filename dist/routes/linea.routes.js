"use strict";

var express = require('express');
var router = express.Router();
var LineaController = require('../controllers/linea.controller');

// CRUD Endpoints
router.get('/', LineaController.getAll);
router.post('/', LineaController.createOrUpdate);
router.get('/:id', LineaController.getById);
router["delete"]('/:id', LineaController.deactivate);
module.exports = router;