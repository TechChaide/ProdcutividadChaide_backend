"use strict";

// src/helpers/error.helper.js
function handleError(res, error) {
  var mensaje = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Error en el servidor';
  console.error('=== ERROR DETALLADO ===');
  console.error('Mensaje:', error.message);
  console.error('Nombre:', error.name);

  // Mostrar errores de SQL Server
  if (error.parent && error.parent.errors) {
    console.error('Errores SQL Server:');
    error.parent.errors.forEach(function (err, index) {
      console.error("  Error ".concat(index + 1, ":"), err.message);
    });
  }
  if (error.original && error.original.errors) {
    console.error('Errores originales:');
    error.original.errors.forEach(function (err, index) {
      console.error("  Error ".concat(index + 1, ":"), err.message);
    });
  }
  console.error('Stack:', error.stack);
  console.error('=== FIN ERROR ===');
  if (error.name && error.name.includes('Sequelize')) {
    var errores = [];

    // Extraer mensajes de error de diferentes fuentes
    if (error.errors) {
      errores = error.errors.map(function (err) {
        return err.message;
      });
    } else if (error.parent && error.parent.errors) {
      errores = error.parent.errors.map(function (err) {
        return err.message;
      });
    } else if (error.original && error.original.errors) {
      errores = error.original.errors.map(function (err) {
        return err.message;
      });
    } else if (error.message) {
      errores = [error.message];
    }
    return res.status(400).json({
      error: 'Error de validación',
      detalles: errores
    });
  }
  res.status(500).json({
    error: mensaje,
    detalles: process.env.NODE_ENV === 'development' ? error.message : undefined
  });
}
module.exports = {
  handleError: handleError
};