const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Ingresos = sequelize.define('Ingresos', {
        
        codigo_ingreso: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        
        bodega_origen: {
            type: DataTypes.STRING
        },
        
        bodega_destino: {
            type: DataTypes.STRING
        },
        
        qr_bmp: {
            type: DataTypes.STRING
        },
        
        codigo_material: {
            type: DataTypes.STRING
        },
        
        cantidad: {
            type: DataTypes.STRING
        },
        
        unidades: {
            type: DataTypes.STRING
        },
        
        fecha_ingreso: {
            type: DataTypes.STRING
        },
        
        usuario_ingreso: {
            type: DataTypes.STRING
        },
        
        estado: {
            type: DataTypes.STRING
        },
        
        fecha_modificacion: {
            type: DataTypes.STRING
        },
        
        usuario_modificacion: {
            type: DataTypes.STRING
        }
        
    }, {
        tableName: 'ingresos',
        schema: 'dbo',
        timestamps: false,
        // SQL Server specific options
        dialectOptions: {
            options: {
                requestTimeout: 30000,
                encrypt: false,
                trustServerCertificate: true
            }
        }
    });

    // Setup relationships (only belongsTo)
    Ingresos.associate = (models) => {
        
    };

    return Ingresos;
};