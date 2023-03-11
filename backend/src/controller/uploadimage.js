const cloudinary = require('cloudinary').v2;
const uploadFile = require('../Schema/upload-file-model')
const fs = require('node:fs/promises');

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});

const uploadParentImage = async (req, res) => {

  let file = req.files.image
  if (file) {
    let imageData = await cloudinary.uploader.upload(
      file.tempFilePath, { folder: "uploads/parentFlyer/thumbnails" },
      async (error, result) => {
        console.log(error)
        console.log(result);
        return (result)
      }
    );
    console.log(imageData)
    let obj = {
      id: imageData.asset_id,
      path: imageData.folder,
      file_name: file.name,
      url: imageData.url,
      publicId: imageData.public_id
    }
    let createBackgroundImageUpload = await uploadFile.create(obj)
    return res.status(201).send({ status: true, data: createBackgroundImageUpload })
  }

}

const uploadBackgroundImage = async (req, res) => {
  let file = req.files.image
  if (file) {
    let imageData = await cloudinary.uploader.upload(
      file.tempFilePath, { folder: "uploads/background/thumbnails" },
      async (error, result) => {
        console.log(error)
        console.log(result);
        return (result)
      }
    );
    console.log(imageData)
    let obj = {
      id: imageData.asset_id,
      path: imageData.folder,
      file_name: file.name,
      url: imageData.url,
      publicId: imageData.public_id
    }
    let createBackgroundImageUpload = await uploadFile.create(obj)
    return res.status(201).send({ status: true, data: createBackgroundImageUpload })
  }
}
const uploadSubflyerImage = async (req, res) => {
  let file = req.files.image
  if (file) {
console.log(file.name)
   var imageData= await  cloudinary.uploader
      .upload(file.tempFilePath,
      
        {
      format:false,
          public_id: file.name,
         folder: "uploads/flyer/thumbnails",
        use_filename: true
      
        } ,
        async (error, result) => {
          console.log(error)
          console.log(result);
          return (result)
        }
        ) 
      
    
    // let imageData = await cloudinary.uploader.upload(
    //   file.tempFilePath, (use_filename => true), { folder: "uploads/flyer/thumbnails" },

      // async (error, result) => {
      //   console.log(error)
      //   console.log(result);
      //   return (result)
      // }
    // );
      }
    // let obj = {

    //   path: imageData.folder,
    //   file_name: file.name,
    //   url: imageData.url,
    //   publicId: imageData.public_id
    // }
    // let createBackgroundImageUpload = await uploadFile.create(obj)
    return res.status(201).send({ status: true})
  }

const uploadFont = async (req, res) => {
  let file = req.files.image
  console.log(file)
  if (file) {
    let imageData = await cloudinary.uploader.upload(
      file.tempFilePath, { folder: "uploads/font" },
      async (error, result) => {
        console.log(error)
        console.log(result);
        return (result)
      }
    );
    console.log(imageData)
    let obj = {
      id: imageData.asset_id,
      path: imageData.folder,
      file_name: file.name,
      url: imageData.url,
      publicId: imageData.public_id
    }
    let createBackgroundImageUpload = await uploadFile.create(obj)
    return res.status(201).send({ status: true, data: createBackgroundImageUpload })
  }
}


const getFiles = async (req, res) => {
  let id = req.params.id
  const findData = await uploadFile.findById({ _id: id })
  return res.status(200).send({ satus: true, msg: ' get file by id', data: findData })
}

const getFIleDetails = async (req, res) => {
  const getData = await uploadFile.find()
  return res.status(200).send({ status: true, msg: "get file data success fully", data: getData })
}

const deleteFiles = async (req, res) => {
  let id = req.params.id
  let find = await uploadFile.findById({ _id: id })
  console.log(find)
  const deleteFile = await uploadFile.findByIdAndDelete(id)
  cloudinary.uploader.destroy(find.publicId, function (err, result) { console.log(result) });
  return res.status(200).send({ status: true, msg: 'delete success full', data: deleteFile })

}


module.exports = { uploadBackgroundImage, uploadSubflyerImage, uploadParentImage, uploadFont, getFIleDetails, deleteFiles, getFiles }

