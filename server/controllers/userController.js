const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Users = require('../models/users')
const config = require('../config')

exports.user_signup = (req,res,next) => {
    Users.find({username:req.body.username})
    .then(user => {
        if(user.length > 0){
            res.status(500).json({
                message:'User Already Exists'
            })
        }
        else{
            bcrypt.hash(req.body.password,config.encrypt_config.rounds, (err, hash) => {
                if(err){
                    return res.status(500).json({
                        hash_error:err
                    })
                }else{
                    const user = new Users({
                        _id: new mongoose.Types.ObjectId(),
                        _teamid: req.body._teamid,
                        email:req.body.email,
                        username:req.body.username,
                        password:hash,
                        profilepic: 'localhost:3000/' + req.file.path
                    });
                    
                    user.save()
                        .then(result => {
                            res.status(201).json({
                                message:'User Created',
                                user:result
                            })
                        })
                        .catch(err => {
                            res.status(500).json({
                                save_error:err
                            })
                        })

                }
            })
            
        }
    })
    .catch(err => {
        res.status(404).json({
            error:err
        })
    })
}

exports.user_login = (req,res,next) => {
    Users.find({username: req.body.username})
    .then(user => {
        bcrypt.compare(req.body.password,user[0].password)
        .then(result => {
            if(result){
                const token = jwt.sign({id: user[0].id, teamid: user[0]._teamid,username:user[0].username,email:user[0].email},config.encrypt_config.key,{expiresIn:'3h'})
                res.status(200).json({
                    message:'Auth Succesfull',
                    token:token
                })
            }
            else{
                res.status(500).json({
                    message:'Auth Failed'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error:err
            })
        })
    })  
    .catch(err => {
        res.status(500).json({
            error:err
        })
    })
    
}

exports.user_team = (req,res,next) => {
    Users.find({_teamid:req.params.teamid},'username email profilepic')
        .then(team => {
            if(team.length >0){
                res.status(200).json(team)
            }
            else{
                res.status(400).json({
                    message:'Team Empty'
                })
            }
        })
        .catch(err => {
            res.status(400).json({
                error:err
            })
        })
}