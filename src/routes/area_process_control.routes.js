const express = require('express');
const router = express.Router();
const Area_process_controlController = require('../controllers/area_process_control.controller');

// CRUD Endpoints
router.get('/', Area_process_controlController.getAll);
router.post('/', Area_process_controlController.createOrUpdate);
router.get('/:id', Area_process_controlController.getById);
router.delete('/:id', Area_process_controlController.deactivate);

module.exports = router;