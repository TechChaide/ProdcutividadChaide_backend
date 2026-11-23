"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// src/controllers/consultas.controller.js

var _require = require("sequelize"),
  QueryTypes = _require.QueryTypes;
var db = require("../models"); // Importa el objeto db desde los modelos
var _require2 = require("../helpers/sap_desperdicios.helper"),
  registrarDesperdicioSAP = _require2.registrarDesperdicioSAP;

// --- Controlador para Z_Consulta_Ordenes_Produccion ---
var getOrdenesProduccion = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var _req$body, maquinas, usuarios, resultados, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          // 1. Obtiene los parámetros de la URL (query string)
          _req$body = req.body, maquinas = _req$body.maquinas, usuarios = _req$body.usuarios; // 2. Validación básica de los parámetros
          if (!(!maquinas || !usuarios)) {
            _context.n = 1;
            break;
          }
          return _context.a(2, res.status(400).json({
            msg: 'Los parámetros "maquinas" y "usuarios" son requeridos.'
          }));
        case 1:
          _context.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[Z_Consulta_Ordenes_Produccion] :maquinas, :usuarios"), {
            // Se usan replacements para evitar inyección SQL
            replacements: {
              maquinas: maquinas,
              usuarios: usuarios
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context.v;
          // 4. Envía los resultados como respuesta
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context.n = 4;
          break;
        case 3:
          _context.p = 3;
          _t = _context.v;
          console.error("Error al consultar órdenes de producción:", _t);
          res.status(500).json({
            msg: "Error en el servidor al consultar las órdenes."
          });
        case 4:
          return _context.a(2);
      }
    }, _callee, null, [[0, 3]]);
  }));
  return function getOrdenesProduccion(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// --- Controlador para Z_Consulta_Ordenes_Produccion ---
var getOrdenesProduccionAlmohadas = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var _req$body2, maquinas, usuarios, resultados, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          // 1. Obtiene los parámetros de la URL (query string)
          _req$body2 = req.body, maquinas = _req$body2.maquinas, usuarios = _req$body2.usuarios; // 2. Validación básica de los parámetros
          if (!(!maquinas || !usuarios)) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, res.status(400).json({
            msg: 'Los parámetros "maquinas" y "usuarios" son requeridos.'
          }));
        case 1:
          _context2.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_Consulta_Ordenes_Produccion_Almohadas] :maquinas, :usuarios"), {
            // Se usan replacements para evitar inyección SQL
            replacements: {
              maquinas: maquinas,
              usuarios: usuarios
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context2.v;
          // 4. Envía los resultados como respuesta
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context2.n = 4;
          break;
        case 3:
          _context2.p = 3;
          _t2 = _context2.v;
          console.error("Error al consultar órdenes de producción:", _t2);
          res.status(500).json({
            msg: "Error en el servidor al consultar las órdenes."
          });
        case 4:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 3]]);
  }));
  return function getOrdenesProduccionAlmohadas(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getUsersIP = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var ip;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          ip = req.ip;
          res.status(200).json({
            data: ip,
            length: 1
          });
        case 1:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return function getUsersIP(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var generarBC = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var _req$body3, orden, cantidad, operador, colaboradores, estacion, resultados, _t3;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          _req$body3 = req.body, orden = _req$body3.orden, cantidad = _req$body3.cantidad, operador = _req$body3.operador, colaboradores = _req$body3.colaboradores, estacion = _req$body3.estacion; // Log para depuración
          if (!(orden === undefined || cantidad === undefined || operador === undefined || colaboradores === undefined || estacion === undefined)) {
            _context4.n = 1;
            break;
          }
          return _context4.a(2, res.status(400).json({
            msg: "Faltan parámetros en la solicitud."
          }));
        case 1:
          _context4.n = 2;
          return db.sequelize.query("EXEC [RFID].[dbo].[SP_InsertarDistribucionAlmohadas] :Orden, :Cantidad, :Operador, :Colaboradores, :Estacion", {
            // Se usan replacements para evitar inyección SQL
            replacements: {
              Orden: orden,
              // Coincide con el nombre del parámetro en el SP
              Cantidad: cantidad,
              Operador: operador,
              Colaboradores: colaboradores,
              Estacion: estacion
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context4.v;
          // 4. Envía los resultados como respuesta
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context4.n = 4;
          break;
        case 3:
          _context4.p = 3;
          _t3 = _context4.v;
          console.error("Error al generar el código de barras:", _t3);
          res.status(500).json({
            msg: "Error en el servidor al generar el código de barras."
          });
        case 4:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 3]]);
  }));
  return function generarBC(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var cambiarEstadoEtiquetaDistribucionAlmohadas = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var _req$body4, _req$body5, estado, codigoBarras, resultados, _t4;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          estado = String(((_req$body4 = req.body) === null || _req$body4 === void 0 ? void 0 : _req$body4.estado) || "").trim();
          codigoBarras = String(((_req$body5 = req.body) === null || _req$body5 === void 0 ? void 0 : _req$body5.codigoBarras) || "").trim();
          if (!(!estado || !codigoBarras)) {
            _context5.n = 1;
            break;
          }
          return _context5.a(2, res.status(400).json({
            msg: "Faltan parámetros: estado y codigoBarras son requeridos."
          }));
        case 1:
          _context5.n = 2;
          return db.sequelize.query("EXEC [RFID].[dbo].[SP_CambiaEstadoEtiquetaDistribucionAlmohadas] :Estado, :CodigoBarras", {
            replacements: {
              Estado: estado,
              CodigoBarras: codigoBarras
            },
            type: QueryTypes.RAW
          });
        case 2:
          resultados = _context5.v;
          res.status(200).json({
            ok: true,
            msg: "Estado de etiqueta actualizado correctamente.",
            data: resultados
          });
          _context5.n = 4;
          break;
        case 3:
          _context5.p = 3;
          _t4 = _context5.v;
          console.error("Error al cambiar el estado de la etiqueta de distribución de almohadas:", _t4);
          res.status(500).json({
            msg: "Error en el servidor al cambiar el estado de la etiqueta."
          });
        case 4:
          return _context5.a(2);
      }
    }, _callee5, null, [[0, 3]]);
  }));
  return function cambiarEstadoEtiquetaDistribucionAlmohadas(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
var consultarOrdenDistribucionAlmohadas = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var orden, resultados, _t5;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          orden = req.body.orden;
          if (orden) {
            _context6.n = 1;
            break;
          }
          return _context6.a(2, res.status(400).json({
            msg: "Faltan parámetros: orden es requerido."
          }));
        case 1:
          _context6.n = 2;
          return db.sequelize.query("EXEC [RFID].[dbo].[SP_ConsultaOrdenDistribucionAlmohadas] :Orden", {
            replacements: {
              Orden: orden
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context6.v;
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context6.n = 4;
          break;
        case 3:
          _context6.p = 3;
          _t5 = _context6.v;
          console.error("Error al consultar etiquetas de distribución de almohadas por orden:", _t5);
          res.status(500).json({
            msg: "Error en el servidor al consultar las etiquetas de la orden."
          });
        case 4:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 3]]);
  }));
  return function consultarOrdenDistribucionAlmohadas(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
var consultarBC = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var codigoBarras, resultados, _t6;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          codigoBarras = req.body.codigoBarras;
          if (!(codigoBarras === undefined || codigoBarras === null || codigoBarras === "")) {
            _context7.n = 1;
            break;
          }
          return _context7.a(2, res.status(400).json({
            msg: "Faltan parámetros en la solicitud."
          }));
        case 1:
          _context7.n = 2;
          return db.sequelize.query("EXEC [RFID].[dbo].[SP_ConsultaCodBarrasDistribucionAlmohadas] :CodigoBarras", {
            // Se usan replacements para evitar inyección SQL
            replacements: {
              CodigoBarras: codigoBarras
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context7.v;
          //4. Envía los resultados como respuesta
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context7.n = 4;
          break;
        case 3:
          _context7.p = 3;
          _t6 = _context7.v;
          console.error("Error al pistolear el código de barras:", _t6);
          res.status(500).json({
            msg: "Error en el servidor al pistolear el código de barras."
          });
        case 4:
          return _context7.a(2);
      }
    }, _callee7, null, [[0, 3]]);
  }));
  return function consultarBC(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
var pistolearBC = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req, res) {
    var codigoBarras, resultados, _t7;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          _context8.p = 0;
          codigoBarras = req.body.codigoBarras;
          if (!(codigoBarras === undefined || codigoBarras === null || codigoBarras === "")) {
            _context8.n = 1;
            break;
          }
          return _context8.a(2, res.status(400).json({
            msg: "Faltan parámetros en la solicitud."
          }));
        case 1:
          _context8.n = 2;
          return db.sequelize.query("EXEC [RFID].[dbo].[SP_ActualizaCodBarrasDistribucionAlmohadas] :CodigoBarras", {
            // Se usan replacements para evitar inyección SQL
            replacements: {
              CodigoBarras: codigoBarras
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context8.v;
          // 4. Envía los resultados como respuesta
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context8.n = 4;
          break;
        case 3:
          _context8.p = 3;
          _t7 = _context8.v;
          console.error("Error al pistolear el código de barras:", _t7);
          res.status(500).json({
            msg: "Error en el servidor al pistolear el código de barras."
          });
        case 4:
          return _context8.a(2);
      }
    }, _callee8, null, [[0, 3]]);
  }));
  return function pistolearBC(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();
var getOrdenPPH = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(req, res) {
    var num_orden, resultados, _t8;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          _context9.p = 0;
          // 1. Obtiene los parámetros de la URL (query string)
          num_orden = req.body.num_orden; // 2. Validación básica de los parámetros
          if (num_orden) {
            _context9.n = 1;
            break;
          }
          return _context9.a(2, res.status(400).json({
            msg: 'El parámetro "num_orden" es requerido.'
          }));
        case 1:
          _context9.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_BuscarProduccionConHistorial] :NumeroOrden"), {
            // Se usan replacements para evitar inyección SQL
            replacements: {
              NumeroOrden: num_orden
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context9.v;
          // 4. Envía los resultados como respuesta
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context9.n = 4;
          break;
        case 3:
          _context9.p = 3;
          _t8 = _context9.v;
          console.error("Error al consultar órdenes de producción:", _t8);
          res.status(500).json({
            msg: "Error en el servidor al consultar las órdenes."
          });
        case 4:
          return _context9.a(2);
      }
    }, _callee9, null, [[0, 3]]);
  }));
  return function getOrdenPPH(_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}();
