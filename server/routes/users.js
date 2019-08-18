const express = require('express')
const userRoutes = require('../controllers/userController')
const router = express.Router()
const multer = require('multer')
const auth  = require('../middleware/auth')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });







router.post('/login', userRoutes.user_login)
router.post('/signup', upload.single('profilepic') ,userRoutes.user_signup)
router.get('/team/:teamid',auth,userRoutes.user_team)

module.exports = router