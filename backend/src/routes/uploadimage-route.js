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




    util    = require( 'util' ),
    multer  = require( 'multer' );

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
  var upload = multer({ storage: storage })

console.log(upload)

uploadRouter.post('/upload', upload.single('image'), (req, res, next) => {
    console.log(req.files)
    if(err) {
        res.status(400).send("Something went wrong!");
      }
      res.send(req.file);
    });



module.exports = uploadRouter