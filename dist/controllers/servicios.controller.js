"use strict";

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
var consultarBC = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var codigoBarras, resultados, _t4;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          codigoBarras = req.body.codigoBarras;
          if (!(codigoBarras === undefined || codigoBarras === null || codigoBarras === "")) {
            _context5.n = 1;
            break;
          }
          return _context5.a(2, res.status(400).json({
            msg: "Faltan parámetros en la solicitud."
          }));
        case 1:
          _context5.n = 2;
          return db.sequelize.query("EXEC [RFID].[dbo].[SP_ConsultaCodBarrasDistribucionAlmohadas] :CodigoBarras", {
            // Se usan replacements para evitar inyección SQL
            replacements: {
              CodigoBarras: codigoBarras
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context5.v;
          //4. Envía los resultados como respuesta
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context5.n = 4;
          break;
        case 3:
          _context5.p = 3;
          _t4 = _context5.v;
          console.error("Error al pistolear el código de barras:", _t4);
          res.status(500).json({
            msg: "Error en el servidor al pistolear el código de barras."
          });
        case 4:
          return _context5.a(2);
      }
    }, _callee5, null, [[0, 3]]);
  }));
  return function consultarBC(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
var pistolearBC = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var codigoBarras, resultados, _t5;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          codigoBarras = req.body.codigoBarras;
          if (!(codigoBarras === undefined || codigoBarras === null || codigoBarras === "")) {
            _context6.n = 1;
            break;
          }
          return _context6.a(2, res.status(400).json({
            msg: "Faltan parámetros en la solicitud."
          }));
        case 1:
          _context6.n = 2;
          return db.sequelize.query("EXEC [RFID].[dbo].[SP_ActualizaCodBarrasDistribucionAlmohadas] :CodigoBarras", {
            // Se usan replacements para evitar inyección SQL
            replacements: {
              CodigoBarras: codigoBarras
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context6.v;
          // 4. Envía los resultados como respuesta
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context6.n = 4;
          break;
        case 3:
          _context6.p = 3;
          _t5 = _context6.v;
          console.error("Error al pistolear el código de barras:", _t5);
          res.status(500).json({
            msg: "Error en el servidor al pistolear el código de barras."
          });
        case 4:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 3]]);
  }));
  return function pistolearBC(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
var getOrdenPPH = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var num_orden, resultados, _t6;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          // 1. Obtiene los parámetros de la URL (query string)
          num_orden = req.body.num_orden; // 2. Validación básica de los parámetros
          if (num_orden) {
            _context7.n = 1;
            break;
          }
          return _context7.a(2, res.status(400).json({
            msg: 'El parámetro "num_orden" es requerido.'
          }));
        case 1:
          _context7.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_BuscarProduccionConHistorial] :NumeroOrden"), {
            // Se usan replacements para evitar inyección SQL
            replacements: {
              NumeroOrden: num_orden
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context7.v;
          // 4. Envía los resultados como respuesta
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context7.n = 4;
          break;
        case 3:
          _context7.p = 3;
          _t6 = _context7.v;
          console.error("Error al consultar órdenes de producción:", _t6);
          res.status(500).json({
            msg: "Error en el servidor al consultar las órdenes."
          });
        case 4:
          return _context7.a(2);
      }
    }, _callee7, null, [[0, 3]]);
  }));
  return function getOrdenPPH(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
var getOrdenesReimpresion = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req, res) {
    var num_orden, resultados, _t7;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          _context8.p = 0;
          // 1. Obtiene los parámetros de la URL (query string)
          num_orden = req.body.num_orden; // 2. Validación básica de los parámetros
          if (num_orden) {
            _context8.n = 1;
            break;
          }
          return _context8.a(2, res.status(400).json({
            msg: 'El parámetro "num_orden" es requerido.'
          }));
        case 1:
          _context8.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[CONSULTA_ORDEN_PRENOTI_PO] :ORDEN"), {
            // Se usan replacements para evitar inyección SQL
            replacements: {
              ORDEN: num_orden
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
          console.error("Error al consultar órdenes de producción:", _t7);
          res.status(500).json({
            msg: "Error en el servidor al consultar las órdenes."
          });
        case 4:
          return _context8.a(2);
      }
    }, _callee8, null, [[0, 3]]);
  }));
  return function getOrdenesReimpresion(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();
var getImpresionPlastificado = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(req, res) {
    var codQR, resultados, _t8;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          _context9.p = 0;
          // 1. Obtiene los parámetros de la URL (query string)
          codQR = req.body.codQR; // 2. Validación básica de los parámetros
          if (codQR) {
            _context9.n = 1;
            break;
          }
          return _context9.a(2, res.status(400).json({
            msg: 'El parámetro "codQR" es requerido.'
          }));
        case 1:
          _context9.n = 2;
          return db.sequelize.query("EXEC [Etiquetas].[dbo].[sp_ObtenerDetallePorCodigoBarrasPlastificado  ] :CodBarras", {
            // Se usan replacements para evitar inyección SQL
            replacements: {
              CodBarras: codQR
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
  return function getImpresionPlastificado(_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}();

// --- Controlador para Cargar Ordenes (Cambio Descripción) ---
var cargarOrdenes = /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(req, res) {
    var _req$body4, orden, descripcion, almacen, resultados, _t9;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          _context0.p = 0;
          _req$body4 = req.body, orden = _req$body4.orden, descripcion = _req$body4.descripcion, almacen = _req$body4.almacen;
          if (!(!orden || !descripcion || !almacen)) {
            _context0.n = 1;
            break;
          }
          return _context0.a(2, res.status(400).json({
            msg: "Faltan parámetros: orden, descripcion y almacen son requeridos."
          }));
        case 1:
          _context0.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_InsertarOrdenCambioDescripcion] :Orden, :Descripcion, :Almacen"), {
            replacements: {
              Orden: orden,
              Descripcion: descripcion,
              Almacen: almacen
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context0.v;
          res.status(200).json({
            data: resultados,
            msg: "Orden actualizada correctamente."
          });
          _context0.n = 4;
          break;
        case 3:
          _context0.p = 3;
          _t9 = _context0.v;
          console.error("Error al cargar ordenes:", _t9);
          res.status(500).json({
            msg: "Error en el servidor al cargar las ordenes."
          });
        case 4:
          return _context0.a(2);
      }
    }, _callee0, null, [[0, 3]]);
  }));
  return function cargarOrdenes(_x17, _x18) {
    return _ref0.apply(this, arguments);
  };
}();

