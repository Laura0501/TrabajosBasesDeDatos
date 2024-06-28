const {Model, DataTypes} = require('sequelize');
const connection = require('../database/connection');

class categoryProduct extends Model{}

categoryProduct.init({
    //Attributes
    categoryProductId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    categoryProductDescription: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    //Settings
    sequelize:connection,
    modelName:'categoryProduct',
    paranoid: true,
    deleteAt:'destroyTime'
});

module.exports = categoryProduct;