var getOrdenesReimpresion = /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(req, res) {
    var num_orden, resultados, _t9;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          _context0.p = 0;
          // 1. Obtiene los parámetros de la URL (query string)
          num_orden = req.body.num_orden; // 2. Validación básica de los parámetros
          if (num_orden) {
            _context0.n = 1;
            break;
          }
          return _context0.a(2, res.status(400).json({
            msg: 'El parámetro "num_orden" es requerido.'
          }));
        case 1:
          _context0.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[CONSULTA_ORDEN_PRENOTI_PO] :ORDEN"), {
            // Se usan replacements para evitar inyección SQL
            replacements: {
              ORDEN: num_orden
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context0.v;
          // 4. Envía los resultados como respuesta
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context0.n = 4;
          break;
        case 3:
          _context0.p = 3;
          _t9 = _context0.v;
          console.error("Error al consultar órdenes de producción:", _t9);
          res.status(500).json({
            msg: "Error en el servidor al consultar las órdenes."
          });
        case 4:
          return _context0.a(2);
      }
    }, _callee0, null, [[0, 3]]);
  }));
  return function getOrdenesReimpresion(_x17, _x18) {
    return _ref0.apply(this, arguments);
  };
}();
var getImpresionPlastificado = /*#__PURE__*/function () {
  var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(req, res) {
    var codQR, resultados, _t0;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          _context1.p = 0;
          // 1. Obtiene los parámetros de la URL (query string)
          codQR = req.body.codQR; // 2. Validación básica de los parámetros
          if (codQR) {
            _context1.n = 1;
            break;
          }
          return _context1.a(2, res.status(400).json({
            msg: 'El parámetro "codQR" es requerido.'
          }));
        case 1:
          _context1.n = 2;
          return db.sequelize.query("EXEC [Etiquetas].[dbo].[sp_ObtenerDetallePorCodigoBarrasPlastificado  ] :CodBarras", {
            // Se usan replacements para evitar inyección SQL
            replacements: {
              CodBarras: codQR
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context1.v;
          // 4. Envía los resultados como respuesta
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context1.n = 4;
          break;
        case 3:
          _context1.p = 3;
          _t0 = _context1.v;
          console.error("Error al consultar órdenes de producción:", _t0);
          res.status(500).json({
            msg: "Error en el servidor al consultar las órdenes."
          });
        case 4:
          return _context1.a(2);
      }
    }, _callee1, null, [[0, 3]]);
  }));
  return function getImpresionPlastificado(_x19, _x20) {
    return _ref1.apply(this, arguments);
  };
}();

// --- Controlador para Cargar Ordenes (Cambio Descripción) ---
var cargarOrdenes = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(req, res) {
    var _req$body6, orden, descripcion, almacen, resultados, _t1;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.p = _context10.n) {
        case 0:
          _context10.p = 0;
          _req$body6 = req.body, orden = _req$body6.orden, descripcion = _req$body6.descripcion, almacen = _req$body6.almacen;
          if (!(!orden || !descripcion || !almacen)) {
            _context10.n = 1;
            break;
          }
          return _context10.a(2, res.status(400).json({
            msg: "Faltan parámetros: orden, descripcion y almacen son requeridos."
          }));
        case 1:
          _context10.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_InsertarOrdenCambioDescripcion] :Orden, :Descripcion, :Almacen"), {
            replacements: {
              Orden: orden,
              Descripcion: descripcion,
              Almacen: almacen
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context10.v;
          res.status(200).json({
            data: resultados,
            msg: "Orden actualizada correctamente."
          });
          _context10.n = 4;
          break;
        case 3:
          _context10.p = 3;
          _t1 = _context10.v;
          console.error("Error al cargar ordenes:", _t1);
          res.status(500).json({
            msg: "Error en el servidor al cargar las ordenes."
          });
        case 4:
          return _context10.a(2);
      }
    }, _callee10, null, [[0, 3]]);
  }));
  return function cargarOrdenes(_x21, _x22) {
    return _ref10.apply(this, arguments);
  };
}();

// --- Controlador para Cargar Ordenes (Cambio Descripción) ---
var buscarMaterialesPorMaterialCentro = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(req, res) {
    var _req$body7, material, centro, resultados, _t10;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.p = _context11.n) {
        case 0:
          _context11.p = 0;
          _req$body7 = req.body, material = _req$body7.material, centro = _req$body7.centro;
          if (!(!material || !centro)) {
            _context11.n = 1;
            break;
          }
          return _context11.a(2, res.status(400).json({
            msg: "Faltan parámetros: material y centro son requeridos."
          }));
        case 1:
          _context11.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_ObtenerMaterialesPorOrden] :Material, :Centro"), {
            replacements: {
              Material: material,
              Centro: centro
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context11.v;
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context11.n = 4;
          break;
        case 3:
          _context11.p = 3;
          _t10 = _context11.v;
          console.error("Error al cargar ordenes:", _t10);
          res.status(500).json({
            msg: "Error en el servidor al cargar las ordenes."
          });
        case 4:
          return _context11.a(2);
      }
    }, _callee11, null, [[0, 3]]);
  }));
  return function buscarMaterialesPorMaterialCentro(_x23, _x24) {
    return _ref11.apply(this, arguments);
  };
}();

//////////////////////////////Funciones de Dashboard para cambios de plastico

