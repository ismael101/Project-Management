const express = require('express')
const personalController = require('../controllers/personalProjectController')
const auth = require('../middleware/auth') 
const router = express.Router()

router.get('/:userid',auth,personalController.getAllProjects)
router.post('/:projectid',auth,personalController.createProjects)
router.patch('/:projectid',auth,personalController.updateProject)
router.delete('/:projectid',auth,personalController.deleteProject)

module.exports = router