const {Model, DataTypes} = require('sequelize');
const connection = require('../database/connection');

class identificationType extends Model{}

identificationType.init({
    //Attributes
    identificationTypeId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    identificationTypeName: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    //Settings
    sequelize:connection,
    modelName:'identificationType',
    paranoid: true,
    deleteAt:'destroyTime'
});

module.exports = identificationType;