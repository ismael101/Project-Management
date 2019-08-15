const mongoose = require('mongoose')
const teamProjects = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    _teamid:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    person:{
        type:String,
        required:true
    },
    due:{
        type:Date,
        default: Date.now()
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

let TeamProjects = mongoose.model('TeamProjects',teamProjects)

module.exports = TeamProjects