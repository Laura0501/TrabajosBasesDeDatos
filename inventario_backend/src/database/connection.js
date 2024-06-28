const {Sequelize}= require('sequelize');

 
var dataBase = 'inventariodb';
var userName = 'postgres';
var password = 'Laura0501';
 
const connection = new Sequelize(dataBase, userName, password, {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;