var getProcesosPorSolicitante = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(req, res) {
    var resultados, _t11;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.p = _context12.n) {
        case 0:
          _context12.p = 0;
          _context12.n = 1;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_GetProcesosPorSolicitante]"), {
            type: QueryTypes.SELECT
          });
        case 1:
          resultados = _context12.v;
          // 4. Envía los resultados como respuesta
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context12.n = 3;
          break;
        case 2:
          _context12.p = 2;
          _t11 = _context12.v;
          console.error("Error al consultar Procesos:", _t11);
          res.status(500).json({
            msg: "Error en el servidor al consultar los Procesos."
          });
        case 3:
          return _context12.a(2);
      }
    }, _callee12, null, [[0, 2]]);
  }));
  return function getProcesosPorSolicitante(_x25, _x26) {
    return _ref12.apply(this, arguments);
  };
}();
var getProcesosPorTipoCambio = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(req, res) {
    var resultados, _t12;
    return _regenerator().w(function (_context13) {
      while (1) switch (_context13.p = _context13.n) {
        case 0:
          _context13.p = 0;
          _context13.n = 1;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_GetResumenCambiosPlastico]"), {
            type: QueryTypes.SELECT
          });
        case 1:
          resultados = _context13.v;
          // 4. Envía los resultados como respuesta
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context13.n = 3;
          break;
        case 2:
          _context13.p = 2;
          _t12 = _context13.v;
          console.error("Error al consultar Procesos:", _t12);
          res.status(500).json({
            msg: "Error en el servidor al consultar los Procesos."
          });
        case 3:
          return _context13.a(2);
      }
    }, _callee13, null, [[0, 2]]);
  }));
  return function getProcesosPorTipoCambio(_x27, _x28) {
    return _ref13.apply(this, arguments);
  };
}();
var getPUltimosProcesosPorProductos = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(req, res) {
    var resultados, _t13;
    return _regenerator().w(function (_context14) {
      while (1) switch (_context14.p = _context14.n) {
        case 0:
          _context14.p = 0;
          _context14.n = 1;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_GetUltimosEstadosProductos]"), {
            type: QueryTypes.SELECT
          });
        case 1:
          resultados = _context14.v;
          // 4. Envía los resultados como respuesta
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context14.n = 3;
          break;
        case 2:
          _context14.p = 2;
          _t13 = _context14.v;
          console.error("Error al consultar Procesos:", _t13);
          res.status(500).json({
            msg: "Error en el servidor al consultar los Procesos."
          });
        case 3:
          return _context14.a(2);
      }
    }, _callee14, null, [[0, 2]]);
  }));
  return function getPUltimosProcesosPorProductos(_x29, _x30) {
    return _ref14.apply(this, arguments);
  };
}();
var getMaterialesCambiados = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(req, res) {
    var resultados, _t14;
    return _regenerator().w(function (_context15) {
      while (1) switch (_context15.p = _context15.n) {
        case 0:
          _context15.p = 0;
          _context15.n = 1;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_GetMaterialesCambiados]"), {
            type: QueryTypes.SELECT
          });
        case 1:
          resultados = _context15.v;
          // 4. Envía los resultados como respuesta
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context15.n = 3;
          break;
        case 2:
          _context15.p = 2;
          _t14 = _context15.v;
          console.error("Error al consultar Procesos:", _t14);
          res.status(500).json({
            msg: "Error en el servidor al consultar los Procesos."
          });
        case 3:
          return _context15.a(2);
      }
    }, _callee15, null, [[0, 2]]);
  }));
  return function getMaterialesCambiados(_x31, _x32) {
    return _ref15.apply(this, arguments);
  };
}();
var getMaterialesCambiadosPorFechas = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(req, res) {
    var _req$body8, fechaInicio, fechaFin, resultados, _t15;
    return _regenerator().w(function (_context16) {
      while (1) switch (_context16.p = _context16.n) {
        case 0:
          _context16.p = 0;
          _req$body8 = req.body, fechaInicio = _req$body8.fechaInicio, fechaFin = _req$body8.fechaFin; // 1. Ejecuta el Stored Procedure en la segunda base de datos (sequelize2)
          _context16.n = 1;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_ObtenerCambiosPlasticosPorFechas] :FechaInicio, :FechaFin"), {
            replacements: {
              FechaInicio: fechaInicio,
              FechaFin: fechaFin
            },
            type: QueryTypes.SELECT
          });
        case 1:
          resultados = _context16.v;
          // 4. Envía los resultados como respuesta
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context16.n = 3;
          break;
        case 2:
          _context16.p = 2;
          _t15 = _context16.v;
          console.error("Error al consultar Procesos:", _t15);
          res.status(500).json({
            msg: "Error en el servidor al consultar los Procesos."
          });
        case 3:
          return _context16.a(2);
      }
    }, _callee16, null, [[0, 2]]);
  }));
  return function getMaterialesCambiadosPorFechas(_x33, _x34) {
    return _ref16.apply(this, arguments);
  };
}();

//////////////////////////////////////////////////////////////////////////////

// --- Controlador para Insertar Pre-Notificación ---
var insertarPreNotificacion = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(req, res) {
    var _req$body9, orden, cantidadInicialOrden, cantidadRealOrden, usuarioLog, estado, materialOrden, nombreMaterialOrden, materialComponente, nombreMaterialComponente, cantidadInicialComponente, cantidadRealComponente, _yield$db$sequelize$q, _yield$db$sequelize$q2, resultado, fueInsertado, _t16;
    return _regenerator().w(function (_context17) {
      while (1) switch (_context17.p = _context17.n) {
        case 0:
          _context17.p = 0;
          _req$body9 = req.body, orden = _req$body9.orden, cantidadInicialOrden = _req$body9.cantidadInicialOrden, cantidadRealOrden = _req$body9.cantidadRealOrden, usuarioLog = _req$body9.usuarioLog, estado = _req$body9.estado, materialOrden = _req$body9.materialOrden, nombreMaterialOrden = _req$body9.nombreMaterialOrden, materialComponente = _req$body9.materialComponente, nombreMaterialComponente = _req$body9.nombreMaterialComponente, cantidadInicialComponente = _req$body9.cantidadInicialComponente, cantidadRealComponente = _req$body9.cantidadRealComponente;
          if (!(orden === undefined || cantidadInicialOrden === undefined || cantidadRealOrden === undefined || usuarioLog === undefined || estado === undefined || materialOrden === undefined || nombreMaterialOrden === undefined || materialComponente === undefined || nombreMaterialComponente === undefined || cantidadInicialComponente === undefined || cantidadRealComponente === undefined)) {
            _context17.n = 1;
            break;
          }
          return _context17.a(2, res.status(400).json({
            msg: "Faltan parámetros: orden, cantidadInicialOrden, cantidadRealOrden, usuarioLog, estado, materialOrden, nombreMaterialOrden, materialComponente, nombreMaterialComponente, cantidadInicialComponente y cantidadRealComponente son requeridos."
          }));
        case 1:
          _context17.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_InsertarPreNotificacion] :Orden, :CantidadInicialOrden, :CantidadRealOrden, :UsuarioLog, :Estado, :MaterialOrden, :NombreMaterialOrden, :MaterialComponente, :NombreMaterialComponente, :CantidadInicialComponente, :CantidadRealComponente"), {
            replacements: {
              Orden: orden,
              CantidadInicialOrden: cantidadInicialOrden,
              CantidadRealOrden: cantidadRealOrden,
              UsuarioLog: usuarioLog,
              Estado: estado,
              MaterialOrden: materialOrden,
              NombreMaterialOrden: nombreMaterialOrden,
              MaterialComponente: materialComponente,
              NombreMaterialComponente: nombreMaterialComponente,
              CantidadInicialComponente: cantidadInicialComponente,
              CantidadRealComponente: cantidadRealComponente
            },
            type: QueryTypes.SELECT
          });
        case 2:
          _yield$db$sequelize$q = _context17.v;
          _yield$db$sequelize$q2 = _slicedToArray(_yield$db$sequelize$q, 1);
          resultado = _yield$db$sequelize$q2[0];
          fueInsertado = !!(resultado !== null && resultado !== void 0 && resultado.Insertado);
          if (fueInsertado) {
            _context17.n = 3;
            break;
          }
          return _context17.a(2, res.status(409).json({
            msg: "Ya existe una pre-notificación con esa orden y ese estado. No se insertó el registro.",
            insertado: false
          }));
        case 3:
          res.status(201).json({
            msg: "Pre-notificación insertada correctamente.",
            insertado: true
          });
          _context17.n = 5;
          break;
        case 4:
          _context17.p = 4;
          _t16 = _context17.v;
          console.error("Error al insertar la pre-notificación:", _t16);
          res.status(500).json({
            msg: "Error en el servidor al insertar la pre-notificación."
          });
        case 5:
          return _context17.a(2);
      }
    }, _callee17, null, [[0, 4]]);
  }));
  return function insertarPreNotificacion(_x35, _x36) {
    return _ref17.apply(this, arguments);
  };
}();

