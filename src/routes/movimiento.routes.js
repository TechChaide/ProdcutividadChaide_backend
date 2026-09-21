const express = require('express');
const router = express.Router();
const MovimientoController = require('../controllers/movimiento.controller');

// CRUD Endpoints
router.get('/', MovimientoController.getAll);
router.post('/', MovimientoController.createOrUpdate);
router.get('/:id', MovimientoController.getById);
router.delete('/:id', MovimientoController.deactivate);

module.exports = router;