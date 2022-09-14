const { Product } = require("../models");
const httpStatus = require("http-status");
const createError = require("./../utils/error");
const ApiFeatures = require("./../utils/apiFeature");
const config = require('./../config/config')

const createProduct = async (product) => {
  const result = await Product.create(product);
  if (!result) {
    return createError(400, "Operation failed to created product");
  }
  return result;
};

const getProductByCategoryId = async (categoryId) => {
  const productCount = await Product.find({ category: categoryId }).countDocuments();
  const product = await Product.find({ category: categoryId });
  if (!product.length > 0) {
    return createError(400, "No Product Found");
  }
  let changeImg = [];
  product.map((data) => {
    changeImg = data.productPicture.map((item) => {
      return { img:item.img };
    });
  });
  product.productPicture = changeImg;
  return {product,productCount}
};

const getAllProduct = async (queryData) => {
  const resultPerPage = 8;
  const productCount = await Product.countDocuments();
  const apiFeature = new ApiFeatures(Product.find(), queryData)
    .search()
    .filter()
    .pagination(resultPerPage);
  const product = await apiFeature.query;
  if (!product.length > 0) {
    return createError(400, "No Product Found");
  }
  let changeImg = [];
  product.map((data) => {
    changeImg = data.productPicture.map((item) => {
      return { img: item.img };
    });
  });
  product.productPicture = changeImg;
  return {product,productCount};
};

const getProductById = async (id) => {
  const product = await Product.findById({ _id: id });
  if (!product) {
    return createError(400, "No Product Found");
  }
  return product;
};

module.exports = {
  createProduct,
  getProductByCategoryId,
  getAllProduct,
  getProductById,
};
