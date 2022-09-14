const { authService } = require("../services");
const httpStatus  = require('http-status')

const register = async (req, res,next) => {
    try{
        let createUserBody = req.body;
        const user = await authService.createUser(createUserBody);
        if(user === 'ok'){
            res.json({status:200,message:"Created Successfully"})
        }else{
            res.send(user)
        } 
    }
    catch(err){
        next(err)
    }
};

const login = async (req, res,next) => {
    try{
        let createUserBody = req.body;
        const user = await authService.login(createUserBody);
        if(user === 'ok'){
            res.json({status:200,message:"Login Successfully"})
        }else{
            res.send(user)
        } 
    }
    catch(err){
        next(err)
    }
};


const forgetPassword = async (req, res,next) => {
    try{
        let body = req.body;
        const userUpdate = await authService.forgetPassword(body);
        res.send(userUpdate)
    }
    catch(err){
        next(err)
    }
};





module.exports = {
    register,
    forgetPassword,
    login
};
