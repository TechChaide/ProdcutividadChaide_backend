const express = require('express');
const router = express.Router();
const DepartamentoController = require('../controllers/departamento.controller');

// CRUD Endpoints
router.get('/', DepartamentoController.getAll);
router.post('/', DepartamentoController.createOrUpdate);
router.get('/:id', DepartamentoController.getById);
router.delete('/:id', DepartamentoController.deactivate);

module.exports = router;