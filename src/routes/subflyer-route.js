const express = require("express");
const subflyerController= require('../controller/subflyer-controller')
const subflyerRouter = express.Router();

subflyerRouter.post("/create-subflyer", subflyerController.createSubFlyer);
subflyerRouter.put("/update-subflyer/:id", subflyerController.updateSubFlyer);
subflyerRouter.get("/get-subflyer/:id", subflyerController.getSubFlyer);
subflyerRouter.get("/get-subflyer", subflyerController.getSubFlyerList);
subflyerRouter.delete("/delete-subflyer/:id", subflyerController.deleteSubFlyer);
module.exports = subflyerRouter
