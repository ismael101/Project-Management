const mongoose = require('mongoose')
const PersonalProjects = require('../models/personalProjects')

exports.get_all_projects = (req,res,next) => {
    PersonalProjects.find()
    .then(projects => {
        res.status(201).json({
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
    const project = new PersonalProjects({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        due: req.body.due,
        status: req.body.status,
        content: req.body.content
    }) 
    project.save()
    .then(project => {
        res.status(201).json({
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
    PersonalProjects.findById(req.params.id)
    .then(project => {
        res.status(201).json({
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
    PersonalProjects.findOneAndUpdate({_id:req.params.id},{$set:req.body})
    .then(project => {
        res.status(201).json({
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