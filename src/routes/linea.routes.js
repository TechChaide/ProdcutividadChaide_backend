const express = require('express');
const router = express.Router();
const LineaController = require('../controllers/linea.controller');

// CRUD Endpoints
router.get('/', LineaController.getAll);
router.post('/', LineaController.createOrUpdate);
router.get('/:id', LineaController.getById);
router.delete('/:id', LineaController.deactivate);

module.exports = router;