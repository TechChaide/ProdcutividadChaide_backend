const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Estacion = sequelize.define(
    "Estacion",
    {
      codigo_estacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      nombre_estacion: {
        type: DataTypes.STRING,
      },

      direccion_ip: {
        type: DataTypes.STRING,
      },

      notifica: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
      },

      estado: {
        type: DataTypes.STRING,
      },

      usuario_modificacion: {
        type: DataTypes.STRING,
      },

      fecha_modificacion: {
        type: DataTypes.STRING,
      },

      codigo_linea: {
        type: DataTypes.INTEGER,
      },

      ip_impresion: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "estacion",
      schema: process.env.DB_SCHEMA,
      timestamps: false,
    }
  );

  // Setup relationships (only belongsTo)
  Estacion.associate = (models) => {
    Estacion.belongsTo(models.Linea, {
      foreignKey: "codigo_linea",
      as: "linea",
      targetKey: "codigo_linea",
    });
  };

  return Estacion;
};
