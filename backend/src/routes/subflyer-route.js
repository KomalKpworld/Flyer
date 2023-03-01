const express = require("express");
const subflyerController= require('../controller/subflyer-controller')
const subflyerRouter = express.Router();

subflyerRouter.post("/create-subflyer", subflyerController.createSubFlyer);
subflyerRouter.put("/update-subflyer/:id", subflyerController.updateSubFlyer);
subflyerRouter.get("/get-subflyer-list", subflyerController.getSubFlyerList);
subflyerRouter.get("/get-subflyer/:id", subflyerController.getSubFlyerById);
subflyerRouter.get("/get-subflyer/flyer/:flyerId", subflyerController.getSubFlyerByFlyer);

subflyerRouter.delete("/delete-subflyer/:id", subflyerController.deleteSubFlyer);
module.exports = subflyerRouter
