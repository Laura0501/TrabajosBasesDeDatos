require('express');
const branch = require('../models/branch');
const city = require('../models/city');


//Create branch
async function createBranch(req, res){

    try{
        await branch.create({
            branchName: req.body.branchName,
            branchAddress: req.body.branchAddress,
            branchPhone: req.body.branchPhone,
            cityId: req.body.cityId
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


async function listBranch(req, res){
    try{
        await branch.findAll({
            attributes: [
                'branchId',
                'branchName',
                'branchAddress',
                'branchPhone',
                'cityId',
            ],
            order:['branchName'],
            include:{
                model:city,
                attributes: ['cityName']
            }
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
async function updateBranch(req, res){
    try{
        await branch.update({
            branchName: req.body.branchName,
            branchAddress: req.body.branchAddress,
            branchPhone: req.body.branchPhone,
            cityId: req.body.cityId
        },{
            where: {branchId: req.params.branchId}
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
async function disableBranch(req, res){
    try{
        await branch.destroy({
            where: {branchId: req.params.branchId}
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
async function enableBranch(req, res){
    try{
        await branch.restore({
            where: {branchId: req.params.branchId}
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

//Consulta Funcional
async function listBranchByCities(req, res){
    try{
        await branch.count({
            attributes: [
                'cityId',
              ],
              group: ['cityId'],
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

module.exports={
    createBranch,
    listBranch,
    updateBranch,
    disableBranch,
    enableBranch,
    listBranchByCities
}