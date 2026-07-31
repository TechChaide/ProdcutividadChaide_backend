"use strict";

var _require = require("sequelize"),
  DataTypes = _require.DataTypes;
module.exports = function (sequelize) {
  var Orden_empleado = sequelize.define("Orden_empleado", {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    NUM_ORDEN: {
      type: DataTypes.STRING
    },
    CODIGO_EMP: {
      type: DataTypes.STRING
    },
    UNIDADES_PROD: {
      type: DataTypes.INTEGER
    },
    FECHA: {
      type: DataTypes.STRING
    },
    HORA: {
      type: DataTypes.STRING
    },
    TURNO: {
      type: DataTypes.STRING
    },
    CENTRO: {
      type: DataTypes.STRING
    },
    CODIGO: {
      type: DataTypes.STRING
    },
    MAQUINA: {
      type: DataTypes.STRING
    }
  }, {
    tableName: "ORDEN_EMPLEADO",
    schema: process.env.DB_SCHEMA,
    timestamps: false
  });

  // Setup relationships (only belongsTo)
  Orden_empleado.associate = function (models) {};
  return Orden_empleado;
};