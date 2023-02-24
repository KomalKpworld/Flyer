const express = require("express");
const flyerController= require('../controller/flyer-controller')
const flyerRouter = express.Router();

flyerRouter.post(
  "/create-flyer", flyerController.createFlyer
);
module.exports = flyerRouter;
