const express = require('express');
const router = express.Router();
const LineaDepartamentoController = require('../controllers/linea_departamento.controller');

// CRUD Endpoints
router.get('/', LineaDepartamentoController.getAll);
router.post('/', LineaDepartamentoController.createOrUpdate);
router.get('/:id', LineaDepartamentoController.getById);
router.post('/departamento', LineaDepartamentoController.getByDepartamento);
router.delete('/:id', LineaDepartamentoController.deactivate);

module.exports = router;
