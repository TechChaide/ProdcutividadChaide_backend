const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Linea = sequelize.define(
    "Linea_Departamento",
    {
      codigo_linea_departamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      codigo_departamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      codigo_linea: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      tableName: "linea_departamento",
      schema: process.env.DB_SCHEMA,
      timestamps: false,
    }
  );

  // Setup relationships (only belongsTo)
  Linea.associate = (models) => {
    Linea.belongsTo(models.Departamento, {
      foreignKey: "codigo_departamento",
      as: "departamento",
      targetKey: "codigo_departamento",
    });

    Linea.belongsTo(models.Linea, {
      foreignKey: "codigo_linea",
      as: "linea",
      targetKey: "codigo_linea",
    });
  };

  return Linea;
};
