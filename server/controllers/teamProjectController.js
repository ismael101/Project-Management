const mongoose = require('mongoose')
const TeamProjects = require('../models/teamProjects')

exports.get_all_projects = (req,res,next) => {
    TeamProjects.find()
    .then(projects => {
        res.status(200).json({
            projects:projects
        })
    })
    .catch(err => {
        res.status(400).json({
            error:err
        })
    })
}
exports.create_projects = (req,res,next) => {
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
        res.status(200).json({
            message:'Project Created',
            project: project
        })
    })
    .catch(err => {
        res.status(400).json({
            message:'Error Occured',
            error:err
        })
    })
}
exports.get_specific_project = (req,res,next) => {
    TeamProjects.findById(req.params.id)
    .then(project => {
        res.status(200).json({
            project:project
        })
    })
    .catch(err => {
        res.status(400).json({
            error:err
        })
    })
}

exports.update_project = (req,res,next) => {
    TeamProjects.findOneAndUpdate({_id:req.params.id},{$set:req.body})
    .then(project => {
        res.status(200).json({
            message:'Project Updated',
            project:project
        })
    })
    .catch(err => {
        res.status(400).json({
            error:err
        })
    })
}

exports.delete_project = (req,res,next) => {
    TeamProjects.findOneAndDelete(req.params.id)
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
