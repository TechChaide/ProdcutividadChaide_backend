const express = require('express');
const router = express.Router();
const Log_ordenesController = require('../controllers/log_ordenes.controller');

// CRUD Endpoints
router.get('/', Log_ordenesController.getAll);
router.post('/', Log_ordenesController.createOrUpdate);
router.get('/:id', Log_ordenesController.getById);

module.exports = router;