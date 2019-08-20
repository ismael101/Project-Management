const teamController = require('../controllers/teamProjectController')
const express = require('express')
const auth = require('../middleware/auth')
const router = express.Router()

router.get('/:teamid',auth,teamController.getAllProjects)
router.post('/:teamid',auth,teamController.createProjects)
router.patch('/:projectid',auth,teamController.updateProject)
router.delete('/:projectid',auth,teamController.deleteProject)

module.exports = router