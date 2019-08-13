const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Users = require('../models/users')
const config = require('../config')
const multer = require('multer')
const upload = multer({dest:'uploads/'})

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