const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Log_reimpresiones = sequelize.define('Log_reimpresiones', {
        
        codigo_log: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        
        orden: {
            type: DataTypes.STRING
        },
        
        paquete: {
            type: DataTypes.INTEGER
        },
        
        fecha: {
            type: DataTypes.DATE
        },
        
        parametros: {
            type: DataTypes.TEXT
        },
        
        estado: {
            type: DataTypes.STRING
        },
        
        usuario_reimpresion: {
            type: DataTypes.STRING
        }
        
    }, {
        tableName: 'log_reimpresiones',
        schema: process.env.DB_SCHEMA,
        timestamps: false
    });

    // Setup relationships (only belongsTo)
    Log_reimpresiones.associate = (models) => {
        
    };

    return Log_reimpresiones;
};