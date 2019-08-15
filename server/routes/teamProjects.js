const teamController = require('../controllers/teamProjectController')
const express = require('express')
const auth = require('../middleware/auth')
const router = express.Router()

router.get('/:teamid',auth,teamController.get_all_projects)
router.get('/:projectid',auth,teamController.get_specific_project)
router.post('/:projectid',auth,teamController.create_projects)
router.patch('/:projectid',auth,teamController.update_project)
router.delete('/:projectid',auth,teamController.delete_project)

module.exports = router