const mongoose = require('mongoose')
const TeamProjects = require('../models/teamProjects')

exports.getAllProjects = (req,res,next) => {
    TeamProjects.find({_teamid: req.params.teamid})
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(400).json({
            error:err
        })
    })
}
exports.createProjects = (req,res,next) => {
    const project = new TeamProjects({
        _id: new mongoose.Types.ObjectId(),
        _teamid: req.params.teamid || new mongoose.Types.ObjectId(),
        title: req.body.title,
        person: req.body.person,
        due: req.body.due,
        status: req.body.status,
        content: req.body.content
    }) 
    project.save()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(400).json({
            message:'Error Occured',
            error:err
        })
    })
}
exports.getSpecificProject = (req,res,next) => {
    TeamProjects.findById(req.params.projectid)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(400).json({
            error:err
        })
    })
}

exports.updateProject = (req,res,next) => {
    TeamProjects.findOneAndUpdate({_id:req.params.projectid},{$set:req.body})
    .then(() => {
        res.status(200).json({
            message: 'Project Updated'
        })
    })
    .catch(err => {
        res.status(400).json({
            error:err
        })
    })
}

exports.deleteProject = (req,res,next) => {
    TeamProjects.findOneAndDelete(req.params.projectid)
    .then(() => {
        res.status(200).json({
            message:'Project Deleted'
        })
    })
    .catch(err => {
        res.status(400).json({
            error:err
        })
    })
}
