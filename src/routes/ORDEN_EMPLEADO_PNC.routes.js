const express = require('express');
const router = express.Router();
const Orden_empleado_PNC_Controller = require('../controllers/ORDEN_EMPLEADO_PNC.controller');

// CRUD Endpoints
router.get('/', Orden_empleado_PNC_Controller.getAll);
router.post('/', Orden_empleado_PNC_Controller.createOrUpdate);
router.get('/:id', Orden_empleado_PNC_Controller.getById);

module.exports = router;