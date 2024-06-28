require('express');
const product = require('../models/product');
//Create branch
async function createProduct(req, res){

    try{
        await product.create({
            productName: req.body.productName,
            productDescription: req.body.productDescription,
            productValue: req.body.productValue,
            productQuantity: req.body.productQuantity,
            branchId: req.body.branchId,
            supplierId: req.body.supplierId,
            categoryProductId: req.body.categoryProductId

        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){
        console.log(e);
    }

}


async function listProduct(req, res){
    try{
        await product.findAll({
            attributes: [
                'productId',
                'productName',
                'productDescription',
                'productValue',
                'productQuantity',
                'branchId',
                'supplierId',
                'categoryProductId'
            ],
            order:['productName']

        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}


//ACTUALIZAR
//ELIMINAR
async function updateProduct(req, res){
    try{
        await product.update({
            productName: req.body.productName,
            productDescription: req.body.productDescription,
            productValue: req.body.productValue,
            productQuantity: req.body.productQuantity,
            branchId: req.body.branchId,
            supplierId: req.body.supplierId,
            categoryProductId: req.body.categoryProductId
        },{
            where: {productId: req.params.productId}
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

//Disable restaurant
async function disableProduct(req, res){
    try{
        await product.destroy({
            where: {productId: req.params.productId}
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
async function enableProduct(req, res){
    try{
        await product.restore({
            where: {productId: req.params.productId}
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

module.exports={
    createProduct,
    listProduct,
    updateProduct,
    disableProduct,
    enableProduct
}