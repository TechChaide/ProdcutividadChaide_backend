"use strict";

var express = require('express');
var router = express.Router();
var Log_ordenesController = require('../controllers/log_ordenes.controller');

// CRUD Endpoints
router.get('/', Log_ordenesController.getAll);
router.post('/', Log_ordenesController.createOrUpdate);
router.get('/:id', Log_ordenesController.getById);
module.exports = router;