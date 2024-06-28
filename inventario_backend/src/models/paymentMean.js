const {Model, DataTypes} = require('sequelize');
const connection = require('../database/connection');

class paymentMean extends Model{}

paymentMean.init({
    //Attributes
    paymentMeanId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    paymentMeanDescription: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    //Settings
    sequelize:connection,
    modelName:'paymentMean',
    paranoid: true,
    deleteAt:'destroyTime'
});

module.exports = paymentMean;