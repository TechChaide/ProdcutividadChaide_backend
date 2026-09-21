const express = require('express');
const router = express.Router();
const IngresosController = require('../controllers/ingresos.controller');

// CRUD Endpoints
router.get('/', IngresosController.getAll);
router.post('/', IngresosController.createOrUpdate);
router.get('/:id', IngresosController.getById);
router.delete('/:id', IngresosController.deactivate);

module.exports = router;