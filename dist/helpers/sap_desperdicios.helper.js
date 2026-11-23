"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// src/helpers/sap_desperdicios.helper.js
var path = require("path");
var soap = require("soap");
var WSDL_PATH = path.join(__dirname, "../wsdl/zws_noti_prensado.wsdl");
var TIMEOUT_SAP_MS = 60000;
var clientePromise = null;
function leerConfiguracionSAP() {
  var config = {
    url: process.env.SAP_WS_DESPERDICIOS_URL,
    usuario: process.env.SAP_WS_USUARIO,
    password: process.env.SAP_WS_PASSWORD,
    material: process.env.SAP_MATERIAL_DESPERDICIO
  };
  var faltantes = [!config.url && "SAP_WS_DESPERDICIOS_URL", !config.usuario && "SAP_WS_USUARIO", !config.password && "SAP_WS_PASSWORD", !config.material && "SAP_MATERIAL_DESPERDICIO"].filter(Boolean);
  if (faltantes.length > 0) {
    throw new Error("Falta configurar en el .env del backend: ".concat(faltantes.join(", "), "."));
  }
  return config;
}
function obtenerCliente(config) {
  if (!clientePromise) {
    clientePromise = soap.createClientAsync(WSDL_PATH, {
      endpoint: config.url
    }).then(function (client) {
      client.setSecurity(new soap.BasicAuthSecurity(config.usuario, config.password));
      return client;
    })["catch"](function (error) {
      clientePromise = null;
      throw error;
    });
  }
  return clientePromise;
}
var esTimeout = function esTimeout(error) {
  return (error === null || error === void 0 ? void 0 : error.code) === "ECONNABORTED" || /timeout/i.test((error === null || error === void 0 ? void 0 : error.message) || "");
};
function describirErrorSAP(error) {
  var _error$root, _faultstring$$value, _error$response;
  // SAP envía <faultstring xml:lang="en">: con atributos node-soap deja el texto en $value.
  var faultstring = error === null || error === void 0 || (_error$root = error.root) === null || _error$root === void 0 || (_error$root = _error$root.Envelope) === null || _error$root === void 0 || (_error$root = _error$root.Body) === null || _error$root === void 0 || (_error$root = _error$root.Fault) === null || _error$root === void 0 ? void 0 : _error$root.faultstring;
  var textoFault = (_faultstring$$value = faultstring === null || faultstring === void 0 ? void 0 : faultstring.$value) !== null && _faultstring$$value !== void 0 ? _faultstring$$value : faultstring;
  if (textoFault && _typeof(textoFault) !== "object") return String(textoFault);
  if (esTimeout(error)) {
    return "SAP no respondió a tiempo. Revise en SAP si el documento se creó antes de volver a intentar.";
  }
  if (error !== null && error !== void 0 && (_error$response = error.response) !== null && _error$response !== void 0 && _error$response.status) {
    return "SAP respondi\xF3 HTTP ".concat(error.response.status).concat(error.response.statusText ? " (".concat(error.response.statusText, ")") : "", ".");
  }
  return (error === null || error === void 0 ? void 0 : error.message) || "Error desconocido al llamar a SAP.";
}

/**
 * Registra en SAP (ZWS_NOTI_PRENSADO / ZmmWsMigo) la salida del desperdicio. Devuelve el
 * EStatus ("OK" si se creó el documento) y los mensajes de EtMessage; el primero es el que se
 * guarda como DOCUMENTO. Si falla lanza un Error con `reintentable` en false cuando SAP pudo
 * haber creado el documento igual (sin respuesta a tiempo): reenviarlo podría duplicarlo.
 */
function registrarDesperdicioSAP(_x) {
  return _registrarDesperdicioSAP.apply(this, arguments);
}
function _registrarDesperdicioSAP() {
  _registrarDesperdicioSAP = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
    var _respuesta, _respuesta$EStatus, _respuesta2, _mensajes$;
    var cantidad, ciudad, origen, config, respuesta, client, _yield$client$ZmmWsMi, _yield$client$ZmmWsMi2, errorSAP, items, mensajes, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          cantidad = _ref.cantidad, ciudad = _ref.ciudad, origen = _ref.origen;
          config = leerConfiguracionSAP();
          _context.p = 1;
          _context.n = 2;
          return obtenerCliente(config);
        case 2:
          client = _context.v;
          _context.n = 3;
          return client.ZmmWsMigoAsync({
            EtMessage: {},
            ICantidad: Number(cantidad).toFixed(3),
            ICiudad: ciudad,
            IMaterial: config.material,
            IOrigen: origen
          }, {
            timeout: TIMEOUT_SAP_MS
          });
        case 3:
          _yield$client$ZmmWsMi = _context.v;
          _yield$client$ZmmWsMi2 = _slicedToArray(_yield$client$ZmmWsMi, 1);
          respuesta = _yield$client$ZmmWsMi2[0];
          _context.n = 5;
          break;
        case 4:
          _context.p = 4;
          _t = _context.v;
          errorSAP = new Error("No se pudo completar el env\xEDo a SAP: ".concat(describirErrorSAP(_t)));
          errorSAP.reintentable = !esTimeout(_t);
          throw errorSAP;
        case 5:
          items = (_respuesta = respuesta) === null || _respuesta === void 0 || (_respuesta = _respuesta.EtMessage) === null || _respuesta === void 0 ? void 0 : _respuesta.item;
          mensajes = (Array.isArray(items) ? items : items ? [items] : []).map(function (item) {
            var _item$Message;
            return String((_item$Message = item === null || item === void 0 ? void 0 : item.Message) !== null && _item$Message !== void 0 ? _item$Message : "").trim();
          }).filter(Boolean);
          return _context.a(2, {
            estado: String((_respuesta$EStatus = (_respuesta2 = respuesta) === null || _respuesta2 === void 0 ? void 0 : _respuesta2.EStatus) !== null && _respuesta$EStatus !== void 0 ? _respuesta$EStatus : "").trim(),
            mensaje: (_mensajes$ = mensajes[0]) !== null && _mensajes$ !== void 0 ? _mensajes$ : "",
            mensajes: mensajes
          });
      }
    }, _callee, null, [[1, 4]]);
  }));
  return _registrarDesperdicioSAP.apply(this, arguments);
}
module.exports = {
  registrarDesperdicioSAP: registrarDesperdicioSAP
};