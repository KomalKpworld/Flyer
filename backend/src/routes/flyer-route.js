const express = require("express");
const flyerController= require('../controller/flyer-controller')
const flyerRouter = express.Router();

flyerRouter.post("/create-flyer", flyerController.createFlyer);
flyerRouter.put("/update-flyer/:id", flyerController.updateFlyer);
flyerRouter.get("/get-flyer/:id", flyerController.getFlyer);
flyerRouter.get("/get-flyer-list", flyerController.getFlyerList);
flyerRouter.delete("/delete-flyer/:id", flyerController.deleteFlyer);

module.exports = flyerRouter;