// --- Controlador para Cargar Ordenes (Cambio Descripción) ---
var buscarMaterialesPorMaterialCentro = /*#__PURE__*/function () {
  var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(req, res) {
    var _req$body5, material, centro, resultados, _t0;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          _context1.p = 0;
          _req$body5 = req.body, material = _req$body5.material, centro = _req$body5.centro;
          if (!(!material || !centro)) {
            _context1.n = 1;
            break;
          }
          return _context1.a(2, res.status(400).json({
            msg: "Faltan parámetros: material y centro son requeridos."
          }));
        case 1:
          _context1.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_ObtenerMaterialesPorOrden] :Material, :Centro"), {
            replacements: {
              Material: material,
              Centro: centro
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context1.v;
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context1.n = 4;
          break;
        case 3:
          _context1.p = 3;
          _t0 = _context1.v;
          console.error("Error al cargar ordenes:", _t0);
          res.status(500).json({
            msg: "Error en el servidor al cargar las ordenes."
          });
        case 4:
          return _context1.a(2);
      }
    }, _callee1, null, [[0, 3]]);
  }));
  return function buscarMaterialesPorMaterialCentro(_x19, _x20) {
    return _ref1.apply(this, arguments);
  };
}();

//////////////////////////////Funciones de Dashboard para cambios de plastico

