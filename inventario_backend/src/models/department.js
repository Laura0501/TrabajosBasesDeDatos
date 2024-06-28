const {Model, DataTypes} = require('sequelize');
const connection = require('../database/connection');

class department extends Model{}

department.init({
    //Attributes
    departmentId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:false,
        unique:true
    },
    departmentName: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    //Settings
    sequelize:connection,
    modelName:'department',
    paranoid: true,
    deleteAt:'destroyTime'
});

module.exports = department;