// --- Controlador para Consultar Órdenes de Corte de Tela pendientes por Fecha ---
var getOrdenesCorteTelaListaPorFecha = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(req, res) {
    var _req$body0, fechaInicio, fechaFin, resultados, _t17;
    return _regenerator().w(function (_context18) {
      while (1) switch (_context18.p = _context18.n) {
        case 0:
          _context18.p = 0;
          _req$body0 = req.body, fechaInicio = _req$body0.fechaInicio, fechaFin = _req$body0.fechaFin;
          if (!(!fechaInicio || !fechaFin)) {
            _context18.n = 1;
            break;
          }
          return _context18.a(2, res.status(400).json({
            msg: "Faltan parámetros: fechaInicio y fechaFin son requeridos."
          }));
        case 1:
          _context18.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_ConsultaOrdenesCorteTelaListaPorFecha] :FechaInicio, :FechaFin"), {
            replacements: {
              FechaInicio: fechaInicio,
              FechaFin: fechaFin
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context18.v;
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context18.n = 4;
          break;
        case 3:
          _context18.p = 3;
          _t17 = _context18.v;
          console.error("Error al consultar las órdenes de corte de tela:", _t17);
          res.status(500).json({
            msg: "Error en el servidor al consultar las órdenes de corte de tela."
          });
        case 4:
          return _context18.a(2);
      }
    }, _callee18, null, [[0, 3]]);
  }));
  return function getOrdenesCorteTelaListaPorFecha(_x37, _x38) {
    return _ref18.apply(this, arguments);
  };
}();

// --- Controlador para Consultar Orden de Corte de Tela por Orden ---
var getOrdenCorteTelaPorOrden = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19(req, res) {
    var orden, resultados, _t18;
    return _regenerator().w(function (_context19) {
      while (1) switch (_context19.p = _context19.n) {
        case 0:
          _context19.p = 0;
          orden = req.body.orden;
          if (orden) {
            _context19.n = 1;
            break;
          }
          return _context19.a(2, res.status(400).json({
            msg: 'El parámetro "orden" es requerido.'
          }));
        case 1:
          _context19.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_ConsultaOrdenCorteTelaPorOrden] :Orden"), {
            replacements: {
              Orden: orden
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context19.v;
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context19.n = 4;
          break;
        case 3:
          _context19.p = 3;
          _t18 = _context19.v;
          console.error("Error al consultar la orden de corte de tela:", _t18);
          res.status(500).json({
            msg: "Error en el servidor al consultar la orden de corte de tela."
          });
        case 4:
          return _context19.a(2);
      }
    }, _callee19, null, [[0, 3]]);
  }));
  return function getOrdenCorteTelaPorOrden(_x39, _x40) {
    return _ref19.apply(this, arguments);
  };
}();

// --- Controlador para Consultar Pre-Notificaciones por Fecha ---
var getPreNotificacionesPorFecha = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(req, res) {
    var _req$body1, fechaInicio, fechaFin, resultados, _t19;
    return _regenerator().w(function (_context20) {
      while (1) switch (_context20.p = _context20.n) {
        case 0:
          _context20.p = 0;
          _req$body1 = req.body, fechaInicio = _req$body1.fechaInicio, fechaFin = _req$body1.fechaFin;
          if (!(!fechaInicio || !fechaFin)) {
            _context20.n = 1;
            break;
          }
          return _context20.a(2, res.status(400).json({
            msg: "Faltan parámetros: fechaInicio y fechaFin son requeridos."
          }));
        case 1:
          _context20.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_ConsultaPreNotificacionesPorFecha] :FechaInicio, :FechaFin"), {
            replacements: {
              FechaInicio: fechaInicio,
              FechaFin: fechaFin
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context20.v;
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context20.n = 4;
          break;
        case 3:
          _context20.p = 3;
          _t19 = _context20.v;
          console.error("Error al consultar las pre-notificaciones:", _t19);
          res.status(500).json({
            msg: "Error en el servidor al consultar las pre-notificaciones."
          });
        case 4:
          return _context20.a(2);
      }
    }, _callee20, null, [[0, 3]]);
  }));
  return function getPreNotificacionesPorFecha(_x41, _x42) {
    return _ref20.apply(this, arguments);
  };
}();

// --- Controlador para Consultar Pre-Notificación Pendiente por Orden ---
var getPreNotificacionPorOrden = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(req, res) {
    var orden, resultados, _t20;
    return _regenerator().w(function (_context21) {
      while (1) switch (_context21.p = _context21.n) {
        case 0:
          _context21.p = 0;
          orden = req.body.orden;
          if (orden) {
            _context21.n = 1;
            break;
          }
          return _context21.a(2, res.status(400).json({
            msg: 'El parámetro "orden" es requerido.'
          }));
        case 1:
          _context21.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_ConsultaPreNotificacionPorOrden] :Orden"), {
            replacements: {
              Orden: orden
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context21.v;
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context21.n = 4;
          break;
        case 3:
          _context21.p = 3;
          _t20 = _context21.v;
          console.error("Error al consultar la pre-notificación:", _t20);
          res.status(500).json({
            msg: "Error en el servidor al consultar la pre-notificación."
          });
        case 4:
          return _context21.a(2);
      }
    }, _callee21, null, [[0, 3]]);
  }));
  return function getPreNotificacionPorOrden(_x43, _x44) {
    return _ref21.apply(this, arguments);
  };
}();

// --- Controlador para Insertar Log de Planchas de Espuma Prensado ---
var insertarLogPlanchasEspumaPrensado = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22(req, res) {
    var _req$body10, codbarras, orden, operador, secuencial, producto, netiqueta, mesa, codPedido, tipoOpe, resultados, _t21;
    return _regenerator().w(function (_context22) {
      while (1) switch (_context22.p = _context22.n) {
        case 0:
          _context22.p = 0;
          _req$body10 = req.body, codbarras = _req$body10.codbarras, orden = _req$body10.orden, operador = _req$body10.operador, secuencial = _req$body10.secuencial, producto = _req$body10.producto, netiqueta = _req$body10.netiqueta, mesa = _req$body10.mesa, codPedido = _req$body10.codPedido, tipoOpe = _req$body10.tipoOpe;
          if (!(codbarras === undefined || orden === undefined || operador === undefined || secuencial === undefined || producto === undefined || netiqueta === undefined || mesa === undefined || codPedido === undefined || tipoOpe === undefined)) {
            _context22.n = 1;
            break;
          }
          return _context22.a(2, res.status(400).json({
            msg: "Faltan parámetros: codbarras, orden, operador, secuencial, producto, netiqueta, mesa, codPedido y tipoOpe son requeridos."
          }));
        case 1:
          _context22.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_InsertLOGPlanchasEspumaPrensado] @codbarras = :codbarras, @orden = :orden, @operador = :operador, @secuencial = :secuencial, @producto = :producto, @netiqueta = :netiqueta, @mesa = :mesa, @Codpedido = :Codpedido, @TipoOpe = :TipoOpe"), {
            replacements: {
              codbarras: codbarras,
              orden: orden,
              operador: operador,
              secuencial: secuencial,
              producto: producto,
              netiqueta: netiqueta,
              mesa: mesa,
              Codpedido: codPedido,
              TipoOpe: tipoOpe
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context22.v;
          res.status(201).json({
            data: resultados,
            length: resultados.length
          });
          _context22.n = 4;
          break;
        case 3:
          _context22.p = 3;
          _t21 = _context22.v;
          console.error("Error al insertar el log de planchas de espuma prensado:", _t21);
          res.status(500).json({
            msg: "Error en el servidor al insertar el log de planchas de espuma prensado."
          });
        case 4:
          return _context22.a(2);
      }
    }, _callee22, null, [[0, 3]]);
  }));
  return function insertarLogPlanchasEspumaPrensado(_x45, _x46) {
    return _ref22.apply(this, arguments);
  };
}();

