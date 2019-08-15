const mongoose = require('mongoose')
const personalProjects =  new mongoose.Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    due:{
        type:Date,
        default:Date.now()
    },
    status:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})

let PersonalProjects = mongoose.model('PersonalProjects', personalProjects)

module.exports = PersonalProjects



