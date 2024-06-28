const {Model, DataTypes} = require('sequelize');
const connection = require('../database/connection');

class rol extends Model{}

rol.init({
    //Attributes
    rolId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    rolName: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    //Settings
    sequelize:connection,
    modelName:'rol',
    paranoid: true,
    deleteAt:'destroyTime'
});

module.exports = rol;