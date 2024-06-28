require('express');
const users = require('../models/users');
const rol=require ('../models/rol');
 
//Create user
async function createUser(req, res){
    try{
        await users.create({
            rolId: req.body.rolId,
            identificationTypeId: req.body.identificationTypeId,
            userIdentificationNumber: req.body.userIdentificationNumber,
            userName: req.body.userName,
            userBornDate: req.body.userBornDate,
            userPhone: req.body.userPhone,
            userAddres: req.body.userAddres,
            userEmail: req.body.userEmail
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

//List users
async function listUsers(req, res){
    try{
        await users.findAll({
            attributes: [
                'userId',
                'rolId',
                'identificationTypeId',
                'userIdentificationNumber',
                'userName',
                'userBornDate',
                'userPhone',
                'userAddres',
                'userEmail'
            ],
            order: ['rolId'],
            include:[{
                model: rol,
                attributes:['rolName']
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


//Update Users
async function updateUser(req, res){
    try{
        await users.update({
            rolId: req.body.rolId,
            identificationTypeId: req.body.identificationTypeId,
            userIdentificationNumber: req.body.userIdentificationNumber,
            userName: req.body.userName,
            userBornDate: req.body.userBornDate,
            userPhone: req.body.userPhone,
            userAddres: req.body.userAddres,
            userEmail: req.body.userEmail
        },{
            where: {userId: req.params.userId}
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

//Disable User
async function disableUser(req, res){
    try{
        await users.destroy({
            where: {userId: req.params.userId}
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
async function enableUser(req, res){
    try{
        await users.restore({
            where: {userId: req.params.userId}
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
    listUsers,
    createUser,
    updateUser,
    disableUser,
    enableUser
}