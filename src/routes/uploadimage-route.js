const express = require("express");
const uploadController = require('../controller/uploadimage')
const uploadRouter = express.Router();
uploadRouter.post('/upload-image', uploadController.upload)

module.exports = uploadRouter