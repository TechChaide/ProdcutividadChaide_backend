"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// const jwt = require('jsonwebtoken');
// const db = require('../models');
// const { handleError } = require('../helpers/error.helper');

// const SECRET_KEY = process.env.SECRET_KEY;
// const TOKEN_EXPIRES_IN = '1h';

// const login = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // Find user by email
//         // const user = await db.User.findOne({
//         //     where: { email: email }
//         // });

//         const user = {
//             id: '0',
//             name: 'Operario',
//             email: email
//         }

//         if (!user) {
//             return res.status(404).json({ 
//                 message: 'User not found',
//                 code: 'USER_NOT_FOUND'
//             });
//         }

//         // Verify password
//         //const isPasswordValid = await bcrypt.compare(password, user.password);

//         // if (!isPasswordValid) {
//         //     return res.status(401).json({ 
//         //         message: 'Invalid credentials',
//         //         code: 'INVALID_CREDENTIALS'
//         //     });
//         // }

//         // Generate JWT token
//         const token = jwt.sign(
//             { 
//                 id: user.id,
//                 email: user.email
//             },
//             SECRET_KEY,
//             { expiresIn: TOKEN_EXPIRES_IN }
//         );

//         // Successful response
//         res.json({
//             message: 'Login successful',
//             token,
//             expiresIn: TOKEN_EXPIRES_IN,
//             user: {
//                 id: user.id,
//                 name: user.name,
//                 email: user.email
//             }
//         });
//     } catch (error) {
//         handleError(res, error, 'Server error');
//     }
// };

// module.exports = { login };

// src/controllers/auth.controller.js

var jwt = require('jsonwebtoken');
var db = require('../models');
var _require = require('../helpers/error.helper'),
  handleError = _require.handleError;
var _require2 = require('sequelize'),
  QueryTypes = _require2.QueryTypes; // Importa QueryTypes

var SECRET_KEY = process.env.SECRET_KEY;
var TOKEN_EXPIRES_IN = '1h';