var getProcesosPorSolicitante = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(req, res) {
    var resultados, _t1;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.p = _context10.n) {
        case 0:
          _context10.p = 0;
          _context10.n = 1;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_GetProcesosPorSolicitante]"), {
            type: QueryTypes.SELECT
          });
        case 1:
          resultados = _context10.v;
          // 4. Envía los resultados como respuesta
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context10.n = 3;
          break;
        case 2:
          _context10.p = 2;
          _t1 = _context10.v;
          console.error("Error al consultar Procesos:", _t1);
          res.status(500).json({
            msg: "Error en el servidor al consultar los Procesos."
          });
        case 3:
          return _context10.a(2);
      }
    }, _callee10, null, [[0, 2]]);
  }));
  return function getProcesosPorSolicitante(_x21, _x22) {
    return _ref10.apply(this, arguments);
  };
}();
var getProcesosPorTipoCambio = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(req, res) {
    var resultados, _t10;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.p = _context11.n) {
        case 0:
          _context11.p = 0;
          _context11.n = 1;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_GetResumenCambiosPlastico]"), {
            type: QueryTypes.SELECT
          });
        case 1:
          resultados = _context11.v;
          // 4. Envía los resultados como respuesta
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context11.n = 3;
          break;
        case 2:
          _context11.p = 2;
          _t10 = _context11.v;
          console.error("Error al consultar Procesos:", _t10);
          res.status(500).json({
            msg: "Error en el servidor al consultar los Procesos."
          });
        case 3:
          return _context11.a(2);
      }
    }, _callee11, null, [[0, 2]]);
  }));
  return function getProcesosPorTipoCambio(_x23, _x24) {
    return _ref11.apply(this, arguments);
  };
}();
var getPUltimosProcesosPorProductos = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(req, res) {
    var resultados, _t11;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.p = _context12.n) {
        case 0:
          _context12.p = 0;
          _context12.n = 1;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_GetUltimosEstadosProductos]"), {
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
  return function getPUltimosProcesosPorProductos(_x25, _x26) {
    return _ref12.apply(this, arguments);
  };
}();
var getMaterialesCambiados = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(req, res) {
    var resultados, _t12;
    return _regenerator().w(function (_context13) {
      while (1) switch (_context13.p = _context13.n) {
        case 0:
          _context13.p = 0;
          _context13.n = 1;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_GetMaterialesCambiados]"), {
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
  return function getMaterialesCambiados(_x27, _x28) {
    return _ref13.apply(this, arguments);
  };
}();
var getMaterialesCambiadosPorFechas = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(req, res) {
    var _req$body6, fechaInicio, fechaFin, resultados, _t13;
    return _regenerator().w(function (_context14) {
      while (1) switch (_context14.p = _context14.n) {
        case 0:
          _context14.p = 0;
          _req$body6 = req.body, fechaInicio = _req$body6.fechaInicio, fechaFin = _req$body6.fechaFin; // 1. Ejecuta el Stored Procedure en la segunda base de datos (sequelize2)
          _context14.n = 1;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_ObtenerCambiosPlasticosPorFechas] :FechaInicio, :FechaFin"), {
            replacements: {
              FechaInicio: fechaInicio,
              FechaFin: fechaFin
            },
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
  return function getMaterialesCambiadosPorFechas(_x29, _x30) {
    return _ref14.apply(this, arguments);
  };
}();

//////////////////////////////////////////////////////////////////////////////

// --- Controlador para Insertar Pre-Notificación ---
var insertarPreNotificacion = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(req, res) {
    var _req$body7, orden, cantidadInicialOrden, cantidadRealOrden, usuarioLog, estado, materialOrden, nombreMaterialOrden, materialComponente, nombreMaterialComponente, cantidadInicialComponente, cantidadRealComponente, _yield$db$sequelize$q, _yield$db$sequelize$q2, resultado, fueInsertado, _t14;
    return _regenerator().w(function (_context15) {
      while (1) switch (_context15.p = _context15.n) {
        case 0:
          _context15.p = 0;
          _req$body7 = req.body, orden = _req$body7.orden, cantidadInicialOrden = _req$body7.cantidadInicialOrden, cantidadRealOrden = _req$body7.cantidadRealOrden, usuarioLog = _req$body7.usuarioLog, estado = _req$body7.estado, materialOrden = _req$body7.materialOrden, nombreMaterialOrden = _req$body7.nombreMaterialOrden, materialComponente = _req$body7.materialComponente, nombreMaterialComponente = _req$body7.nombreMaterialComponente, cantidadInicialComponente = _req$body7.cantidadInicialComponente, cantidadRealComponente = _req$body7.cantidadRealComponente;
          if (!(orden === undefined || cantidadInicialOrden === undefined || cantidadRealOrden === undefined || usuarioLog === undefined || estado === undefined || materialOrden === undefined || nombreMaterialOrden === undefined || materialComponente === undefined || nombreMaterialComponente === undefined || cantidadInicialComponente === undefined || cantidadRealComponente === undefined)) {
            _context15.n = 1;
            break;
          }
          return _context15.a(2, res.status(400).json({
            msg: "Faltan parámetros: orden, cantidadInicialOrden, cantidadRealOrden, usuarioLog, estado, materialOrden, nombreMaterialOrden, materialComponente, nombreMaterialComponente, cantidadInicialComponente y cantidadRealComponente son requeridos."
          }));
        case 1:
          _context15.n = 2;
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
          _yield$db$sequelize$q = _context15.v;
          _yield$db$sequelize$q2 = _slicedToArray(_yield$db$sequelize$q, 1);
          resultado = _yield$db$sequelize$q2[0];
          fueInsertado = !!(resultado !== null && resultado !== void 0 && resultado.Insertado);
          if (fueInsertado) {
            _context15.n = 3;
            break;
          }
          return _context15.a(2, res.status(409).json({
            msg: "Ya existe una pre-notificación con esa orden y ese estado. No se insertó el registro.",
            insertado: false
          }));
        case 3:
          res.status(201).json({
            msg: "Pre-notificación insertada correctamente.",
            insertado: true
          });
          _context15.n = 5;
          break;
        case 4:
          _context15.p = 4;
          _t14 = _context15.v;
          console.error("Error al insertar la pre-notificación:", _t14);
          res.status(500).json({
            msg: "Error en el servidor al insertar la pre-notificación."
          });
        case 5:
          return _context15.a(2);
      }
    }, _callee15, null, [[0, 4]]);
  }));
  return function insertarPreNotificacion(_x31, _x32) {
    return _ref15.apply(this, arguments);
  };
}();

// --- Controlador para Consultar Órdenes de Corte de Tela pendientes por Fecha ---
var getOrdenesCorteTelaListaPorFecha = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(req, res) {
    var _req$body8, fechaInicio, fechaFin, resultados, _t15;
    return _regenerator().w(function (_context16) {
      while (1) switch (_context16.p = _context16.n) {
        case 0:
          _context16.p = 0;
          _req$body8 = req.body, fechaInicio = _req$body8.fechaInicio, fechaFin = _req$body8.fechaFin;
          if (!(!fechaInicio || !fechaFin)) {
            _context16.n = 1;
            break;
          }
          return _context16.a(2, res.status(400).json({
            msg: "Faltan parámetros: fechaInicio y fechaFin son requeridos."
          }));
        case 1:
          _context16.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_ConsultaOrdenesCorteTelaListaPorFecha] :FechaInicio, :FechaFin"), {
            replacements: {
              FechaInicio: fechaInicio,
              FechaFin: fechaFin
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context16.v;
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context16.n = 4;
          break;
        case 3:
          _context16.p = 3;
          _t15 = _context16.v;
          console.error("Error al consultar las órdenes de corte de tela:", _t15);
          res.status(500).json({
            msg: "Error en el servidor al consultar las órdenes de corte de tela."
          });
        case 4:
          return _context16.a(2);
      }
    }, _callee16, null, [[0, 3]]);
  }));
  return function getOrdenesCorteTelaListaPorFecha(_x33, _x34) {
    return _ref16.apply(this, arguments);
  };
}();

