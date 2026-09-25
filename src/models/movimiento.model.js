const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Movimiento = sequelize.define('Movimiento', {
        
        codigo_movimiento: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        
        tipo_movimiento: {
            type: DataTypes.STRING
        },
        
        cantidad_movimiento: {
            type: DataTypes.STRING
        },

        /** Estimación inicial ingresada por el usuario. */
        cantidad_estimada: {
            type: DataTypes.DECIMAL(18, 4)
        },

        /** Desperdicio del corte ingresado por el usuario. */
        cantidad_desperdicio: {
            type: DataTypes.DECIMAL(18, 4)
        },
        
        fecha_movimiento: {
            type: DataTypes.STRING
        },
        
        usuario_movimiento: {
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
        },
        
        codigo_ingreso: {
            type: DataTypes.INTEGER
        }
        
    }, {
        tableName: 'movimiento',
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
    Movimiento.associate = (models) => {
        Movimiento.belongsTo(models.Ingresos, {
        foreignKey: 'codigo_ingreso',
        as: 'ingresos',
        targetKey: 'codigo_ingreso'
    });
    };

    return Movimiento;
};
