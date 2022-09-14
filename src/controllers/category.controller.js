const {categoryService} = require("../services");
const httpStatus  = require('http-status')
const catchAsyncError = require('./../utils/catchAsyncError');

const create = async (req, res,next) => {
    try{
        let image
        if(req.file){
            image = req.file.filename
        }
        let createCategory = req.body;
        createCategory.image = image
        const category = await categoryService.createCategory(createCategory);
        res.send(category) 
    }
    catch(err){
        next(err)
    }
};


const getCategory = catchAsyncError(async(req,res)=>{
    const allCategory = await categoryService.getAllCategory()
    res.send(allCategory)
})


module.exports = {
    create,
    getCategory
};