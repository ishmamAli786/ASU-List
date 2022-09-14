const express = require("express");
const authRoute = require('./auth.route')
const userRoute = require('./user.route')
const categoryRoute = require('./category.route')
const productRoute = require('./product.route')
const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/category",
    route: categoryRoute,
  },
  {
    path: "/product",
    route: productRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
