"use strict";

var express = require('express');
var router = express.Router();
var EstacionController = require('../controllers/estacion.controller');

// CRUD Endpoints
router.get('/', EstacionController.getAll);
router.post('/', EstacionController.createOrUpdate);
router.get('/:id', EstacionController.getById);
router["delete"]('/:id', EstacionController.deactivate);
router.post('/IP', EstacionController.getEstacionesByIP);
module.exports = router;