const { Category} = require("../models");
const httpStatus = require('http-status')
const createError= require("../utils/error");


const createCategory = async (category) => {
  const categoryExist =await Category.find({name:category.name})
  if(categoryExist.length>0){
    return createError(400,"Category Already Exist")
  }
  const result=  await Category.create(category)
  if(!result){
    return createError(400,"Ooops Someting went wrong")
  }
  return result
  };



  const getAllCategory =async ()=>{
    const allCategory = await Category.find()
    if(!allCategory){
      return next(createError(404,"No Category Available"));
    }
    for (let i = 0; i < allCategory.length; i++) {
      allCategory[i].image = allCategory[i].image;
    }

    return allCategory 
  }



  module.exports = {
    createCategory,
    getAllCategory
  };