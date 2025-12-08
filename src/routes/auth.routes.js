const express = require('express');
const router = express.Router();
const { login, colaborar } = require('../controllers/auth.controller');

// Authentication routes
router.post('/login', login);
router.post('/loginColaborador', colaborar);

module.exports = router;