const mongoose = require('mongoose')
const PersonalProjects = require('../models/personalProjects')

exports.getAllProjects = (req,res,next) => {
    PersonalProjects.find()
    .then(projects => {
        res.status(201).json(projects)
    })
    .catch(err => {
        res.status(400).json({
            error:err
        })
    })
}
exports.createProjects = (req,res,next) => {
    const project = new PersonalProjects({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        due: req.body.due,
        status: req.body.status,
        content: req.body.content
    }) 
    project.save()
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(400).json({
            message:'Error Occured',
            error:err
        })
    })
}
exports.getSpecificProject = (req,res,next) => {
    PersonalProjects.findById(req.params.id)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(400).json({
            error:err
        })
    })
}

exports.updateProject = (req,res,next) => {
    PersonalProjects.findOneAndUpdate({_id:req.params.projectid},{$set:req.body})
    .then(() => {
        res.status(201).json({
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
    PersonalProjects.findOneAndDelete(req.params.id)
    .then(() => {
        res.status(201).json({
            message:'Project Deleted'
        })
    })
    .catch(err => {
        res.status(400).json({
            error:err
        })
    })
}