// // const { Sequelize } = require('sequelize');
// // require('dotenv').config();

// // const sequelize = new Sequelize(
// //   process.env.DB_NAME || 'postgres',
// //   process.env.DB_USER || 'postgres',
// //   process.env.DB_PASSWORD || 'postgres',
// //   {
// //     dialect: 'postgres',
// //     host: process.env.DB_HOST || 'localhost',
// //     port: process.env.DB_PORT || 5432,
// //     logging: false,
// //     define: {
// //       freezeTableName: true,
// //       timestamps: false
// //     },
// //     pool: {
// //       max: 5,
// //       min: 0,
// //       acquire: 30000,
// //       idle: 10000
// //     },
// //     dialectModule: require('pg').native
// //   }
// // );

// // module.exports = sequelize;

// var sql = require("mssql");
// var _require = require("tedious"),
//   connect = _require.connect;
// var _require2 = require("sequelize"),
//   Sequelize = _require2.Sequelize;
// require("dotenv").config(); // Asegúrate de tener instalado el paquete dotenv

// var sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   dialect: "mssql",
//   dialectOptions: {
//     options: {
//       encrypt: false,
//       // Cambiar a true si usas Azure SQL
//       //trustedConnection: false, // Cambia a false si no usas autenticación de Windows
//       enableArithAbort: true,
//       // Recomendado para evitar problemas de conexión
//       trustServerCertificate: true // Necesario para desarrollo local
//     }
//   },
//   logging: false,
//   // Para ver las consultas SQL (opcional)
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
//   define: {
//     freezeTableName: true,
//     // Evita que Sequelize pluralice los nombres de las tablas
//     timestamps: false // No añade automáticamente las columnas createdAt y updatedAt
//   }
// });
// module.exports = sequelize;

const { Sequelize } = require("sequelize");
require("dotenv").config();

// --- Conexión a la Base de Datos 1 (MSSQL) ---
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mssql",
    dialectOptions: {
      options: {
        encrypt: false,
        enableArithAbort: true,
        trustServerCertificate: true,
        requestTimeout: 70000 
      },
    },
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  }
);

// --- Conexión a la Base de Datos 2 (usando DB_NAME2) ---
const sequelize2 = new Sequelize(
  process.env.DB_NAME2,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mssql",
    dialectOptions: {
      options: {
        encrypt: false,
        enableArithAbort: true,
        trustServerCertificate: true,
        requestTimeout: 70000 
      },
    },
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  }
);

// Exportamos ambas conexiones en un solo objeto
module.exports = {
  sequelize,
  sequelize2,
};
