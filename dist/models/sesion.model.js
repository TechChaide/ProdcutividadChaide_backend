"use strict";

var _require = require("sequelize"),
  DataTypes = _require.DataTypes;
var _require2 = require("tedious/lib/data-types/null"),
  type = _require2.type;
module.exports = function (sequelize) {
  var Sesion = sequelize.define("Sesion", {
    codigo_sesion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    codigo_estacion: {
      type: DataTypes.INTEGER
    },
    codigo_rcp: {
      type: DataTypes.INTEGER
    },
    codigo_operador: {
      type: DataTypes.STRING
    },
    fecha_evento: {
      type: DataTypes.DATE
    },
    tipo_evento: {
      type: DataTypes.STRING
    },
    estado: {
      type: DataTypes.STRING
    }
  }, {
    tableName: "sesion",
    schema: process.env.DB_SCHEMA,
    timestamps: false
  });

  // Setup relationships (only belongsTo)
  Sesion.associate = function (models) {
    Sesion.belongsTo(models.Area_process_control, {
      foreignKey: "codigo_rcp",
      as: "area_process_control",
      targetKey: "codigo_rcp"
    });
    Sesion.belongsTo(models.Estacion, {
      foreignKey: "codigo_estacion",
      as: "estacion",
      targetKey: "codigo_estacion"
    });
  };
  return Sesion;
};