// --- Controlador para Buscar Órdenes de Planchas de Espuma Prensado ---
var buscarOrdenesPlanchasEspumaPrensado = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(req, res) {
    var _req$body11, fechaInicio, fechaFin, centro, resultados, _t22;
    return _regenerator().w(function (_context23) {
      while (1) switch (_context23.p = _context23.n) {
        case 0:
          _context23.p = 0;
          _req$body11 = req.body, fechaInicio = _req$body11.fechaInicio, fechaFin = _req$body11.fechaFin, centro = _req$body11.centro;
          if (!(!fechaInicio || !fechaFin || !centro)) {
            _context23.n = 1;
            break;
          }
          return _context23.a(2, res.status(400).json({
            msg: "Faltan parámetros: fechaInicio, fechaFin y centro son requeridos."
          }));
        case 1:
          _context23.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_BuscaOrdenesPlanchasEspumaPrensado] :FechaINI, :FechaFIN, :Centro"), {
            replacements: {
              FechaINI: fechaInicio,
              FechaFIN: fechaFin,
              Centro: centro
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context23.v;
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context23.n = 4;
          break;
        case 3:
          _context23.p = 3;
          _t22 = _context23.v;
          console.error("Error al buscar las órdenes de planchas de espuma prensado:", _t22);
          res.status(500).json({
            msg: "Error en el servidor al buscar las órdenes de planchas de espuma prensado."
          });
        case 4:
          return _context23.a(2);
      }
    }, _callee23, null, [[0, 3]]);
  }));
  return function buscarOrdenesPlanchasEspumaPrensado(_x47, _x48) {
    return _ref23.apply(this, arguments);
  };
}();

// --- Controlador para Buscar el Último Secuencial de Prensado del Día ---
var buscarSecuencialPrensado = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24(req, res) {
    var resultados, _t23;
    return _regenerator().w(function (_context24) {
      while (1) switch (_context24.p = _context24.n) {
        case 0:
          _context24.p = 0;
          _context24.n = 1;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_BuscaSecuencialPrensado]"), {
            type: QueryTypes.SELECT
          });
        case 1:
          resultados = _context24.v;
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context24.n = 3;
          break;
        case 2:
          _context24.p = 2;
          _t23 = _context24.v;
          console.error("Error al buscar el secuencial de prensado:", _t23);
          res.status(500).json({
            msg: "Error en el servidor al buscar el secuencial de prensado."
          });
        case 3:
          return _context24.a(2);
      }
    }, _callee24, null, [[0, 2]]);
  }));
  return function buscarSecuencialPrensado(_x49, _x50) {
    return _ref24.apply(this, arguments);
  };
}();

// --- Controlador para Cambiar el Estado de las Etiquetas de Prensado ---
var cambiarEstadoEtiquetasPrensado = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25(req, res) {
    var _req$body12, orden, netiqueta, codUsuario, resultados, _t24;
    return _regenerator().w(function (_context25) {
      while (1) switch (_context25.p = _context25.n) {
        case 0:
          _context25.p = 0;
          _req$body12 = req.body, orden = _req$body12.orden, netiqueta = _req$body12.netiqueta, codUsuario = _req$body12.codUsuario;
          if (!(orden === undefined || netiqueta === undefined || codUsuario === undefined)) {
            _context25.n = 1;
            break;
          }
          return _context25.a(2, res.status(400).json({
            msg: "Faltan parámetros: orden, netiqueta y codUsuario son requeridos."
          }));
        case 1:
          _context25.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_CambiaEstadoEtiquetasPrensado] :orden, :netiqueta, :CodUsuario"), {
            replacements: {
              orden: orden,
              netiqueta: netiqueta,
              CodUsuario: codUsuario
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context25.v;
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context25.n = 4;
          break;
        case 3:
          _context25.p = 3;
          _t24 = _context25.v;
          console.error("Error al cambiar el estado de las etiquetas de prensado:", _t24);
          res.status(500).json({
            msg: "Error en el servidor al cambiar el estado de las etiquetas de prensado."
          });
        case 4:
          return _context25.a(2);
      }
    }, _callee25, null, [[0, 3]]);
  }));
  return function cambiarEstadoEtiquetasPrensado(_x51, _x52) {
    return _ref25.apply(this, arguments);
  };
}();

// --- Controlador para Buscar Etiquetas por Orden de Prensado ---
var buscarEtiquetasXOrdenPrensado = /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26(req, res) {
    var _req$body13, orden, estacion, resultados, _t25;
    return _regenerator().w(function (_context26) {
      while (1) switch (_context26.p = _context26.n) {
        case 0:
          _context26.p = 0;
          _req$body13 = req.body, orden = _req$body13.orden, estacion = _req$body13.estacion;
          if (!(!orden || !estacion)) {
            _context26.n = 1;
            break;
          }
          return _context26.a(2, res.status(400).json({
            msg: 'Los parámetros "orden" y "estacion" son requeridos.'
          }));
        case 1:
          _context26.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_BuscaEtiquetasXOrdenPrensado] @orden = :orden, @estacion = :estacion"), {
            replacements: {
              orden: orden,
              estacion: estacion
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context26.v;
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context26.n = 4;
          break;
        case 3:
          _context26.p = 3;
          _t25 = _context26.v;
          console.error("Error al buscar las etiquetas por orden de prensado:", _t25);
          res.status(500).json({
            msg: "Error en el servidor al buscar las etiquetas por orden de prensado."
          });
        case 4:
          return _context26.a(2);
      }
    }, _callee26, null, [[0, 3]]);
  }));
  return function buscarEtiquetasXOrdenPrensado(_x53, _x54) {
    return _ref26.apply(this, arguments);
  };
}();

// --- Controlador para Buscar Etiquetas por QR de Prensado ---
var buscarEtiquetasXQRPrensado = /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee27(req, res) {
    var _req$body14, qr, estacion, resultados, _t26;
    return _regenerator().w(function (_context27) {
      while (1) switch (_context27.p = _context27.n) {
        case 0:
          _context27.p = 0;
          _req$body14 = req.body, qr = _req$body14.qr, estacion = _req$body14.estacion;
          if (!(!qr || !estacion)) {
            _context27.n = 1;
            break;
          }
          return _context27.a(2, res.status(400).json({
            msg: 'Los parámetros "qr" y "estacion" son requeridos.'
          }));
        case 1:
          _context27.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_BuscaEtiquetasXQRPrensado] @Qr = :qr, @estacion = :estacion"), {
            replacements: {
              qr: qr,
              estacion: estacion
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context27.v;
          res.status(200).json({
            data: resultados,
            length: resultados.length,
            msg: resultados.length > 0 ? "Lectura exitosa" : "Etiqueta no encontrada o ya procesada"
          });
          _context27.n = 4;
          break;
        case 3:
          _context27.p = 3;
          _t26 = _context27.v;
          console.error("Error al buscar las etiquetas por QR de prensado:", _t26);
          res.status(500).json({
            msg: "Error en el servidor al buscar las etiquetas por QR de prensado."
          });
        case 4:
          return _context27.a(2);
      }
    }, _callee27, null, [[0, 3]]);
  }));
  return function buscarEtiquetasXQRPrensado(_x55, _x56) {
    return _ref27.apply(this, arguments);
  };
}();

// --- Controlador para Buscar Cantidad de QR por Estación y Rango de Fechas de Prensado ---
var buscarCantQRxEstacionRangoPrensado = /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee28(req, res) {
    var _resultados$0$TotalQR, _resultados$, _req$body15, fechaInicio, fechaFin, estacion, resultados, _t27;
    return _regenerator().w(function (_context28) {
      while (1) switch (_context28.p = _context28.n) {
        case 0:
          _context28.p = 0;
          _req$body15 = req.body, fechaInicio = _req$body15.fechaInicio, fechaFin = _req$body15.fechaFin, estacion = _req$body15.estacion;
          if (!(!fechaInicio || !fechaFin || !estacion)) {
            _context28.n = 1;
            break;
          }
          return _context28.a(2, res.status(400).json({
            msg: "Faltan parámetros: fechaInicio, fechaFin y estacion son requeridos."
          }));
        case 1:
          _context28.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_BuscaCantQRxEstacionRangoPrensado] @fechaINI = :fechaINI, @fechaFIN = :fechaFIN, @estacion = :estacion"), {
            replacements: {
              fechaINI: fechaInicio,
              fechaFIN: fechaFin,
              estacion: estacion
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context28.v;
          res.status(200).json({
            data: resultados,
            total: (_resultados$0$TotalQR = (_resultados$ = resultados[0]) === null || _resultados$ === void 0 ? void 0 : _resultados$.TotalQRDiferentes) !== null && _resultados$0$TotalQR !== void 0 ? _resultados$0$TotalQR : 0
          });
          _context28.n = 4;
          break;
        case 3:
          _context28.p = 3;
          _t27 = _context28.v;
          console.error("Error al buscar la cantidad de QR por estación de prensado:", _t27);
          res.status(500).json({
            msg: "Error en el servidor al buscar la cantidad de QR por estación de prensado."
          });
        case 4:
          return _context28.a(2);
      }
    }, _callee28, null, [[0, 3]]);
  }));
  return function buscarCantQRxEstacionRangoPrensado(_x57, _x58) {
    return _ref28.apply(this, arguments);
  };
}();

