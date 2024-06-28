const {Model, DataTypes} = require('sequelize');
const connection = require('../database/connection');

class saleStatus extends Model{}

saleStatus.init({
    //Attributes
    saleStatusId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    saleStatusDescription: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    //Settings
    sequelize:connection,
    modelName:'saleStatus',
    paranoid: true,
    deleteAt:'destroyTime'
});

module.exports = saleStatus;