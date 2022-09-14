const express = require("express");
const router = express.Router();
const { authController } = require("../controllers/index");

router.post("/register",authController.register);
router.post("/login",authController.login);
router.post("/forgetPassword",authController.forgetPassword);
module.exports = router;
