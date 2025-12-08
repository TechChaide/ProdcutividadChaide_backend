const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Log_ordenes = sequelize.define(
    "Log_ordenes",
    {
      codigo_log: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      orden_log: {
        type: DataTypes.STRING,
      },

      codigo_empleado: {
        type: DataTypes.STRING,
      },

      codigo_equipo: {
        type: DataTypes.STRING,
      },

      fecha_log: {
        type: DataTypes.DATE,
      },

      cantidad_entregada: {
        type: DataTypes.DECIMAL(8,2),
      },

      cantidad_rechazada: {
        type: DataTypes.DECIMAL(8,2),
      },

      cantidad_reproceso: {
        type: DataTypes.DECIMAL(8,2),
      },

      orden_reproceso: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "log_ordenes",
      schema: process.env.DB_SCHEMA,
      timestamps: false,
    }
  );

  // Setup relationships (only belongsTo)
  Log_ordenes.associate = (models) => {};

  return Log_ordenes;
};
