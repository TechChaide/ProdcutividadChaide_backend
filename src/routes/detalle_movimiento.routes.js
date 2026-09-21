const express = require('express');
const router = express.Router();
const Detalle_movimientoController = require('../controllers/detalle_movimiento.controller');

// CRUD Endpoints
router.get('/', Detalle_movimientoController.getAll);
router.post('/', Detalle_movimientoController.createOrUpdate);
router.get('/:id', Detalle_movimientoController.getById);
router.delete('/:id', Detalle_movimientoController.deactivate);

module.exports = router;