// --- Función Helper ---
var getFichaSocial = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(db, codigo, direccion_ip) {
    var resultados, fichaConsolidada, respCtrlProd, maquinas, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          if (!(!codigo || !direccion_ip)) {
            _context.n = 1;
            break;
          }
          throw new Error('El código y el área son requeridos.');
        case 1:
          _context.n = 2;
          return db.sequelize2.query("EXEC [".concat(process.env.DB_NAME, "].[").concat(process.env.DB_SCHEMA, "].[Z_Consulta_FichaSocial] :codigo, :direccion_ip"), {
            replacements: {
              codigo: codigo,
              direccion_ip: direccion_ip
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context.v;
          if (!(resultados.length === 0)) {
            _context.n = 3;
            break;
          }
          return _context.a(2, null);
        case 3:
          // Si hay resultados, los consolidamos en un solo objeto
          // 1. Tomamos el primer resultado como base para los datos comunes
          fichaConsolidada = _objectSpread({}, resultados[0]); // 2. Usamos map() para extraer los valores y join() para unirlos con '&'
          respCtrlProd = resultados.map(function (r) {
            return r.resp_ctrl_prod;
          }).join('&');
          maquinas = resultados.map(function (o) {
            return o.maquina;
          }).join('&'); // 3. Actualizamos el objeto consolidado con los campos concatenados
          fichaConsolidada.resp_ctrl_prod = respCtrlProd;
          fichaConsolidada.maquina = maquinas;

          // 4. Retornamos el objeto único ya procesado
          return _context.a(2, fichaConsolidada);
        case 4:
          _context.p = 4;
          _t = _context.v;
          console.error("Error en getFichaSocial:", _t);
          throw new Error('Error al consultar la ficha social.');
        case 5:
          return _context.a(2);
      }
    }, _callee, null, [[0, 4]]);
  }));
  return function getFichaSocial(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var getFichaSocialColaborador = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(db, codigo) {
    var resultados, fichaConsolidada, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          if (codigo) {
            _context2.n = 1;
            break;
          }
          throw new Error('El código');
        case 1:
          _context2.n = 2;
          return db.sequelize2.query("EXEC [".concat(process.env.DB_NAME, "].[").concat(process.env.DB_SCHEMA, "].[Z_Consulta_FichaSocial_Colaborador] :codigo"), {
            replacements: {
              codigo: codigo
            },
            type: QueryTypes.SELECT
          });
        case 2:
          resultados = _context2.v;
          if (!(resultados.length === 0)) {
            _context2.n = 3;
            break;
          }
          return _context2.a(2, null);
        case 3:
          fichaConsolidada = _objectSpread({}, resultados[0]);
          return _context2.a(2, fichaConsolidada);
        case 4:
          _context2.p = 4;
          _t2 = _context2.v;
          console.error("Error en getFichaSocial:", _t2);
          throw new Error('Error al consultar la ficha social.');
        case 5:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 4]]);
  }));
  return function getFichaSocialColaborador(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

// --- Controlador Login Modificado ---
var login = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var _req$body, codigoEmpleado, direccion_ip, userAttemp, fichaSocial, token, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _req$body = req.body, codigoEmpleado = _req$body.codigoEmpleado, direccion_ip = _req$body.direccion_ip;
          _context3.p = 1;
          userAttemp = {
            id: codigoEmpleado,
            direccion_ip: direccion_ip
          };
          _context3.n = 2;
          return getFichaSocial(db, userAttemp.id, userAttemp.direccion_ip);
        case 2:
          fichaSocial = _context3.v;
          if (fichaSocial) {
            _context3.n = 3;
            break;
          }
          return _context3.a(2, res.status(404).json({
            message: 'Ficha de empleado no encontrada',
            code: 'FICHA_NOT_FOUND'
          }));
        case 3:
          // --- FIN DE LA MODIFICACIÓN ---
          token = jwt.sign({
            id: fichaSocial.CODIGO,
            nombres: fichaSocial.NOMBRE,
            // Puedes añadir más datos de la ficha al token si es necesario
            direccion_ip: fichaSocial.DEPARAMENTO,
            regional: fichaSocial.LOCALIDAD
          }, SECRET_KEY, {
            expiresIn: TOKEN_EXPIRES_IN
          });
          res.json({
            message: 'Login successful',
            token: token,
            expiresIn: TOKEN_EXPIRES_IN,
            user: {
              id: userAttemp.id,
              ficha: fichaSocial // Se adjuntan los datos de la ficha a la respuesta
            }
          });
          _context3.n = 5;
          break;
        case 4:
          _context3.p = 4;
          _t3 = _context3.v;
          handleError(res, _t3, 'Server error');
        case 5:
          return _context3.a(2);
      }
    }, _callee3, null, [[1, 4]]);
  }));
  return function login(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();
var colaborar = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var codigoEmpleado, userAttemp, fichaSocial, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          codigoEmpleado = req.body.codigoEmpleado;
          _context4.p = 1;
          userAttemp = {
            id: codigoEmpleado
          };
          _context4.n = 2;
          return getFichaSocialColaborador(db, userAttemp.id);
        case 2:
          fichaSocial = _context4.v;
          if (fichaSocial) {
            _context4.n = 3;
            break;
          }
          return _context4.a(2, res.status(404).json({
            message: 'Ficha de empleado no encontrada',
            code: 'FICHA_NOT_FOUND'
          }));
        case 3:
          res.json({
            user: {
              id: userAttemp.id,
              ficha: fichaSocial // Se adjuntan los datos de la ficha a la respuesta
            }
          });
          _context4.n = 5;
          break;
        case 4:
          _context4.p = 4;
          _t4 = _context4.v;
          handleError(res, _t4, 'Server error');
        case 5:
          return _context4.a(2);
      }
    }, _callee4, null, [[1, 4]]);
  }));
  return function colaborar(_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();
module.exports = {
  login: login,
  colaborar: colaborar
};