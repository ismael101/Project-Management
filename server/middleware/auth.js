const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = (req,res,next) => {
    try{
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, config.encrypt_config.key)
        req.userData = decoded
        next()
    }catch(err){
        return res.status(401).json({
            message:'Token Auth Failed',
            error:err
        })
    }
}