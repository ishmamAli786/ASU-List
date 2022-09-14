const { productService } = require("../services");
const httpStatus = require("http-status");
const catchAsyncError = require("./../utils/catchAsyncError");

const create = async (req, res, next) => {
  try {
    let productPicture = [];
    if (req.files.length > 0) {
      productPicture = req.files.map((file) => {
        return { img: file.filename };
      });
    }
    let product = req.body;
    product.productPicture = productPicture;
    const productResult = await productService.createProduct(product);
    res.send(productResult);
  } catch (err) {
    next(err);
  }
};

const getProductByCategory = catchAsyncError(async (req, res, next) => {
  const filterProduct = await productService.getProductByCategoryId(
    req.params.id
  );
  res.send(filterProduct);
});

const getAllProduct = catchAsyncError(async (req, res, next) => {
  const product = await productService.getAllProduct(req.query);
  res.send(product);
});

const getProductById = catchAsyncError(async (req, res, next) => {
  const productById = await productService.getProductById(req.params.id);
  res.send(productById);
});

module.exports = {
  create,
  getProductByCategory,
  getAllProduct,
  getProductById,
};
