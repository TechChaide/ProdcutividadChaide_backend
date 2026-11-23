// src/helpers/sap_desperdicios.helper.js
const path = require("path");
const soap = require("soap");

const WSDL_PATH = path.join(__dirname, "../wsdl/zws_noti_prensado.wsdl");
const TIMEOUT_SAP_MS = 60000;

let clientePromise = null;

function leerConfiguracionSAP() {
  const config = {
    url: process.env.SAP_WS_DESPERDICIOS_URL,
    usuario: process.env.SAP_WS_USUARIO,
    password: process.env.SAP_WS_PASSWORD,
    material: process.env.SAP_MATERIAL_DESPERDICIO,
  };
  const faltantes = [
    !config.url && "SAP_WS_DESPERDICIOS_URL",
    !config.usuario && "SAP_WS_USUARIO",
    !config.password && "SAP_WS_PASSWORD",
    !config.material && "SAP_MATERIAL_DESPERDICIO",
  ].filter(Boolean);
  if (faltantes.length > 0) {
    throw new Error(`Falta configurar en el .env del backend: ${faltantes.join(", ")}.`);
  }
  return config;
}

function obtenerCliente(config) {
  if (!clientePromise) {
    clientePromise = soap
      .createClientAsync(WSDL_PATH, { endpoint: config.url })
      .then((client) => {
        client.setSecurity(new soap.BasicAuthSecurity(config.usuario, config.password));
        return client;
      })
      .catch((error) => {
        clientePromise = null;
        throw error;
      });
  }
  return clientePromise;
}

const esTimeout = (error) =>
  error?.code === "ECONNABORTED" || /timeout/i.test(error?.message || "");

function describirErrorSAP(error) {
  // SAP envía <faultstring xml:lang="en">: con atributos node-soap deja el texto en $value.
  const faultstring = error?.root?.Envelope?.Body?.Fault?.faultstring;
  const textoFault = faultstring?.$value ?? faultstring;
  if (textoFault && typeof textoFault !== "object") return String(textoFault);
  if (esTimeout(error)) {
    return "SAP no respondió a tiempo. Revise en SAP si el documento se creó antes de volver a intentar.";
  }
  if (error?.response?.status) {
    return `SAP respondió HTTP ${error.response.status}${error.response.statusText ? ` (${error.response.statusText})` : ""}.`;
  }
  return error?.message || "Error desconocido al llamar a SAP.";
}

/**
 * Registra en SAP (ZWS_NOTI_PRENSADO / ZmmWsMigo) la salida del desperdicio. Devuelve el
 * EStatus ("OK" si se creó el documento) y los mensajes de EtMessage; el primero es el que se
 * guarda como DOCUMENTO. Si falla lanza un Error con `reintentable` en false cuando SAP pudo
 * haber creado el documento igual (sin respuesta a tiempo): reenviarlo podría duplicarlo.
 */
async function registrarDesperdicioSAP({ cantidad, ciudad, origen }) {
  const config = leerConfiguracionSAP();

  let respuesta;
  try {
    const client = await obtenerCliente(config);
    [respuesta] = await client.ZmmWsMigoAsync(
      {
        EtMessage: {},
        ICantidad: Number(cantidad).toFixed(3),
        ICiudad: ciudad,
        IMaterial: config.material,
        IOrigen: origen,
      },
      { timeout: TIMEOUT_SAP_MS }
    );
  } catch (error) {
    const errorSAP = new Error(`No se pudo completar el envío a SAP: ${describirErrorSAP(error)}`);
    errorSAP.reintentable = !esTimeout(error);
    throw errorSAP;
  }

  const items = respuesta?.EtMessage?.item;
  const mensajes = (Array.isArray(items) ? items : items ? [items] : [])
    .map((item) => String(item?.Message ?? "").trim())
    .filter(Boolean);

  return {
    estado: String(respuesta?.EStatus ?? "").trim(),
    mensaje: mensajes[0] ?? "",
    mensajes,
  };
}

module.exports = { registrarDesperdicioSAP };
