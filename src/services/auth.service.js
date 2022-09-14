const { User} = require("../models");
const httpStatus = require('http-status')
const createError = require("../utils/error");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')


const createUser = async (userBody) => {
    if(!userBody.email){
        return createError(400,"email is required")
    }
    const checkuserPhone =  await User.findOne({userPhone:userBody.userPhone})
    if (checkuserPhone) {
      return createError(400,"Email already Exist")
    }
    const createUser = await User.create(userBody)
    if(!createUser){
      return createError(400,"User Creation Failed")
    }
    return 'ok'
  };

  const login = async (userBody) => {
    const user = await User.find( {$and: [{ userLocation:userBody.userLocation },{ userPhone: { $eq: userBody.userPhone} }]})
    if(!user.length>0){
      return createError(400,"Credentials Invalid")
    }
    const {_id} = user
    const token =jwt.sign({_id}, process.env.JWT_SECRET, { expiresIn: "1d"});
    return {message:"Login Successfully",status:200,user,token}
  };


  const forgetPassword = async (body) => {
    const emailExist = await User.findOne({email:body.email})
    if(emailExist == null){
      return createError(400,"Credentials Invalid No User Exist")
    }
    // const checkPassword = await emailExist.comparePassword(body.password)
    // if(!checkPassword){
    //   return createError(400,"Credentials Invalid No User Exist password")
    // }
    const hashPassword = await bcrypt.hash(body.password, 8);
    const updateUser = User.findOneAndUpdate({email:body.email}, { $set: {password:hashPassword }},{new:true})
    if(!updateUser){
      return createError(400,"Something Went Wrong")
    }
    return "Updated Successfully"
  };


  module.exports = {
    createUser,
    forgetPassword,
    login
  };