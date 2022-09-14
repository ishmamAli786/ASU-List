const express = require("express");
// const auth = require("../middlewares/auth");
const validate = require("../middlewares/validate");
const userValidation = require("../validations/user.validation");
const {productController} = require("../controllers");
const upload = require("./../utils/fileUpload");
const router = express.Router();


router
  .route("/")
  .post(upload.array("productPicture"),productController.createProduct)
// router
//   .route("/login")
//   .post(validate(userValidation.login),userController.login)

module.exports = router;
