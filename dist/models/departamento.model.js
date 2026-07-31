"use strict";

var _require = require("sequelize"),
  DataTypes = _require.DataTypes;
module.exports = function (sequelize) {
  var Departamento = sequelize.define("Departamento", {
    codigo_departamento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nombre_departamento: {
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
    },
    see: {
      type: DataTypes.BOOLEAN
    }
  }, {
    tableName: "departamento",
    schema: process.env.DB_SCHEMA,
    timestamps: false
  });

  // Setup relationships
  Departamento.associate = function (models) {
    Departamento.hasMany(models.Linea_Departamento, {
      foreignKey: "codigo_departamento",
      as: "linea_departamentos",
      sourceKey: "codigo_departamento"
    });
  };
  return Departamento;
};