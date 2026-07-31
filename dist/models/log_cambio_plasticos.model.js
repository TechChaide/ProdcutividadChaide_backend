"use strict";

var _require = require('sequelize'),
  DataTypes = _require.DataTypes;
module.exports = function (sequelize) {
  var Log_cambio_plasticos = sequelize.define('Log_cambio_plasticos', {
    codigo_log_cp: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    identificacion_producto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo_cambio: {
      type: DataTypes.STRING
    },
    nombre_producto: {
      type: DataTypes.STRING
    },
    material_fert: {
      type: DataTypes.STRING
    },
    fecha_cambio: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('GETDATE()')
    },
    material_cambio: {
      type: DataTypes.TEXT
    },
    material_cambio_nombre: {
      type: DataTypes.TEXT
    },
    material_cambio_unidad: {
      type: DataTypes.TEXT
    },
    material_cambio_cantidad: {
      type: DataTypes.DECIMAL(18, 2)
    },
    operador: {
      type: DataTypes.STRING
    },
    colaboradores: {
      type: DataTypes.STRING
    },
    solicitante: {
      type: DataTypes.STRING
    },
    estacion: {
      type: DataTypes.STRING
    },
    tiempo_empleado: {
      type: DataTypes.FLOAT
    },
    estado: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'log_cambio_plasticos2',
    schema: 'dbo',
    timestamps: false,
    id: false
  });
  return Log_cambio_plasticos;
};