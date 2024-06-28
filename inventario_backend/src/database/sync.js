//connection
const connection =require('./connection');

//models
const department = require('../models/department');
const city = require('../models/city');
const rol= require('../models/rol');
const identificationType= require('../models/identificationType');
const users= require('../models/users');
const paymentMean= require('../models/paymentMean');
const saleStatus= require('../models/saleStatus');
const sale= require('../models/sale');
const branch= require('../models/branch');
const supplier= require('../models/supplier');
const categoryProduct= require('../models/categoryProduct');
const product= require('../models/product');
const productSale = require('../models/productSale');

//JsonFiles
const departmentjson = require('./jsonfiles/departmentjson');
const cityjson = require('./jsonfiles/cityjson');

async function sync(){
    //Foreing Keys
    
    //Department-city
    department.hasMany(city,{
        foreignKey:'departmentId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    city.belongsTo(department,{
        foreignKey:'departmentId'
    });

    //Rol-Users
    rol.hasMany(users,{
        foreignKey:'rolId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    users.belongsTo(rol,{
        foreignKey:'rolId'
    });

    //IdentificationType-Users
    identificationType.hasMany(users,{
        foreignKey:'identificationTypeId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    users.belongsTo(identificationType,{
        foreignKey:'identificationTypeId'
    });

    //paymentMean-Sale
    paymentMean.hasMany(sale,{
        foreignKey:'paymentMeanId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    sale.belongsTo(paymentMean,{
        foreignKey:'paymentMeanId'
    });

    //saleStatus-Sale
    saleStatus.hasMany(sale,{
        foreignKey:'saleStatusId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    sale.belongsTo(saleStatus,{
        foreignKey:'saleStatusId'
    });

    //City-branch
    city.hasMany(branch,{
        foreignKey:'cityId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    branch.belongsTo(city,{
        foreignKey:'cityId'
    });

    //supplier-product
    supplier.hasMany(product,{
        foreignKey:'supplierId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    product.belongsTo(supplier,{
        foreignKey:'supplierId'
    });

    //categoryProduct-product
    categoryProduct.hasMany(product,{
        foreignKey:'categoryProductId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    product.belongsTo(categoryProduct,{
        foreignKey:'categoryProductId'
    });

    //Product-productSale
    product.hasMany(productSale,{
        foreignKey:'productId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    productSale.belongsTo(product,{
        foreignKey:'productId'
    });

    //Sale-productSale
    sale.hasMany(productSale,{
        foreignKey:'saleId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    productSale.belongsTo(sale,{
        foreignKey:'saleId'
    });

    //Generate connection
    await connection.sync({force:false});
    await connection.authenticate().then(()=> {
        console.log('Synchronized DataBase')
    }).catch((error)=>{
        console.log('Error syncing DataBase' + error)
    });
    //upload json files
    departmentjson.createDepartments();
    cityjson.createCities();
}

sync();