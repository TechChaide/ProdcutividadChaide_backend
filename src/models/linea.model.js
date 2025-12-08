const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Linea = sequelize.define(
    "Linea",
    {
      codigo_linea: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      nombre_linea: {
        type: DataTypes.STRING,
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
    },
    {
      tableName: "linea",
      schema: process.env.DB_SCHEMA,
      timestamps: false,
    }
  );

  // Setup relationships
  Linea.associate = (models) => {
    Linea.hasMany(models.Linea_Departamento, {
      foreignKey: "codigo_linea",
      as: "linea_departamentos",
      sourceKey: "codigo_linea",
    });

    Linea.hasMany(models.Estacion, {
      foreignKey: "codigo_linea",
      as: "estaciones",
      sourceKey: "codigo_linea",
    });
  };

  return Linea;
};
