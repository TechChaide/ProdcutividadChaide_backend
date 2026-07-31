"use strict";

var _require = require("sequelize"),
  DataTypes = _require.DataTypes;
module.exports = function (sequelize) {
  var Linea = sequelize.define("Linea", {
    codigo_linea: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nombre_linea: {
      type: DataTypes.STRING
    },
    estado: {
      type: DataTypes.STRING
    },
    usuario_modificacion: {
      type: DataTypes.STRING
    },
    fecha_modificacion: {
      type: DataTypes.STRING
    }
  }, {
    tableName: "linea",
    schema: process.env.DB_SCHEMA,
    timestamps: false
  });

  // Setup relationships
  Linea.associate = function (models) {
    Linea.hasMany(models.Linea_Departamento, {
      foreignKey: "codigo_linea",
      as: "linea_departamentos",
      sourceKey: "codigo_linea"
    });
    Linea.hasMany(models.Estacion, {
      foreignKey: "codigo_linea",
      as: "estaciones",
      sourceKey: "codigo_linea"
    });
  };
  return Linea;
};