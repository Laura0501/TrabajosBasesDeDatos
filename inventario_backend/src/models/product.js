const {Model, DataTypes} = require('sequelize');
const connection = require('../database/connection');

class product extends Model{}

product.init({
    //Attributes
    productId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productDescription:{
        type : DataTypes.STRING,
        allowNull: false
    },
    productValue:{
        type : DataTypes.DOUBLE,
        allowNull: false
    },
    productQuantity:{
        type : DataTypes.INTEGER,
        allowNull: false
    },
    branchId:{
        type : DataTypes.INTEGER,
        allowNull: false
    },
    supplierId:{
        type : DataTypes.INTEGER,
        allowNull: false
    },
    categoryProductId:{
        type : DataTypes.INTEGER,
        allowNull: false
    }
},{
    //Settings
    sequelize:connection,
    modelName:'product',
    paranoid: true,
    deleteAt:'destroyTime'
});

module.exports = product;