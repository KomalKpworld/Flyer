const express = require("express");
const uploadController = require('../controller/uploadimage')
const uploadRouter = express.Router();
uploadRouter.post('/upload-flyer-parent-image', uploadController.uploadParentImage)
uploadRouter.post('/upload-subflyer-image', uploadController.uploadSubflyerImage)
uploadRouter.post('/upload-background-image', uploadController.uploadBackgroundImage)
uploadRouter.post('/upload-font', uploadController.uploadFont)
uploadRouter.get('/get-files/:id', uploadController.getFiles)
uploadRouter.get('/get-files', uploadController.getFIleDetails)
uploadRouter.delete('/delete-files/:id', uploadController.deleteFiles)
module.exports = uploadRouter