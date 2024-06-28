const {Model, DataTypes} = require('sequelize');
const connection = require('../database/connection');

class branch extends Model{}

branch.init({
    //Attributes
    branchId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    branchName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    branchAddress:{
        type: DataTypes.STRING,
        allowNull: false
    },
    branchPhone:{
        type: DataTypes.STRING,
        allowNull: false
    },
    cityId:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    //Settings
    sequelize:connection,
    modelName:'branch',
    paranoid: true,
    deleteAt:'destroyTime'
});

module.exports = branch;