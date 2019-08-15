const express = require('express')
const personalController = require('../controllers/personalProjectController')
const auth = require('../middleware/auth') 
const router = express.Router()

router.get('/:userid',auth,personalController.get_all_projects)
router.get('/:projectid',auth,personalController.get_specific_project)
router.post('/:projectid',auth,personalController.create_projects)
router.patch('/:projectid',auth,personalController.update_project)
router.delete('/:projectid',auth,personalController.delete_project)

module.exports = router