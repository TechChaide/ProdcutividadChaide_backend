"use strict";

var _require = require("sequelize"),
  DataTypes = _require.DataTypes;
module.exports = function (sequelize) {
  var Orden_empleado_decimal = sequelize.define("Orden_empleado_decimal", {
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
      type: DataTypes.DECIMAL(8, 2),
      defaultValue: 0.0
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
    tableName: "ORDEN_EMPLEADO_DECIMAL",
    schema: process.env.DB_SCHEMA,
    timestamps: false
  });

  // Setup relationships (only belongsTo)
  Orden_empleado_decimal.associate = function (models) {};
  return Orden_empleado_decimal;
};