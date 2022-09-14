const express = require('express')
const app = express()
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('./config/config')



mongoose.connect(config.url)
.then(()=>{
    console.log('database connected successfully')
})

const corsOption={
    credentials:true,
    origin:[config.origin]
}

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended   : true }));
app.use(express.static('public'));
app.use(routes);
/// Middleware for Errors
app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500
    const errorMessage = err.message || "SomeThing Went Wrong"
    return res.status(errorStatus).json({success:false,status:errorStatus,message:errorMessage,stack:err.stack})
})
  



module.exports = app;