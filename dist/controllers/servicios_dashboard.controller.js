"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require("sequelize"),
  QueryTypes = _require.QueryTypes;
var db = require("../models"); // Importa el objeto db desde los modelos

//este spse contruye con fines de alimentar el dashboard de producción del proyecto productividad chaide

module.exports = {
  // --- Controlador para Z_Consulta_Ordenes_Produccion ---
  getOperadoresPorNombredeAreaYFechaInicio: function () {
    var _getOperadoresPorNombredeAreaYFechaInicio = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
      var _req$body, departamento, fechaInicio, resultados, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            // 1. Obtiene los parámetros de la URL (query string)
            _req$body = req.body, departamento = _req$body.departamento, fechaInicio = _req$body.fechaInicio; // 2. Validación básica de los parámetros
            if (!(!departamento || !fechaInicio)) {
              _context.n = 1;
              break;
            }
            return _context.a(2, res.status(400).json({
              msg: 'Los parámetros "departamento" y "fechaInicio" son requeridos.'
            }));
          case 1:
            _context.n = 2;
            return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[SP_Get_EmpleadosAreaByFechaInicio] :departamento, :fechaInicio"), {
              // Se usan replacements para evitar inyección SQL
              replacements: {
                departamento: departamento,
                fechaInicio: fechaInicio
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
    function getOperadoresPorNombredeAreaYFechaInicio(_x, _x2) {
      return _getOperadoresPorNombredeAreaYFechaInicio.apply(this, arguments);
    }
    return getOperadoresPorNombredeAreaYFechaInicio;
  }(),
  getTiempoProduccionPorHojaRutaYMaterial: function () {
    var _getTiempoProduccionPorHojaRutaYMaterial = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
      var _req$body2, hojaRuta, material, resultados, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            // 1. Obtiene los parámetros de la URL (query string)
            _req$body2 = req.body, hojaRuta = _req$body2.hojaRuta, material = _req$body2.material; // 2. Validación básica de los parámetros
            if (!(!hojaRuta || !material)) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2, res.status(400).json({
              msg: 'Los parámetros "hojaRuta" y "material" son requeridos.'
            }));
          case 1:
            _context2.n = 2;
            return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_Get_tiempoProduccionMaterialByHojaRuta] :hojaRuta, :material"), {
              // Se usan replacements para evitar inyección SQL
              replacements: {
                hojaRuta: hojaRuta,
                material: material
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
            console.error("Error al consultar tiempo de producción por hoja de ruta y material:", _t2);
            res.status(500).json({
              msg: "Error en el servidor al consultar tiempo de producción por hoja de ruta y material."
            });
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 3]]);
    }));
    function getTiempoProduccionPorHojaRutaYMaterial(_x3, _x4) {
      return _getTiempoProduccionPorHojaRutaYMaterial.apply(this, arguments);
    }
    return getTiempoProduccionPorHojaRutaYMaterial;
  }(),
  getHabilidadesOperadorPorCodigoOperador: function () {
    var _getHabilidadesOperadorPorCodigoOperador = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
      var Codigo, resultados, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            // 1. Obtiene los parámetros de la URL (query string)
            Codigo = req.body.Codigo; // 2. Validación básica de los parámetros
            if (Codigo) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2, res.status(400).json({
              msg: 'El parámetro "Codigo" es requerido.'
            }));
          case 1:
            _context3.n = 2;
            return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[SP_Get_HabilidadesOperadorPorCodigoOperador] :Codigo"), {
              // Se usan replacements para evitar inyección SQL
              replacements: {
                Codigo: Codigo
              },
              type: QueryTypes.SELECT
            });
          case 2:
            resultados = _context3.v;
            // 4. Envía los resultados como respuesta
            res.status(200).json({
              data: resultados,
              length: resultados.length
            });
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            console.error("Error al consultar habilidades del operador por código:", _t3);
            res.status(500).json({
              msg: "Error en el servidor al consultar habilidades del operador por código."
            });
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 3]]);
    }));
    function getHabilidadesOperadorPorCodigoOperador(_x5, _x6) {
      return _getHabilidadesOperadorPorCodigoOperador.apply(this, arguments);
    }
    return getHabilidadesOperadorPorCodigoOperador;
  }(),
  ////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////

  getDepartamenrtosDisponibles: function () {
    var _getDepartamenrtosDisponibles = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
      var resultados, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            _context4.n = 1;
            return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_Get_DepartamentosProductividad]"), {
              type: QueryTypes.SELECT
            });
          case 1:
            resultados = _context4.v;
            // 4. Envía los resultados como respuesta
            res.status(200).json({
              data: resultados,
              length: resultados.length
            });
            _context4.n = 3;
            break;
          case 2:
            _context4.p = 2;
            _t4 = _context4.v;
            console.error("Error al consultar órdenes de producción:", _t4);
            res.status(500).json({
              msg: "Error en el servidor al consultar las órdenes."
            });
          case 3:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 2]]);
    }));
    function getDepartamenrtosDisponibles(_x7, _x8) {
      return _getDepartamenrtosDisponibles.apply(this, arguments);
    }
    return getDepartamenrtosDisponibles;
  }(),
  getOrdenestrabajadosPorDepartamentoYCodigoEmpleadoYFechaInicio: function () {
    var _getOrdenestrabajadosPorDepartamentoYCodigoEmpleadoYFechaInicio = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
      var _req$body3, Departamento, CodigoEmpleado, fechaInicio, resultados, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            // 1. Obtiene los parámetros de la URL (query string)
            _req$body3 = req.body, Departamento = _req$body3.Departamento, CodigoEmpleado = _req$body3.CodigoEmpleado, fechaInicio = _req$body3.fechaInicio; // 2. Validación básica de los parámetros
            if (!(!Departamento || !CodigoEmpleado || !fechaInicio)) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2, res.status(400).json({
              msg: 'Los parámetros "Departamento", "CodigoEmpleado" y "fechaInicio" son requeridos.'
            }));
          case 1:
            _context5.n = 2;
            return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_Get_OrdenesTrabajadasPorDepartamentoEmpleadpYFechaInicio] :Departamento, :CodigoEmpleado, :fechaInicio"), {
              replacements: {
                Departamento: Departamento,
                CodigoEmpleado: CodigoEmpleado,
                fechaInicio: fechaInicio
              },
              type: QueryTypes.SELECT
            });
          case 2:
            resultados = _context5.v;
            res.status(200).json({
              data: resultados,
              length: resultados.length
            });
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t5 = _context5.v;
            console.error("Error al consultar órdenes trabajadas por departamento, código de empleado y fecha de inicio:", _t5);
            res.status(500).json({
              msg: "Error en el servidor al consultar órdenes trabajadas por departamento, código de empleado y fecha de inicio."
            });
          case 4:
            ;
          case 5:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 3]]);
    }));
    function getOrdenestrabajadosPorDepartamentoYCodigoEmpleadoYFechaInicio(_x9, _x0) {
      return _getOrdenestrabajadosPorDepartamentoYCodigoEmpleadoYFechaInicio.apply(this, arguments);
    }
    return getOrdenestrabajadosPorDepartamentoYCodigoEmpleadoYFechaInicio;
  }(),
  getInformacionOrdenes: function () {
    var _getInformacionOrdenes = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
      var CodigoOrden, resultados, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            // 1. Obtiene los parámetros de la URL (query string)
            CodigoOrden = req.body.CodigoOrden; // 2. Validación básica de los parámetros
            if (CodigoOrden) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2, res.status(400).json({
              msg: 'El parámetro "CodigoOrden" es requerido.'
            }));
          case 1:
            _context6.n = 2;
            return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_Get_InformacionOrdenes] :CodigoOrden"), {
              replacements: {
                CodigoOrden: CodigoOrden
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
            _t6 = _context6.v;
            console.error("Error al consultar información de órdenes:", _t6);
            res.status(500).json({
              msg: "Error en el servidor al consultar información de órdenes."
            });
          case 4:
            ;
          case 5:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 3]]);
    }));
    function getInformacionOrdenes(_x1, _x10) {
      return _getInformacionOrdenes.apply(this, arguments);
    }
    return getInformacionOrdenes;
  }(),
  getInformacionOrdenesDelEmpleado: function () {
    var _getInformacionOrdenesDelEmpleado = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
      var _req$body4, Orden, CodigoEmpleado, resultados, _t7;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _context7.p = 0;
            // 1. Obtiene los parámetros de la URL (query string)
            _req$body4 = req.body, Orden = _req$body4.Orden, CodigoEmpleado = _req$body4.CodigoEmpleado; // 2. Validación básica de los parámetros
            if (!(!Orden || !CodigoEmpleado)) {
              _context7.n = 1;
              break;
            }
            return _context7.a(2, res.status(400).json({
              msg: 'Los parámetros "Orden" y "CodigoEmpleado" son requeridos.'
            }));
          case 1:
            _context7.n = 2;
            return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_Get_InformacionCuboProductividadPorOrden] :Orden, :CodigoEmpleado"), {
              replacements: {
                Orden: Orden,
                CodigoEmpleado: CodigoEmpleado
              },
              type: QueryTypes.SELECT
            });
          case 2:
            resultados = _context7.v;
            res.status(200).json({
              data: resultados,
              length: resultados.length
            });
            _context7.n = 4;
            break;
          case 3:
            _context7.p = 3;
            _t7 = _context7.v;
            console.error("Error al consultar información de órdenes:", _t7);
            res.status(500).json({
              msg: "Error en el servidor al consultar información de órdenes."
            });
          case 4:
            ;
          case 5:
            return _context7.a(2);
        }
      }, _callee7, null, [[0, 3]]);
    }));
    function getInformacionOrdenesDelEmpleado(_x11, _x12) {
      return _getInformacionOrdenesDelEmpleado.apply(this, arguments);
    }
    return getInformacionOrdenesDelEmpleado;
  }(),
  getProductividadDiariaPersonaPorCodigoEmpleadoFecha: function () {
    var _getProductividadDiariaPersonaPorCodigoEmpleadoFecha = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req, res) {
      var _req$body5, CodigoPersona, fechaInicio, fechaFin, HoraInicio, HoraFin, resultados, _t8;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            _context8.p = 0;
            // 1. Obtiene los parámetros de la URL (query string)
            _req$body5 = req.body, CodigoPersona = _req$body5.CodigoPersona, fechaInicio = _req$body5.fechaInicio, fechaFin = _req$body5.fechaFin, HoraInicio = _req$body5.HoraInicio, HoraFin = _req$body5.HoraFin; // 2. Validación básica de los parámetros
            if (!(!CodigoPersona || !fechaInicio || !fechaFin)) {
              _context8.n = 1;
              break;
            }
            return _context8.a(2, res.status(400).json({
              msg: 'Los parámetros "CodigoPersona", "fechaInicio" y "fechaFin" son requeridos.'
            }));
          case 1:
            _context8.n = 2;
            return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_Get_ProductividadPersonaByCodigoEmpleadoYFechaDIA] :CodigoPersona, :fechaInicio, :fechaFin, :HoraInicio, :HoraFin"), {
              replacements: {
                CodigoPersona: CodigoPersona,
                fechaInicio: fechaInicio,
                fechaFin: fechaFin,
                HoraInicio: HoraInicio,
                HoraFin: HoraFin
              },
              type: QueryTypes.SELECT
            });
          case 2:
            resultados = _context8.v;
            res.status(200).json({
              data: resultados,
              length: resultados.length
            });
            _context8.n = 4;
            break;
          case 3:
            _context8.p = 3;
            _t8 = _context8.v;
            console.error("Error al consultar productividad diaria de la persona por código de empleado y fecha:", _t8);
            res.status(500).json({
              msg: "Error en el servidor al consultar productividad diaria de la persona por código de empleado y fecha."
            });
          case 4:
            return _context8.a(2);
        }
      }, _callee8, null, [[0, 3]]);
    }));
    function getProductividadDiariaPersonaPorCodigoEmpleadoFecha(_x13, _x14) {
      return _getProductividadDiariaPersonaPorCodigoEmpleadoFecha.apply(this, arguments);
    }
    return getProductividadDiariaPersonaPorCodigoEmpleadoFecha;
  }(),
  getProductividadPersonaEnIntervaloDias: function () {
    var _getProductividadPersonaEnIntervaloDias = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(req, res) {
      var _req$body6, CodigosPersonas, fechaInicio, fechaFin, Departamento, Cargo, formatoFechaISO, resultados, _t9;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            _context9.p = 0;
            // 1. Obtiene los parámetros de la URL (query string)
            _req$body6 = req.body, CodigosPersonas = _req$body6.CodigosPersonas, fechaInicio = _req$body6.fechaInicio, fechaFin = _req$body6.fechaFin, Departamento = _req$body6.Departamento, Cargo = _req$body6.Cargo; // 2. Validación básica de los parámetros
            if (!(!CodigosPersonas || !fechaInicio || !fechaFin || !Departamento || !Cargo)) {
              _context9.n = 1;
              break;
            }
            return _context9.a(2, res.status(400).json({
              msg: 'Los parámetros "CodigosPersonas", "fechaInicio", "fechaFin", "Departamento" y "Cargo" son requeridos.'
            }));
          case 1:
            formatoFechaISO = /^\d{4}-\d{2}-\d{2}$/;
            if (!(!formatoFechaISO.test(fechaInicio) || !formatoFechaISO.test(fechaFin))) {
              _context9.n = 2;
              break;
            }
            return _context9.a(2, res.status(400).json({
              msg: 'Los parámetros "fechaInicio" y "fechaFin" deben tener formato YYYY-MM-DD.'
            }));
          case 2:
            if (!(new Date(fechaInicio) > new Date(fechaFin))) {
              _context9.n = 3;
              break;
            }
            return _context9.a(2, res.status(400).json({
              msg: '"fechaInicio" no puede ser mayor que "fechaFin".'
            }));
          case 3:
            _context9.n = 4;
            return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_Get_productividadPersonaByIntervaloTiempo] :CodigosPersonas, :fechaInicio, :fechaFin, :Departamento, :Cargo"), {
              replacements: {
                CodigosPersonas: codigosPersonasNormalizados,
                fechaInicio: fechaInicio,
                fechaFin: fechaFin,
                Departamento: Departamento,
                Cargo: Cargo
              },
              type: QueryTypes.SELECT
            });
          case 4:
            resultados = _context9.v;
            res.status(200).json({
              data: resultados,
              length: resultados.length
            });
            _context9.n = 6;
            break;
          case 5:
            _context9.p = 5;
            _t9 = _context9.v;
            console.error("Error al consultar productividad de la persona en intervalo de días:", _t9);
            res.status(500).json({
              msg: "Error en el servidor al consultar productividad de la persona en intervalo de días."
            });
          case 6:
            return _context9.a(2);
        }
      }, _callee9, null, [[0, 5]]);
    }));
    function getProductividadPersonaEnIntervaloDias(_x15, _x16) {
      return _getProductividadPersonaEnIntervaloDias.apply(this, arguments);
    }
    return getProductividadPersonaEnIntervaloDias;
  }(),
  getProductividadPersonaEnIntervaloFechas: function () {
    var _getProductividadPersonaEnIntervaloFechas = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(req, res) {
      var _req$body7, CodigosPersonas, fechaInicio, fechaFin, Departamento, Cargo, _codigosPersonasNormalizados, formatoFechaISO, resultados, _t0;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            _context0.p = 0;
            // 1. Obtiene los parámetros de la URL (query string)
            _req$body7 = req.body, CodigosPersonas = _req$body7.CodigosPersonas, fechaInicio = _req$body7.fechaInicio, fechaFin = _req$body7.fechaFin, Departamento = _req$body7.Departamento, Cargo = _req$body7.Cargo; // 2. Validación básica de los parámetros
            if (!(!CodigosPersonas || !fechaInicio || !fechaFin)) {
              _context0.n = 1;
              break;
            }
            return _context0.a(2, res.status(400).json({
              msg: 'Los parámetros "CodigosPersonas", "fechaInicio" y "fechaFin" son requeridos.'
            }));
          case 1:
            // El SP espera un NVARCHAR con códigos separados por '&'.
            _codigosPersonasNormalizados = Array.isArray(CodigosPersonas) ? CodigosPersonas.map(function (codigo) {
              return String(codigo).trim();
            }).filter(Boolean).join("&") : String(CodigosPersonas).split(/[,&]/).map(function (codigo) {
              return codigo.trim();
            }).filter(Boolean).join("&");
            if (_codigosPersonasNormalizados) {
              _context0.n = 2;
              break;
            }
            return _context0.a(2, res.status(400).json({
              msg: 'El parámetro "CodigosPersonas" no contiene códigos válidos.'
            }));
          case 2:
            formatoFechaISO = /^\d{4}-\d{2}-\d{2}$/;
            if (!(!formatoFechaISO.test(fechaInicio) || !formatoFechaISO.test(fechaFin))) {
              _context0.n = 3;
              break;
            }
            return _context0.a(2, res.status(400).json({
              msg: 'Los parámetros "fechaInicio" y "fechaFin" deben tener formato YYYY-MM-DD.'
            }));
          case 3:
            if (!(new Date(fechaInicio) > new Date(fechaFin))) {
              _context0.n = 4;
              break;
            }
            return _context0.a(2, res.status(400).json({
              msg: '"fechaInicio" no puede ser mayor que "fechaFin".'
            }));
          case 4:
            _context0.n = 5;
            return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_Get_ProduccionPersonasPorIntervaloFechas] :CodigosPersonas, :fechaInicio, :fechaFin, :Departamento, :Cargo"), {
              replacements: {
                CodigosPersonas: _codigosPersonasNormalizados,
                fechaInicio: fechaInicio,
                fechaFin: fechaFin,
                Departamento: Departamento,
                Cargo: Cargo
              },
              type: QueryTypes.SELECT
            });
          case 5:
            resultados = _context0.v;
            res.status(200).json({
              data: resultados,
              length: resultados.length
            });
            _context0.n = 7;
            break;
          case 6:
            _context0.p = 6;
            _t0 = _context0.v;
            console.error("Error al consultar productividad de la persona en intervalo de días:", _t0);
            res.status(500).json({
              msg: "Error en el servidor al consultar productividad de la persona en intervalo de días."
            });
          case 7:
            return _context0.a(2);
        }
      }, _callee0, null, [[0, 6]]);
    }));
    function getProductividadPersonaEnIntervaloFechas(_x17, _x18) {
      return _getProductividadPersonaEnIntervaloFechas.apply(this, arguments);
    }
    return getProductividadPersonaEnIntervaloFechas;
  }(),
  getFiltrosPorArea: function () {
    var _getFiltrosPorArea = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(req, res) {
      var resultados, _t1;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            _context1.p = 0;
            _context1.n = 1;
            return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_Get_FiltrosPorDepartamento]"), {
              replacements: {},
              type: QueryTypes.SELECT
            });
          case 1:
            resultados = _context1.v;
            res.status(200).json({
              data: resultados,
              length: resultados.length
            });
            _context1.n = 3;
            break;
          case 2:
            _context1.p = 2;
            _t1 = _context1.v;
            console.error("Error al consultar filtros por área:", _t1);
            res.status(500).json({
              msg: "Error en el servidor al consultar productividad diaria de la persona por código de empleado y fecha."
            });
          case 3:
            return _context1.a(2);
        }
      }, _callee1, null, [[0, 2]]);
    }));
    function getFiltrosPorArea(_x19, _x20) {
      return _getFiltrosPorArea.apply(this, arguments);
    }
    return getFiltrosPorArea;
  }(),
  ////////////////////////////sps finales divide and conquer para el dashboard de producción del proyecto productividad chaide

  getTiemposJustificadosEnIntervaloFechas: function () {
    var _getTiemposJustificadosEnIntervaloFechas = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(req, res) {
      var _req$body8, CodigosPersonas, fechaInicio, fechaFin, _codigosPersonasNormalizados2, formatoFechaISO, resultados, _t10;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            _context10.p = 0;
            // 1. Obtiene los parámetros de la URL (query string)
            _req$body8 = req.body, CodigosPersonas = _req$body8.CodigosPersonas, fechaInicio = _req$body8.fechaInicio, fechaFin = _req$body8.fechaFin; // 2. Validación básica de los parámetros
            if (!(!CodigosPersonas || !fechaInicio || !fechaFin)) {
              _context10.n = 1;
              break;
            }
            return _context10.a(2, res.status(400).json({
              msg: 'Los parámetros "CodigosPersonas", "fechaInicio" y "fechaFin" son requeridos.'
            }));
          case 1:
            // El SP espera un NVARCHAR con códigos separados por '&'.
            _codigosPersonasNormalizados2 = Array.isArray(CodigosPersonas) ? CodigosPersonas.map(function (codigo) {
              return String(codigo).trim();
            }).filter(Boolean).join("&") : String(CodigosPersonas).split(/[,&]/).map(function (codigo) {
              return codigo.trim();
            }).filter(Boolean).join("&");
            if (_codigosPersonasNormalizados2) {
              _context10.n = 2;
              break;
            }
            return _context10.a(2, res.status(400).json({
              msg: 'El parámetro "CodigosPersonas" no contiene códigos válidos.'
            }));
          case 2:
            formatoFechaISO = /^\d{4}-\d{2}-\d{2}$/;
            if (!(!formatoFechaISO.test(fechaInicio) || !formatoFechaISO.test(fechaFin))) {
              _context10.n = 3;
              break;
            }
            return _context10.a(2, res.status(400).json({
              msg: 'Los parámetros "fechaInicio" y "fechaFin" deben tener formato YYYY-MM-DD.'
            }));
          case 3:
            if (!(new Date(fechaInicio) > new Date(fechaFin))) {
              _context10.n = 4;
              break;
            }
            return _context10.a(2, res.status(400).json({
              msg: '"fechaInicio" no puede ser mayor que "fechaFin".'
            }));
          case 4:
            _context10.n = 5;
            return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_Get_HorasJustificadasPersona] :CodigosPersonas, :fechaInicio, :fechaFin"), {
              replacements: {
                CodigosPersonas: _codigosPersonasNormalizados2,
                fechaInicio: fechaInicio,
                fechaFin: fechaFin
              },
              type: QueryTypes.SELECT
            });
          case 5:
            resultados = _context10.v;
            res.status(200).json({
              data: resultados,
              length: resultados.length
            });
            _context10.n = 7;
            break;
          case 6:
            _context10.p = 6;
            _t10 = _context10.v;
            console.error("Error al consultar horas justificadas de la persona en intervalo de días:", _t10);
            res.status(500).json({
              msg: "Error en el servidor al consultar horas justificadas de la persona en intervalo de días."
            });
          case 7:
            return _context10.a(2);
        }
      }, _callee10, null, [[0, 6]]);
    }));
    function getTiemposJustificadosEnIntervaloFechas(_x21, _x22) {
      return _getTiemposJustificadosEnIntervaloFechas.apply(this, arguments);
    }
    return getTiemposJustificadosEnIntervaloFechas;
  }(),
  getRegistrosProductividad: function () {
    var _getRegistrosProductividad = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(req, res) {
      var _req$body9, CodigosPersonas, fechaInicio, fechaFin, Departamento, Cargo, _codigosPersonasNormalizados3, formatoFechaISO, normalizeListParam, departamentoParam, cargoParam, resultados, _t11;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            _context11.p = 0;
            // 1. Obtiene los parámetros de la URL (query string)
            _req$body9 = req.body, CodigosPersonas = _req$body9.CodigosPersonas, fechaInicio = _req$body9.fechaInicio, fechaFin = _req$body9.fechaFin, Departamento = _req$body9.Departamento, Cargo = _req$body9.Cargo; // 2. Validación básica de los parámetros
            if (!(!CodigosPersonas || !fechaInicio || !fechaFin)) {
              _context11.n = 1;
              break;
            }
            return _context11.a(2, res.status(400).json({
              msg: 'Los parámetros "CodigosPersonas", "fechaInicio" y "fechaFin" son requeridos.'
            }));
          case 1:
            // El SP espera un NVARCHAR con códigos separados por '&'.
            _codigosPersonasNormalizados3 = Array.isArray(CodigosPersonas) ? CodigosPersonas.map(function (codigo) {
              return String(codigo).trim();
            }).filter(Boolean).join("&") : String(CodigosPersonas).split(/[,&]/).map(function (codigo) {
              return codigo.trim();
            }).filter(Boolean).join("&");
            if (_codigosPersonasNormalizados3) {
              _context11.n = 2;
              break;
            }
            return _context11.a(2, res.status(400).json({
              msg: 'El parámetro "CodigosPersonas" no contiene códigos válidos.'
            }));
          case 2:
            formatoFechaISO = /^\d{4}-\d{2}-\d{2}$/;
            if (!(!formatoFechaISO.test(fechaInicio) || !formatoFechaISO.test(fechaFin))) {
              _context11.n = 3;
              break;
            }
            return _context11.a(2, res.status(400).json({
              msg: 'Los parámetros "fechaInicio" y "fechaFin" deben tener formato YYYY-MM-DD.'
            }));
          case 3:
            if (!(new Date(fechaInicio) > new Date(fechaFin))) {
              _context11.n = 4;
              break;
            }
            return _context11.a(2, res.status(400).json({
              msg: '"fechaInicio" no puede ser mayor que "fechaFin".'
            }));
          case 4:
            normalizeListParam = function normalizeListParam(param) {
              if (param === undefined || param === null) return "";
              if (Array.isArray(param)) {
                return param.map(function (item) {
                  return String(item).trim();
                }).filter(Boolean).join("&");
              }
              return String(param).trim();
            };
            departamentoParam = normalizeListParam(Departamento);
            cargoParam = normalizeListParam(Cargo); // Si Cargo viene vacío o null, el SP recibe cadena vacía.
            // El procedimiento en la base de datos debe poder manejar esta condición.
            _context11.n = 5;
            return db.sequelize.query("EXEC [".concat(process.env.DB_NAME, "].[dbo].[sp_Get_RegistrosCruceProductividadPersona] :CodigosPersonas, :fechaInicio, :fechaFin, :Departamento, :Cargo"), {
              replacements: {
                CodigosPersonas: _codigosPersonasNormalizados3,
                fechaInicio: fechaInicio,
                fechaFin: fechaFin,
                Departamento: departamentoParam,
                Cargo: cargoParam
              },
              type: QueryTypes.SELECT
            });
          case 5:
            resultados = _context11.v;
            res.status(200).json({
              data: resultados,
              length: resultados.length
            });
            _context11.n = 7;
            break;
          case 6:
            _context11.p = 6;
            _t11 = _context11.v;
            console.error("Error al consultar registros de productividad de la persona en intervalo de días:", _t11);
            res.status(500).json({
              msg: "Error en el servidor al consultar registros de productividad de la persona en intervalo de días."
            });
          case 7:
            return _context11.a(2);
        }
      }, _callee11, null, [[0, 6]]);
    }));
    function getRegistrosProductividad(_x23, _x24) {
      return _getRegistrosProductividad.apply(this, arguments);
    }
    return getRegistrosProductividad;
  }()
};