//////////////////////////////////////////////////////////////////////////////
// Lectura de desperdicios (BMP_Balanza.dbo.DesperdiciosAreas)

// ESTADO 1 = pendiente, 2 = ingresado.
var ESTADO_DESPERDICIO_INGRESADO = 2;
// DOCUMENTO que guarda el modo Garitas (DESPERDICIOS_MODO_GARITAS=true), donde no se envía a SAP.
var DOCUMENTO_DESPERDICIO_GARITAS = "Desperdicio Garitas no envio a SAP";
var consultarDesperdicioXCodBarras = function consultarDesperdicioXCodBarras(codbarras) {
  return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_BuscaDesperdicioXCodBarras] @codbarras = :codbarras"), {
    replacements: {
      codbarras: codbarras
    },
    type: QueryTypes.SELECT
  });
};

// --- Controlador para Buscar un Desperdicio por Código de Barras ---
var buscarDesperdicioXCodBarras = /*#__PURE__*/function () {
  var _ref29 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee29(req, res) {
    var _req$body$codbarras, _req$body16, codbarras, resultados, _t28;
    return _regenerator().w(function (_context29) {
      while (1) switch (_context29.p = _context29.n) {
        case 0:
          _context29.p = 0;
          codbarras = String((_req$body$codbarras = (_req$body16 = req.body) === null || _req$body16 === void 0 ? void 0 : _req$body16.codbarras) !== null && _req$body$codbarras !== void 0 ? _req$body$codbarras : "").trim();
          if (codbarras) {
            _context29.n = 1;
            break;
          }
          return _context29.a(2, res.status(400).json({
            msg: 'El parámetro "codbarras" es requerido.'
          }));
        case 1:
          _context29.n = 2;
          return consultarDesperdicioXCodBarras(codbarras);
        case 2:
          resultados = _context29.v;
          res.status(200).json({
            data: resultados,
            length: resultados.length,
            msg: resultados.length > 0 ? "Lectura exitosa" : "Desperdicio no encontrado"
          });
          _context29.n = 4;
          break;
        case 3:
          _context29.p = 3;
          _t28 = _context29.v;
          console.error("Error al buscar el desperdicio por código de barras:", _t28);
          res.status(500).json({
            msg: "Error en el servidor al buscar el desperdicio por código de barras."
          });
        case 4:
          return _context29.a(2);
      }
    }, _callee29, null, [[0, 3]]);
  }));
  return function buscarDesperdicioXCodBarras(_x59, _x60) {
    return _ref29.apply(this, arguments);
  };
}();

