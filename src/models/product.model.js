const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true
    },
    price: {
      type: Number,
    },
    desc: {
      type: String,
      // required:[true, "Please Enter Product Desc"],
      trim:true,
    },
    subDesc: {
      type: String,
      // required:[true, "Please Enter Product Sub Desc"],
      trim:true,
    },
    offer:{
      type:Number
    },
    quantity:{
      type:Number
    },
    productPicture:[
      {
        _id: false,
        img:{
          type:String
        }
      }
    ],
    category:{
      type:String,
      // required:[true, "Please Enter Product Category"]
    },
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
  },
  {
    timestamps: true,
  }
);


const Product = mongoose.model("Product", productSchema);

module.exports = Product;
