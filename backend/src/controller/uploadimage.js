const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});

const uploadParentImage = async (file) => {
  return new Promise(function (resolve, reject) {
    cloudinary.uploader.upload(
      file.tempFilePath, { folder: "uploads/parentFlyer/thumbnails" },
      async (error, result) => {
        console.log(error, result.url);
        return resolve(result.url)
      }
    );
  })
}
//cloudinary.uploader.destroy('zombie', function(result) { console.log(result) });

const uploadBackgroundImage = async (file) => {
  return new Promise(function (resolve, reject) {
    cloudinary.uploader.upload(
      file.tempFilePath, { folder: "uploads/background/thumbnails" },
      async (error, result) => {
        console.log(error, result.url);
        return resolve(result.url)
      }
    );
  })
}

const uploadSubflyerImage = async (file) => {
  return new Promise(function (resolve, reject) {
    cloudinary.uploader.upload(
      file.tempFilePath, { folder: "uploads/flyer/thumbnails" },
      async (error, result) => {
        console.log(error, result.url);
        return resolve(result.url)
      }
    );
  })
}
const uploadFont= async (file) => {
  return new Promise(function (resolve, reject) {
    cloudinary.uploader.upload(
      file.tempFilePath, { folder: "uploads/font" },
      async (error, result) => {
        console.log(error, result.url);
        return resolve(result.url)
      }
    );
  })
}
module.exports = { uploadBackgroundImage ,uploadSubflyerImage ,uploadParentImage, uploadFont}

