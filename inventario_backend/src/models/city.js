const {Model, DataTypes} = require('sequelize');
const connection = require('../database/connection');

class city extends Model{}

city.init({
    //Attributes
    cityId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:false,
        unique:true
    },
    cityName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    departmentId:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    //Settings
    sequelize:connection,
    modelName:'city',
    paranoid: true,
    deleteAt:'destroyTime'
});

module.exports = city;