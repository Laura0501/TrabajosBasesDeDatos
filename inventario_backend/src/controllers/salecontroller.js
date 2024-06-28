require('express');
const sale = require('../models/sale');
const paymentMean= require('../models/paymentMean');
 
//Create sale
async function createSale(req, res){
    try{
        await sale.create({
            customerId: req.body.customerId,
            employeeId: req.body.employeeId,
            SaleDate: req.body.SaleDate,
            saleDiscount: req.body.saleDiscount,
            saleIva: req.body.saleIva,
            paymentMeanId: req.body.paymentMeanId,
            saleStatusId: req.body.saleStatusId,
        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

//List sales
async function ListSale(req, res){
    try{
        await sale.findAll({
            attributes: [
                'saleId',
                'customerId',
                'employeeId',
                'SaleDate',
                'saleDiscount',
                'saleIva',
                'paymentMeanId',
                'saleStatusId'
            ],
            include:[{
                model: paymentMean,
                attributes:['paymentMeanDescription']
            }]
        }).then(function (data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }catch(e){
        console.log(e);
    }
}


//Update Sale
async function updateSale(req, res){
    try{
        await sale.update({
            customerId: req.body.customerId,
            employeeId: req.body.employeeId,
            SaleDate: req.body.SaleDate,
            saleDiscount: req.body.saleDiscount,
            saleIva: req.body.saleIva,
            paymentMeanId: req.body.paymentMeanId,
            saleStatusId: req.body.saleStatusId,
        },{
            where: {saleId: req.params.saleId}
        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

//Disable Sale
async function disableSale(req, res){
    try{
        await sale.destroy({
            where: {saleId: req.params.saleId}
        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

//Enable branch
async function enableSale(req, res){
    try{
        await sale.restore({
            where: {saleId: req.params.saleId}
        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}
 
module.exports = {
    ListSale,
    createSale,
    updateSale,
    disableSale,
    enableSale
}