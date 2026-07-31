"use strict";

var express = require('express');
var router = express.Router();
var _require = require('../controllers/auth.controller'),
  login = _require.login,
  colaborar = _require.colaborar;

// Authentication routes
router.post('/login', login);
router.post('/loginColaborador', colaborar);
module.exports = router;