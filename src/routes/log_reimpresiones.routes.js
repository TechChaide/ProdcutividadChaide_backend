const express = require('express');
const router = express.Router();
const Log_reimpresionesController = require('../controllers/log_reimpresiones.controller');

// CRUD Endpoints

router.post('/LbyNOP', Log_reimpresionesController.getByNumeroOrden);
router.post('/LbyNOPPlastificado', Log_reimpresionesController.getByCodigoBarras);

router.get('/', Log_reimpresionesController.getAll);
router.post('/', Log_reimpresionesController.createOrUpdate);
router.get('/:id', Log_reimpresionesController.getById);
router.delete('/:id', Log_reimpresionesController.deactivate);

module.exports = router;