// --- Controlador para Consultar Orden de Corte de Tela por Orden ---
var getOrdenCorteTelaPorOrden = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(req, res) {
    var orden, resultados, _t16;
    return _regenerator().w(function (_context17) {
      while (1) switch (_context17.p = _context17.n) {
        case 0:
          _context17.p = 0;
          orden = req.body.orden;
          if (orden) {
            _context17.n = 1;
            break;
          }
          return _context17.a(2, res.status(400).json({
            msg: 'El parámetro "orden" es requerido.'
          }));
        case 1:
          _context17.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_ConsultaOrdenCorteTelaPorOrden] :Orden"), {
            replacements: {
              Orden: orden
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context17.v;
          res.status(200).json({
            data: resultados,
            length: resultados.length
          });
          _context17.n = 4;
          break;
        case 3:
          _context17.p = 3;
          _t16 = _context17.v;
          console.error("Error al consultar la orden de corte de tela:", _t16);
          res.status(500).json({
            msg: "Error en el servidor al consultar la orden de corte de tela."
          });
        case 4:
          return _context17.a(2);
      }
    }, _callee17, null, [[0, 3]]);
  }));
  return function getOrdenCorteTelaPorOrden(_x35, _x36) {
    return _ref17.apply(this, arguments);
  };
}();

