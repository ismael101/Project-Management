const mongoose = require('mongoose')
const users = new mongoose.Schema({
    _id: {type:mongoose.Schema.Types.ObjectId, required:true},
    _teamid:{type:mongoose.Schema.Types.ObjectId, required:true},
    username:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    profilepic:{type:String}

})
const Users = mongoose.model('Users',users)

module.exports = Users
