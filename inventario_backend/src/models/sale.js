const {Model, DataTypes} = require('sequelize');
const connection = require('../database/connection');

class sale extends Model{}

sale.init({
    //Attributes
    saleId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    customerId:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    employeeId:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    SaleDate:{
        type : DataTypes.DATE,
        allowNull: false
    },
    saleDiscount:{
        type : DataTypes.DOUBLE,
        allowNull: false
    },
    saleIva:{
        type : DataTypes.DOUBLE,
        allowNull: false
    },
    paymentMeanId:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    saleStatusId:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
},{
    //Settings
    sequelize:connection,
    modelName:'sale',
    paranoid: true,
    deleteAt:'destroyTime'
});

module.exports = sale;