// --- Controlador para Consultar Pre-Notificaciones por Fecha ---
var getPreNotificacionesPorFecha = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(req, res) {
    var _req$body9, fechaInicio, fechaFin, resultados, _t17;
    return _regenerator().w(function (_context18) {
      while (1) switch (_context18.p = _context18.n) {
        case 0:
          _context18.p = 0;
          _req$body9 = req.body, fechaInicio = _req$body9.fechaInicio, fechaFin = _req$body9.fechaFin;
          if (!(!fechaInicio || !fechaFin)) {
            _context18.n = 1;
            break;
          }
          return _context18.a(2, res.status(400).json({
            msg: "Faltan parámetros: fechaInicio y fechaFin son requeridos."
          }));
        case 1:
          _context18.n = 2;
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_ConsultaPreNotificacionesPorFecha] :FechaInicio, :FechaFin"), {
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
          console.error("Error al consultar las pre-notificaciones:", _t17);
          res.status(500).json({
            msg: "Error en el servidor al consultar las pre-notificaciones."
          });
        case 4:
          return _context18.a(2);
      }
    }, _callee18, null, [[0, 3]]);
  }));
  return function getPreNotificacionesPorFecha(_x37, _x38) {
    return _ref18.apply(this, arguments);
  };
}();

// --- Controlador para Consultar Pre-Notificación Pendiente por Orden ---
var getPreNotificacionPorOrden = /*#__PURE__*/function () {
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
          return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_ConsultaPreNotificacionPorOrden] :Orden"), {
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
          console.error("Error al consultar la pre-notificación:", _t18);
          res.status(500).json({
            msg: "Error en el servidor al consultar la pre-notificación."
          });
        case 4:
          return _context19.a(2);
      }
    }, _callee19, null, [[0, 3]]);
  }));
  return function getPreNotificacionPorOrden(_x39, _x40) {
    return _ref19.apply(this, arguments);
  };
}();
module.exports = {
  // ... tus otras funciones de controlador
  getOrdenesProduccion: getOrdenesProduccion,
  getOrdenesProduccionAlmohadas: getOrdenesProduccionAlmohadas,
  getUsersIP: getUsersIP,
  generarBC: generarBC,
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
  getPreNotificacionPorOrden: getPreNotificacionPorOrden
};