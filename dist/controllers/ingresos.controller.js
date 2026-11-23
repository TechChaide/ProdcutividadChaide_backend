"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require('../models'),
  Ingresos = _require.Ingresos;
var _require2 = require('../helpers/error.helper'),
  handleError = _require2.handleError;
module.exports = {
  // Create or update record
  createOrUpdate: function () {
    var _createOrUpdate = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
      var _req$body, codigo_ingreso, bodega_origen, bodega_destino, qr_bmp, codigo_material, cantidad, unidades, fecha_ingreso, usuario_ingreso, estado, fecha_modificacion, usuario_modificacion, newRecord, response, record, updatedRecord, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _req$body = req.body, codigo_ingreso = _req$body.codigo_ingreso, bodega_origen = _req$body.bodega_origen, bodega_destino = _req$body.bodega_destino, qr_bmp = _req$body.qr_bmp, codigo_material = _req$body.codigo_material, cantidad = _req$body.cantidad, unidades = _req$body.unidades, fecha_ingreso = _req$body.fecha_ingreso, usuario_ingreso = _req$body.usuario_ingreso, estado = _req$body.estado, fecha_modificacion = _req$body.fecha_modificacion, usuario_modificacion = _req$body.usuario_modificacion; // Validate required fields
            if (!(codigo_ingreso == 0 || codigo_ingreso === undefined)) {
              _context.n = 3;
              break;
            }
            _context.n = 1;
            return Ingresos.create({
              bodega_origen: bodega_origen,
              bodega_destino: bodega_destino,
              qr_bmp: qr_bmp,
              codigo_material: codigo_material,
              cantidad: cantidad,
              unidades: unidades,
              fecha_ingreso: fecha_ingreso,
              usuario_ingreso: usuario_ingreso,
              estado: estado,
              fecha_modificacion: fecha_modificacion,
              usuario_modificacion: usuario_modificacion
            });
          case 1:
            newRecord = _context.v;
            _context.n = 2;
            return Ingresos.findByPk(newRecord.codigo_ingreso);
          case 2:
            response = _context.v;
            return _context.a(2, res.status(201).json({
              data: response,
              length: 1
            }));
          case 3:
            _context.n = 4;
            return Ingresos.findByPk(codigo_ingreso);
          case 4:
            record = _context.v;
            if (record) {
              _context.n = 5;
              break;
            }
            return _context.a(2, res.status(404).json({
              error: 'Record not found'
            }));
          case 5:
            // Update fields
            if (bodega_origen !== undefined) record.bodega_origen = bodega_origen;
            if (bodega_destino !== undefined) record.bodega_destino = bodega_destino;
            if (qr_bmp !== undefined) record.qr_bmp = qr_bmp;
            if (codigo_material !== undefined) record.codigo_material = codigo_material;
            if (cantidad !== undefined) record.cantidad = cantidad;
            if (unidades !== undefined) record.unidades = unidades;
            if (fecha_ingreso !== undefined) record.fecha_ingreso = fecha_ingreso;
            if (usuario_ingreso !== undefined) record.usuario_ingreso = usuario_ingreso;
            if (estado !== undefined) record.estado = estado;
            if (fecha_modificacion !== undefined) record.fecha_modificacion = fecha_modificacion;
            if (usuario_modificacion !== undefined) record.usuario_modificacion = usuario_modificacion;
            _context.n = 6;
            return record.save();
          case 6:
            _context.n = 7;
            return Ingresos.findByPk(codigo_ingreso);
          case 7:
            updatedRecord = _context.v;
            return _context.a(2, res.status(200).json({
              data: updatedRecord,
              length: 1
            }));
          case 8:
            _context.n = 10;
            break;
          case 9:
            _context.p = 9;
            _t = _context.v;
            handleError(res, _t, 'Error creating or updating record');
          case 10:
            return _context.a(2);
        }
      }, _callee, null, [[0, 9]]);
    }));
    function createOrUpdate(_x, _x2) {
      return _createOrUpdate.apply(this, arguments);
    }
    return createOrUpdate;
  }(),
  // Get all records
  getAll: function () {
    var _getAll = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
      var _req$query, _req$query$page, page, _req$query$limit, limit, offset, _yield$Ingresos$findA, count, rows, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _req$query = req.query, _req$query$page = _req$query.page, page = _req$query$page === void 0 ? 1 : _req$query$page, _req$query$limit = _req$query.limit, limit = _req$query$limit === void 0 ? 10000 : _req$query$limit;
            offset = (page - 1) * limit;
            _context2.n = 1;
            return Ingresos.findAndCountAll({
              limit: parseInt(limit),
              offset: parseInt(offset),
              where: {
                estado: 'A'
              }
            });
          case 1:
            _yield$Ingresos$findA = _context2.v;
            count = _yield$Ingresos$findA.count;
            rows = _yield$Ingresos$findA.rows;
            return _context2.a(2, res.status(200).json({
              data: rows,
              length: rows.length,
              total: count,
              page: parseInt(page),
              totalPages: Math.ceil(count / limit)
            }));
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            handleError(res, _t2, 'Error fetching records');
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
            return Ingresos.findByPk(id);
          case 1:
            record = _context3.v;
            if (record) {
              _context3.n = 2;
              break;
            }
            return _context3.a(2, res.status(404).json({
              error: 'Record not found',
              id: id
            }));
          case 2:
            return _context3.a(2, res.status(200).json({
              data: record,
              length: 1
            }));
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            handleError(res, _t3, 'Error fetching record by ID');
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 3]]);
    }));
    function getById(_x5, _x6) {
      return _getById.apply(this, arguments);
    }
    return getById;
  }(),
  // Buscar ingreso activo por código QR / BMP
  getByQR: function () {
    var _getByQR = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
      var _req$body2, qr_bmp, Codigo, codigoQr, records, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            _req$body2 = req.body, qr_bmp = _req$body2.qr_bmp, Codigo = _req$body2.Codigo;
            codigoQr = String(qr_bmp || Codigo || '').trim();
            if (codigoQr) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2, res.status(400).json({
              error: 'Faltan parámetros: qr_bmp (o Codigo) es requerido.'
            }));
          case 1:
            _context4.n = 2;
            return Ingresos.findAll({
              where: {
                qr_bmp: codigoQr,
                estado: 'A'
              }
            });
          case 2:
            records = _context4.v;
            return _context4.a(2, res.status(200).json({
              data: records,
              length: records.length
            }));
          case 3:
            _context4.p = 3;
            _t4 = _context4.v;
            handleError(res, _t4, 'Error fetching record by QR');
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 3]]);
    }));
    function getByQR(_x7, _x8) {
      return _getByQR.apply(this, arguments);
    }
    return getByQR;
  }(),
  // Deactivate record (soft delete)
  deactivate: function () {
    var _deactivate = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
      var id, record, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            id = req.params.id;
            _context5.n = 1;
            return Ingresos.findByPk(id);
          case 1:
            record = _context5.v;
            if (record) {
              _context5.n = 2;
              break;
            }
            return _context5.a(2, res.status(404).json({
              error: 'Record not found'
            }));
          case 2:
            // Soft delete by setting status
            record.estado = 'I';
            _context5.n = 3;
            return record.save();
          case 3:
            return _context5.a(2, res.status(200).json({
              message: 'Record deactivated successfully',
              id: id
            }));
          case 4:
            _context5.p = 4;
            _t5 = _context5.v;
            handleError(res, _t5, 'Error deactivating record');
          case 5:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 4]]);
    }));
    function deactivate(_x9, _x0) {
      return _deactivate.apply(this, arguments);
    }
    return deactivate;
  }()
};