// --- Controlador para Ingresar un Desperdicio en SAP (ZmmWsMigo) y marcarlo como ingresado ---
var ingresarDesperdicio = /*#__PURE__*/function () {
  var _ref30 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee30(req, res) {
    var _req$body$codbarras2, _req$body17, codbarras, _yield$consultarDespe, _yield$consultarDespe2, desperdicio, documento, sap, _yield$db$sequelize$q3, _yield$db$sequelize$q4, resultado, _t29, _t30, _t31;
    return _regenerator().w(function (_context30) {
      while (1) switch (_context30.p = _context30.n) {
        case 0:
          _context30.p = 0;
          codbarras = String((_req$body$codbarras2 = (_req$body17 = req.body) === null || _req$body17 === void 0 ? void 0 : _req$body17.codbarras) !== null && _req$body$codbarras2 !== void 0 ? _req$body$codbarras2 : "").trim();
          if (codbarras) {
            _context30.n = 1;
            break;
          }
          return _context30.a(2, res.status(400).json({
            msg: 'El parámetro "codbarras" es requerido.'
          }));
        case 1:
          _context30.n = 2;
          return consultarDesperdicioXCodBarras(codbarras);
        case 2:
          _yield$consultarDespe = _context30.v;
          _yield$consultarDespe2 = _slicedToArray(_yield$consultarDespe, 1);
          desperdicio = _yield$consultarDespe2[0];
          if (desperdicio) {
            _context30.n = 3;
            break;
          }
          return _context30.a(2, res.status(404).json({
            msg: "No se encontr\xF3 el desperdicio ".concat(codbarras, "."),
            ingresado: false
          }));
        case 3:
          if (!(Number(desperdicio.ESTADO) === ESTADO_DESPERDICIO_INGRESADO)) {
            _context30.n = 4;
            break;
          }
          return _context30.a(2, res.status(409).json({
            msg: "Este desperdicio ya fue ingresado anteriormente.",
            ingresado: false,
            documento: desperdicio.DOCUMENTO
          }));
        case 4:
          documento = DOCUMENTO_DESPERDICIO_GARITAS;
          if (!(process.env.DESPERDICIOS_MODO_GARITAS !== "true")) {
            _context30.n = 10;
            break;
          }
          _context30.p = 5;
          _context30.n = 6;
          return registrarDesperdicioSAP({
            cantidad: desperdicio.DESPERDICIO_NETO,
            ciudad: desperdicio.REGIONAL,
            origen: desperdicio.DEPARTAMENTO
          });
        case 6:
          sap = _context30.v;
          _context30.n = 8;
          break;
        case 7:
          _context30.p = 7;
          _t29 = _context30.v;
          console.error("Error al enviar el desperdicio ".concat(codbarras, " a SAP:"), _t29);
          return _context30.a(2, res.status(502).json({
            msg: _t29.message,
            ingresado: false,
            reintentable: _t29.reintentable !== false
          }));
        case 8:
          if (!(sap.estado !== "OK")) {
            _context30.n = 9;
            break;
          }
          return _context30.a(2, res.status(422).json({
            msg: sap.mensaje || "SAP no registr\xF3 el desperdicio (estado \"".concat(sap.estado, "\")."),
            ingresado: false,
            estadoSAP: sap.estado
          }));
        case 9:
          documento = sap.mensaje || sap.estado;
        case 10:
          _context30.p = 10;
          _context30.n = 11;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_IngresaDesperdicio] @codbarras = :codbarras, @documento = :documento"), {
            replacements: {
              codbarras: codbarras,
              documento: documento
            },
            type: QueryTypes.SELECT
          });
        case 11:
          _yield$db$sequelize$q3 = _context30.v;
          _yield$db$sequelize$q4 = _slicedToArray(_yield$db$sequelize$q3, 1);
          resultado = _yield$db$sequelize$q4[0];
          if (Number(resultado === null || resultado === void 0 ? void 0 : resultado.Actualizados) > 0) {
            _context30.n = 12;
            break;
          }
          throw new Error("sp_IngresaDesperdicio no actualizó ninguna fila.");
        case 12:
          _context30.n = 14;
          break;
        case 13:
          _context30.p = 13;
          _t30 = _context30.v;
          // SAP ya creó el documento: si el operador reintenta se duplicaría la salida.
          console.error("SAP registr\xF3 el desperdicio ".concat(codbarras, " (").concat(documento, ") pero no se marc\xF3 como ingresado:"), _t30);
          return _context30.a(2, res.status(500).json({
            msg: "SAP registr\xF3 el desperdicio (".concat(documento, ") pero no se pudo marcar como ingresado. No lo vuelva a enviar; reporte el c\xF3digo ").concat(codbarras, " a sistemas."),
            ingresado: false,
            reintentable: false,
            documento: documento
          }));
        case 14:
          res.status(200).json({
            msg: documento,
            ingresado: true,
            documento: documento
          });
          _context30.n = 16;
          break;
        case 15:
          _context30.p = 15;
          _t31 = _context30.v;
          console.error("Error al ingresar el desperdicio:", _t31);
          res.status(500).json({
            msg: "Error en el servidor al ingresar el desperdicio.",
            ingresado: false
          });
        case 16:
          return _context30.a(2);
      }
    }, _callee30, null, [[10, 13], [5, 7], [0, 15]]);
  }));
  return function ingresarDesperdicio(_x61, _x62) {
    return _ref30.apply(this, arguments);
  };
}();
var getBodegasPorCentro = /*#__PURE__*/function () {
  var _ref31 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee31(req, res) {
    var resultados, _t32;
    return _regenerator().w(function (_context31) {
      while (1) switch (_context31.p = _context31.n) {
        case 0:
          _context31.p = 0;
          _context31.n = 1;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_Get_BodegasPlanta]"), {
            type: QueryTypes.SELECT
          });
        case 1:
          resultados = _context31.v;
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context31.n = 3;
          break;
        case 2:
          _context31.p = 2;
          _t32 = _context31.v;
          console.error("Error al buscar las bodegas por centro:", _t32);
          res.status(500).json({
            msg: "Error en el servidor al buscar las bodegas por centro."
          });
        case 3:
          return _context31.a(2);
      }
    }, _callee31, null, [[0, 2]]);
  }));
  return function getBodegasPorCentro(_x63, _x64) {
    return _ref31.apply(this, arguments);
  };
}();
var geetInformacionQR = /*#__PURE__*/function () {
  var _ref32 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee32(req, res) {
    var Codigo, resultados, _t33;
    return _regenerator().w(function (_context32) {
      while (1) switch (_context32.p = _context32.n) {
        case 0:
          _context32.p = 0;
          Codigo = req.body.Codigo;
          if (Codigo) {
            _context32.n = 1;
            break;
          }
          return _context32.a(2, res.status(400).json({
            msg: "Faltan parámetros: Codigo es requerido."
          }));
        case 1:
          _context32.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_Get_informacionQr] :Codigo"), {
            replacements: {
              Codigo: Codigo
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context32.v;
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context32.n = 4;
          break;
        case 3:
          _context32.p = 3;
          _t33 = _context32.v;
          console.error("Error al obtener la información del QR:", _t33);
          res.status(500).json({
            msg: "Error en el servidor al obtener la información del QR."
          });
        case 4:
          return _context32.a(2);
      }
    }, _callee32, null, [[0, 3]]);
  }));
  return function geetInformacionQR(_x65, _x66) {
    return _ref32.apply(this, arguments);
  };
}();
var geetInformacionMaterial = /*#__PURE__*/function () {
  var _ref33 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee33(req, res) {
    var _req$body18, Codigo, Centro, resultados, _t34;
    return _regenerator().w(function (_context33) {
      while (1) switch (_context33.p = _context33.n) {
        case 0:
          _context33.p = 0;
          _req$body18 = req.body, Codigo = _req$body18.Codigo, Centro = _req$body18.Centro;
          if (!(!Codigo || !Centro)) {
            _context33.n = 1;
            break;
          }
          return _context33.a(2, res.status(400).json({
            msg: "Faltan parámetros: Codigo y Centro son requeridos."
          }));
        case 1:
          _context33.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_Get_informacionMaterial] :Codigo, :Centro"), {
            replacements: {
              Codigo: Codigo,
              Centro: Centro
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context33.v;
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context33.n = 4;
          break;
        case 3:
          _context33.p = 3;
          _t34 = _context33.v;
          console.error("Error al obtener la información del material:", _t34);
          res.status(500).json({
            msg: "Error en el servidor al obtener la información del material."
          });
        case 4:
          return _context33.a(2);
      }
    }, _callee33, null, [[0, 3]]);
  }));
  return function geetInformacionMaterial(_x67, _x68) {
    return _ref33.apply(this, arguments);
  };
}();
var getMaterialesPivoteadosByCodigoFertPrincipal = /*#__PURE__*/function () {
  var _ref34 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee34(req, res) {
    var _req$body19, _req$body20, _req$body21, _req$body22, _req$body23, Codigo, Descripcion, resultados, _t35;
    return _regenerator().w(function (_context34) {
      while (1) switch (_context34.p = _context34.n) {
        case 0:
          _context34.p = 0;
          // SP: @Codigo (semielaborado) + @Descripcion (nombre del material)
          Codigo = String(((_req$body19 = req.body) === null || _req$body19 === void 0 ? void 0 : _req$body19.Codigo) || ((_req$body20 = req.body) === null || _req$body20 === void 0 ? void 0 : _req$body20.Material) || "").trim();
          Descripcion = String(((_req$body21 = req.body) === null || _req$body21 === void 0 ? void 0 : _req$body21.Descripcion) || ((_req$body22 = req.body) === null || _req$body22 === void 0 ? void 0 : _req$body22.NombreMaterial) || ((_req$body23 = req.body) === null || _req$body23 === void 0 ? void 0 : _req$body23.Nombre) || "").trim();
          if (Codigo) {
            _context34.n = 1;
            break;
          }
          return _context34.a(2, res.status(400).json({
            msg: "Faltan parámetros: Codigo (material/semielaborado) es requerido."
          }));
        case 1:
          _context34.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_Get_MaterialesPivoteadosPorFertPrincipal]\n        @Codigo = :Codigo,\n        @Descripcion = :Descripcion"), {
            replacements: {
              Codigo: Codigo,
              Descripcion: Descripcion
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context34.v;
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context34.n = 4;
          break;
        case 3:
          _context34.p = 3;
          _t35 = _context34.v;
          console.error("Error al obtener materiales pivoteados por semielaborado (Material):", _t35);
          res.status(500).json({
            msg: "Error en el servidor al obtener materiales pivoteados por semielaborado."
          });
        case 4:
          return _context34.a(2);
      }
    }, _callee34, null, [[0, 3]]);
  }));
  return function getMaterialesPivoteadosByCodigoFertPrincipal(_x69, _x70) {
    return _ref34.apply(this, arguments);
  };
}();

/**
 * Inverso: dado un material (tela/componente), devuelve los FERT que lo usan
 * desde BI.dbo.ListaMaterialesNivelesPivoteado (todos los niveles).
 */
