const express = require('express');
const router = express.Router();
const EstacionController = require('../controllers/estacion.controller');

// CRUD Endpoints
router.get('/', EstacionController.getAll);
router.post('/', EstacionController.createOrUpdate);
router.get('/:id', EstacionController.getById);
router.delete('/:id', EstacionController.deactivate);

router.post('/IP', EstacionController.getEstacionesByIP);

module.exports = router;