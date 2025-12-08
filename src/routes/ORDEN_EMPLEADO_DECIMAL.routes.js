const express = require('express');
const router = express.Router();
const Orden_empleado_decimalController = require('../controllers/ORDEN_EMPLEADO_DECIMAL.controller');

// CRUD Endpoints
router.get('/', Orden_empleado_decimalController.getAll);
router.post('/', Orden_empleado_decimalController.createOrUpdate);
router.get('/:id', Orden_empleado_decimalController.getById);

module.exports = router;