const {Model, DataTypes} =require('sequelize');
 const connection = require('../database/connection');

 class supplier extends Model{ }

 supplier.init({
    supplierId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    supplierNit:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    supplierName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    supplierAddress:{
        type: DataTypes.STRING,
        allowNull: false
    },
    supplierPhone:{
        type: DataTypes.STRING,
        allowNull: false
    },
    supplierEmail:{
        type : DataTypes.STRING,
        allowNull: false
    }
 },{//Settings
    sequelize:connection,
    modelName:'supplier',
    paranoid: true,
    deleteAt:'destroyTime'
 });

 module.exports = supplier;