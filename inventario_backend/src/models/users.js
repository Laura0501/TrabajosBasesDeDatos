const {Model, DataTypes} = require('sequelize');
const connection = require('../database/connection');

class users extends Model{}

users.init({
    //Attributes
    userId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    rolId:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    identificationTypeId:{
        type:DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },
    userIdentificationNumber:{
        type:DataTypes.STRING,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userBornDate:{
        type : DataTypes.DATE,
        allowNull: false
    },
    userPhone:{
        type : DataTypes.STRING,
        allowNull: false
    },
    userAddres:{
        type : DataTypes.STRING,
        allowNull: false
    },
    userEmail:{
        type : DataTypes.STRING,
        allowNull: false
    },
},{
    //Settings
    sequelize:connection,
    modelName:'users',
    paranoid: true,
    deleteAt:'destroyTime'
});

module.exports = users;