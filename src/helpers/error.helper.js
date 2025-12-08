// src/helpers/error.helper.js
function handleError(res, error, mensaje = 'Error en el servidor') {
  console.error(error);
  
  if (error.name && error.name.includes('Sequelize')) {
    const errores = error.errors ? error.errors.map(err => err.message) : [error.message];
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

module.exports = { handleError };