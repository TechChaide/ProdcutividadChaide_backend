"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require("../models"),
  Log_ordenes = _require.Log_ordenes,
  Configuracion = _require.Configuracion;
var _require2 = require("../helpers/error.helper"),
  handleError = _require2.handleError;
var _require3 = require("sequelize"),
  QueryTypes = _require3.QueryTypes;
var db = require("../models");
module.exports = {
  // Create or update record
  createOrUpdate: function () {
    var _createOrUpdate = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
      var fecha, opts, partes, fechaObjeto, _iterator, _step, parte, timestampISO, _req$body, codigo_log, orden_log, codigo_empleado, codigo_equipo, fecha_log, cantidad_entregada, cantidad_rechazada, cantidad_reproceso, orden_reproceso, newRecord, response, record, _response, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            /////////////////////////////////////////////////////////////////////////////////////////////////////
            fecha = new Date();
            opts = {
              timeZone: "America/Guayaquil",
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false // ¡Importante para formato 24h!
            };
            partes = new Intl.DateTimeFormat("en-US", opts).formatToParts(fecha);
            fechaObjeto = {};
            _iterator = _createForOfIteratorHelper(partes);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                parte = _step.value;
                if (parte.type !== "literal") {
                  fechaObjeto[parte.type] = parte.value;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            timestampISO = "".concat(fechaObjeto.year, "-").concat(fechaObjeto.month, "-").concat(fechaObjeto.day, "T").concat(fechaObjeto.hour, ":").concat(fechaObjeto.minute, ":").concat(fechaObjeto.second, "Z"); /////////////////////////////////////////////////////////////////////////////////////////////////
            _context.p = 1;
            _req$body = req.body, codigo_log = _req$body.codigo_log, orden_log = _req$body.orden_log, codigo_empleado = _req$body.codigo_empleado, codigo_equipo = _req$body.codigo_equipo, fecha_log = _req$body.fecha_log, cantidad_entregada = _req$body.cantidad_entregada, cantidad_rechazada = _req$body.cantidad_rechazada, cantidad_reproceso = _req$body.cantidad_reproceso, orden_reproceso = _req$body.orden_reproceso; //console.log("Fecha de la orden recibida", fecha_log);
            // Validar campos obligatorios
            if (!(codigo_log === undefined || codigo_log === null)) {
              _context.n = 2;
              break;
            }
            return _context.a(2, res.status(400).json({
              error: "Missing required fields",
              details: {
                codigo_log: codigo_log === undefined ? "undefined" : codigo_log === null ? "null" : "present"
              }
            }));
          case 2:
            if (!(codigo_log == 0)) {
              _context.n = 4;
              break;
            }
            _context.n = 3;
            return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_InsertarLogOrden] \n          :orden_log,\n          :cantidad_entregada,\n          :cantidad_rechazada,\n          :codigo_empleado,\n          :codigo_equipo,\n          :cantidad_reproceso,\n          :orden_reproceso"), {
              // Se usan replacements para evitar inyección SQL
              replacements: {
                orden_log: orden_log,
                cantidad_entregada: cantidad_entregada,
                cantidad_rechazada: cantidad_rechazada,
                codigo_empleado: codigo_empleado,
                codigo_equipo: codigo_equipo,
                cantidad_reproceso: cantidad_reproceso,
                orden_reproceso: orden_reproceso
              },
              type: QueryTypes.SELECT
            });
          case 3:
            newRecord = _context.v;
            response = newRecord[0];
            return _context.a(2, res.status(201).json({
              data: response,
              length: 1
            }));
          case 4:
            _context.n = 5;
            return Log_ordenes.findByPk(codigo_log, {
              include: []
            });
          case 5:
            record = _context.v;
            if (record) {
              _context.n = 6;
              break;
            }
            return _context.a(2, res.status(404).json({
              error: "Record not found"
            }));
          case 6:
            // Update fields

            record.orden_log = orden_log !== null && orden_log !== void 0 ? orden_log : record.orden_log;
            record.codigo_empleado = codigo_empleado !== null && codigo_empleado !== void 0 ? codigo_empleado : record.codigo_empleado;
            record.codigo_equipo = codigo_equipo !== null && codigo_equipo !== void 0 ? codigo_equipo : record.codigo_equipo;
            record.fecha_log = timestampISO !== null && timestampISO !== void 0 ? timestampISO : record.fecha_log;
            record.cantidad_entregada = cantidad_entregada !== null && cantidad_entregada !== void 0 ? cantidad_entregada : record.cantidad_entregada;
            record.cantidad_rechazada = cantidad_rechazada !== null && cantidad_rechazada !== void 0 ? cantidad_rechazada : record.cantidad_rechazada;
            record.cantidad_reproceso = cantidad_reproceso !== null && cantidad_reproceso !== void 0 ? cantidad_reproceso : record.cantidad_reproceso;
            record.orden_reproceso = orden_reproceso !== null && orden_reproceso !== void 0 ? orden_reproceso : record.orden_reproceso;
            _context.n = 7;
            return record.save();
          case 7:
            _context.n = 8;
            return Log_ordenes.findByPk(record.codigo_log, {
              include: []
            });
          case 8:
            _response = _context.v;
            return _context.a(2, res.status(200).json({
              data: _response,
              length: 1
            }));
          case 9:
            _context.n = 11;
            break;
          case 10:
            _context.p = 10;
            _t = _context.v;
            handleError(res, _t, "Error creating or updating record");
          case 11:
            return _context.a(2);
        }
      }, _callee, null, [[1, 10]]);
    }));
    function createOrUpdate(_x, _x2) {
      return _createOrUpdate.apply(this, arguments);
    }
    return createOrUpdate;
  }(),
  // Get all records
  getAll: function () {
    var _getAll = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
      var records, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return Log_ordenes.findAll({
              include: [],
              order: [["codigo_log", "ASC"]]
            });
          case 1:
            records = _context2.v;
            res.json({
              data: records,
              length: records.length || 0
            });
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            handleError(res, _t2, "Error getting records");
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
    function getAll(_x3, _x4) {
      return _getAll.apply(this, arguments);
    }
    return getAll;
  }(),
  // Get record by ID
  getById: function () {
    var _getById = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
      var id, record, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            id = req.params.id;
            _context3.n = 1;
            return Log_ordenes.findByPk(id, {
              include: []
            });
          case 1:
            record = _context3.v;
            if (record) {
              _context3.n = 2;
              break;
            }
            return _context3.a(2, res.status(404).json({
              error: "Record not found"
            }));
          case 2:
            res.json({
              data: record,
              length: 1
            });
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            handleError(res, _t3, "Error getting record by ID");
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 3]]);
    }));
    function getById(_x5, _x6) {
      return _getById.apply(this, arguments);
    }
    return getById;
  }()

  // Deactivate record (set status to 'I')
};