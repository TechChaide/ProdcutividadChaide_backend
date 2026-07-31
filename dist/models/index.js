// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
// const db = {};

// // Importar la configuración de sequelize desde src/config/database.js
// const sequelize = require('../config/database');

// // Cargar todos los modelos automáticamente
// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && 
//            (file !== basename) && 
//            (file.slice(-3) === '.js' &&
//            !file.includes('.test.js'));
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// // Establecer las relaciones entre modelos
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// // Exportar la instancia de sequelize y los modelos
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var db = {};

// 1. Importa AMBAS conexiones desde tu archivo de configuración
var _require = require('../config/database'),
  sequelize = _require.sequelize,
  sequelize2 = _require.sequelize2;

// Cargar todos los modelos automáticamente
fs.readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-9) === '.model.js' &&
  // Ajustado para tu convención de nombres
  !file.includes('.test.js');
}).forEach(function (file) {
  // 2. Lógica para seleccionar la conexión correcta
  var connectionToUse;

  // REGLA: Si el nombre del archivo incluye 'DECIMAL', usa la segunda conexión.
  // ¡Puedes ajustar esta regla como necesites!
  if (file.includes('ORDEN_EMPLEADO')) {
    connectionToUse = sequelize2;
  } else {
    connectionToUse = sequelize;
  }

  // 3. Pasa la conexión seleccionada al definir el modelo
  var model = require(path.join(__dirname, file))(connectionToUse, Sequelize.DataTypes);
  db[model.name] = model;
});

// Establecer las relaciones entre modelos
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// 4. Exporta ambas instancias de conexión y los modelos
db.sequelize = sequelize; // Conexión principal
db.sequelize2 = sequelize2; // Segunda conexión
db.Sequelize = Sequelize;
module.exports = db;