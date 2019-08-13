const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Users = require('../models/users')
const config = require('../config')

exports.user_signup = (req,res,next) => {
    Users.find({email: req.body.email},{username:req.body.username})
    .then(user => {
        if(user){
            res.status(500).json({
                message:'User Already Exists'
            })
        }
        else{
            bcrypt.hash(req.body.password,config.encrypt_config.rounds, (err, hash) => {
                if(err){
                    return res.status(500).json({
                        error:err
                    })
                }else{
                    const user = new Users({
                        _id: new mongoose.Types.ObjectId(),
                        _teamid: req.body.teamid || new mongoose.Types.ObjectId(),
                        email:req.body.email,
                        username:req.body.username,
                        password:hash,
                        profilepic:req.file.path
                    });
                    
                    user.save()
                        .then(res => {
                            res.status(201).json({
                                message:'User Created'
                            })
                        })
                        .catch(err => {
                            res.status(500).json({
                                error:err
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
       bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if(err){
                return res.status(401).json({
                    message:'Auth Failed'
                })
            }
            if(result){
                const token = jwt.sign({
                    id: user[0]._id,
                    username:user[0].username,
                    email:user[0].email
                },
                 config.encrypt_config.key,
                 {
                     expiresIn: '240'
                 }   
                )
                res.status(200).json({
                    message:'Auth Successful',
                    token:token
                })
            }
            res.status(401).json({
                message:'Auth Failed'
            })
       })
    })
    .catch(err => {
        res.status(500).json({
            error:err
        })
    })
}