var getMaterialesPivoteadosByMaterial = /*#__PURE__*/function () {
  var _ref35 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee35(req, res) {
    var Codigo, codigo, resultados, _t36;
    return _regenerator().w(function (_context35) {
      while (1) switch (_context35.p = _context35.n) {
        case 0:
          _context35.p = 0;
          Codigo = req.body.Codigo;
          codigo = String(Codigo || "").trim();
          if (codigo) {
            _context35.n = 1;
            break;
          }
          return _context35.a(2, res.status(400).json({
            msg: "Faltan parámetros: Codigo es requerido."
          }));
        case 1:
          _context35.n = 2;
          return db.sequelize.query("\n      SELECT\n        NIVEL,\n        CENTRO,\n        FERT_PRINCIPAL,\n        DESCRIPCION_FERT,\n        MATERIAL_PADRE,\n        DESCRIPCION_PADRE,\n        COMPONENTE,\n        DESCRIPCION_COMPONENTE,\n        CANTIDAD_UNITARIA,\n        CANTIDAD_ACUMULADA\n      FROM [BI].[dbo].[ListaMaterialesNivelesPivoteado]\n      WHERE\n        RIGHT(REPLICATE('0', 18) + LTRIM(RTRIM(CAST(MATERIAL_PADRE AS VARCHAR(50)))), 18)\n          = RIGHT(REPLICATE('0', 18) + LTRIM(RTRIM(:Codigo)), 18)\n        OR\n        RIGHT(REPLICATE('0', 18) + LTRIM(RTRIM(CAST(COMPONENTE AS VARCHAR(50)))), 18)\n          = RIGHT(REPLICATE('0', 18) + LTRIM(RTRIM(:Codigo)), 18)\n      ", {
            replacements: {
              Codigo: codigo
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context35.v;
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context35.n = 4;
          break;
        case 3:
          _context35.p = 3;
          _t36 = _context35.v;
          console.error("Error al obtener materiales pivoteados por material:", _t36);
          res.status(500).json({
            msg: "Error en el servidor al obtener los FERT que usan este material."
          });
        case 4:
          return _context35.a(2);
      }
    }, _callee35, null, [[0, 3]]);
  }));
  return function getMaterialesPivoteadosByMaterial(_x71, _x72) {
    return _ref35.apply(this, arguments);
  };
}();

/**
 * Consulta saldo (SP) + detalle de movimientos del ingreso.
 * SP: dbo.sp_Get_DisponibilidadRollo (@CodigoIngreso, @CantidadNecesaria)
 * Detalle: dbo.movimiento + dbo.detalle_movimiento
 */
var getMovimientosPorIngreso = /*#__PURE__*/function () {
  var _ref36 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee36(req, res) {
    var _ref37, _req$body$CodigoIngre, _req$body24, _req$body25, _req$body$CantidadNec, _req$body26, _req$body27, _resumen$codigo_ingre, CodigoIngreso, CantidadNecesariaRaw, CantidadNecesaria, resumenRows, resumen, detalleRows, data, _t37;
    return _regenerator().w(function (_context36) {
      while (1) switch (_context36.p = _context36.n) {
        case 0:
          _context36.p = 0;
          CodigoIngreso = Number((_ref37 = (_req$body$CodigoIngre = (_req$body24 = req.body) === null || _req$body24 === void 0 ? void 0 : _req$body24.CodigoIngreso) !== null && _req$body$CodigoIngre !== void 0 ? _req$body$CodigoIngre : (_req$body25 = req.body) === null || _req$body25 === void 0 ? void 0 : _req$body25.codigo_ingreso) !== null && _ref37 !== void 0 ? _ref37 : 0);
          CantidadNecesariaRaw = (_req$body$CantidadNec = (_req$body26 = req.body) === null || _req$body26 === void 0 ? void 0 : _req$body26.CantidadNecesaria) !== null && _req$body$CantidadNec !== void 0 ? _req$body$CantidadNec : (_req$body27 = req.body) === null || _req$body27 === void 0 ? void 0 : _req$body27.cantidad_necesaria;
          CantidadNecesaria = CantidadNecesariaRaw === undefined || CantidadNecesariaRaw === null || CantidadNecesariaRaw === "" ? null : Number(CantidadNecesariaRaw);
          if (!(!CodigoIngreso || Number.isNaN(CodigoIngreso))) {
            _context36.n = 1;
            break;
          }
          return _context36.a(2, res.status(400).json({
            msg: "Faltan parámetros: CodigoIngreso es requerido."
          }));
        case 1:
          _context36.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_Get_DisponibilidadRollo]\n        @CodigoIngreso = :CodigoIngreso,\n        @CantidadNecesaria = :CantidadNecesaria"), {
            replacements: {
              CodigoIngreso: CodigoIngreso,
              CantidadNecesaria: CantidadNecesaria
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resumenRows = _context36.v;
          resumen = (resumenRows === null || resumenRows === void 0 ? void 0 : resumenRows[0]) || {};
          _context36.n = 3;
          return db.sequelize.query("\n      SELECT\n        m.codigo_ingreso,\n        m.codigo_movimiento,\n        m.tipo_movimiento,\n        m.cantidad_movimiento,\n        m.cantidad_estimada,\n        m.cantidad_desperdicio,\n        m.fecha_movimiento,\n        m.usuario_movimiento,\n        m.estado AS estado_movimiento,\n        d.codigo_detalle_movimiento,\n        d.orden,\n        d.cantidad_utilizada,\n        d.estado AS estado_detalle\n      FROM dbo.movimiento m\n      LEFT JOIN dbo.detalle_movimiento d\n        ON d.codigo_movimiento = m.codigo_movimiento\n       AND (d.estado IS NULL OR d.estado = 'A')\n      WHERE m.codigo_ingreso = :CodigoIngreso\n        AND (m.estado IS NULL OR m.estado = 'A')\n      ORDER BY m.codigo_movimiento, d.codigo_detalle_movimiento\n      ", {
            replacements: {
              CodigoIngreso: CodigoIngreso
            },
            type: QueryTypes.SELECT
          });
        case 3:
          detalleRows = _context36.v;
          data = detalleRows.length > 0 ? detalleRows.map(function (row) {
            return _objectSpread(_objectSpread({}, resumen), row);
          }) : [_objectSpread(_objectSpread({}, resumen), {}, {
            codigo_ingreso: (_resumen$codigo_ingre = resumen.codigo_ingreso) !== null && _resumen$codigo_ingre !== void 0 ? _resumen$codigo_ingre : CodigoIngreso
          })];
          res.status(200).json({
            data: data,
            length: data.length
          });
          _context36.n = 5;
          break;
        case 4:
          _context36.p = 4;
          _t37 = _context36.v;
          console.error("Error al obtener movimientos por ingreso:", _t37);
          res.status(500).json({
            msg: "Error en el servidor al obtener movimientos por ingreso."
          });
        case 5:
          return _context36.a(2);
      }
    }, _callee36, null, [[0, 4]]);
  }));
  return function getMovimientosPorIngreso(_x73, _x74) {
    return _ref36.apply(this, arguments);
  };
}();
module.exports = {
  // ... tus otras funciones de controlador
  getOrdenesProduccion: getOrdenesProduccion,
  getOrdenesProduccionAlmohadas: getOrdenesProduccionAlmohadas,
  getUsersIP: getUsersIP,
  generarBC: generarBC,
  cambiarEstadoEtiquetaDistribucionAlmohadas: cambiarEstadoEtiquetaDistribucionAlmohadas,
  consultarOrdenDistribucionAlmohadas: consultarOrdenDistribucionAlmohadas,
  consultarBC: consultarBC,
  pistolearBC: pistolearBC,
  getOrdenPPH: getOrdenPPH,
  getOrdenesReimpresion: getOrdenesReimpresion,
  getImpresionPlastificado: getImpresionPlastificado,
  cargarOrdenes: cargarOrdenes,
  buscarMaterialesPorMaterialCentro: buscarMaterialesPorMaterialCentro,
  getProcesosPorSolicitante: getProcesosPorSolicitante,
  getProcesosPorTipoCambio: getProcesosPorTipoCambio,
  getPUltimosProcesosPorProductos: getPUltimosProcesosPorProductos,
  getMaterialesCambiados: getMaterialesCambiados,
  getMaterialesCambiadosPorFechas: getMaterialesCambiadosPorFechas,
  insertarPreNotificacion: insertarPreNotificacion,
  getOrdenesCorteTelaListaPorFecha: getOrdenesCorteTelaListaPorFecha,
  getOrdenCorteTelaPorOrden: getOrdenCorteTelaPorOrden,
  getPreNotificacionesPorFecha: getPreNotificacionesPorFecha,
  getPreNotificacionPorOrden: getPreNotificacionPorOrden,
  insertarLogPlanchasEspumaPrensado: insertarLogPlanchasEspumaPrensado,
  buscarOrdenesPlanchasEspumaPrensado: buscarOrdenesPlanchasEspumaPrensado,
  buscarSecuencialPrensado: buscarSecuencialPrensado,
  cambiarEstadoEtiquetasPrensado: cambiarEstadoEtiquetasPrensado,
  buscarEtiquetasXOrdenPrensado: buscarEtiquetasXOrdenPrensado,
  buscarEtiquetasXQRPrensado: buscarEtiquetasXQRPrensado,
  buscarCantQRxEstacionRangoPrensado: buscarCantQRxEstacionRangoPrensado,
  buscarDesperdicioXCodBarras: buscarDesperdicioXCodBarras,
  ingresarDesperdicio: ingresarDesperdicio,
  getBodegasPorCentro: getBodegasPorCentro,
  geetInformacionQR: geetInformacionQR,
  geetInformacionMaterial: geetInformacionMaterial,
  getMaterialesPivoteadosByCodigoFertPrincipal: getMaterialesPivoteadosByCodigoFertPrincipal,
  getMaterialesPivoteadosByMaterial: getMaterialesPivoteadosByMaterial,
  getMovimientosPorIngreso: getMovimientosPorIngreso
};