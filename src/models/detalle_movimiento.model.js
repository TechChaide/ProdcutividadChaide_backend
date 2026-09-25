const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Detalle_movimiento = sequelize.define('Detalle_movimiento', {
        
        codigo_detalle_movimiento: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        
        codigo_movimiento: {
            type: DataTypes.INTEGER
        },
        
        orden: {
            type: DataTypes.STRING(50)
        },
        
        /** Consumo real del material asignado a la orden. */
        cantidad_utilizada: {
            type: DataTypes.DECIMAL(18, 4)
        },
        
        estado: {
            type: DataTypes.STRING(1)
        },
        
        fecha_modificacion: {
            type: DataTypes.DATE
        },
        
        usuario_modificacion: {
            type: DataTypes.STRING(50)
        }
        
    }, {
        tableName: 'detalle_movimiento',
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
    Detalle_movimiento.associate = (models) => {
        Detalle_movimiento.belongsTo(models.Movimiento, {
        foreignKey: 'codigo_movimiento',
        as: 'movimiento',
        targetKey: 'codigo_movimiento'
    });
    };

    return Detalle_movimiento;
};
