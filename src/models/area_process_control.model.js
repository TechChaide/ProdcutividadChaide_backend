const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Area_process_control = sequelize.define(
    "Area_process_control",
    {
      codigo_rcp: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      maquina: {
        type: DataTypes.STRING,
      },

      resp_ctrl_prod: {
        type: DataTypes.STRING,
      },
      direccion_ip: {
        type: DataTypes.STRING,
      },
      estado: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "area_process_control",
      schema: process.env.DB_SCHEMA,
      timestamps: false,
    }
  );

  // Setup relationships (only belongsTo)
  Area_process_control.associate = (models) => {};

  return Area_process_control;
};
