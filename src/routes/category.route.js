const express = require("express");
const router = express.Router();
const { categoryController } = require("../controllers/index");
const upload = require("./../utils/fileUpload");

router
  .route("/")
  .post(upload.single("image"), categoryController.create)
  .get(categoryController.getCategory);

module.exports = router;
