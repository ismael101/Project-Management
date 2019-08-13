const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const config = require('./config')
const upload = require('./uploads')
const app = express()

mongoose.connect(config.database_config.host,{useNewUrlParser:true, useCreateIndex:true})
        .then(res => {
            console.log('Connected to Mlab')
        })
        .catch(err => {
            console.log('Error Connecting', err)
        })

express.static(upload)

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


//apis


app.use(function(req,res,next){
	res.status(404).send("Not Found")
})

app.use(function(err,req,res,next){
	console.error(err.stack)
	res.status(500).send("Server Error")
})


app.listen(config.server_config.port,() => {
    console.log(`Server running on port ${config.server_config.port}`)
})
