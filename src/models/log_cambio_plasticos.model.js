const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Log_cambio_plasticos = sequelize.define('Log_cambio_plasticos', {
        
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
        
        fecha_cambio: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('GETDATE()')
        },
        
        materiales_cambio: {
            type: DataTypes.TEXT
        },
        
        operador: {
            type: DataTypes.STRING
        },
        
        colaboradores: {
            type: DataTypes.STRING
        },
        
        estacion: {
            type: DataTypes.STRING
        },
        
        tiempo_empleado: {
            type: DataTypes.STRING
        },
        
        estado: {
            type: DataTypes.STRING
        }
        
    }, {
        tableName: 'log_cambio_plasticos',
        schema: 'dbo',
        timestamps: false,
        id: false
    });

    return Log_cambio_plasticos;
};