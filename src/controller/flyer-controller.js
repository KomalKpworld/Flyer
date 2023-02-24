const flyerModel = require('../Schema/flyer-model')

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "ddhyuse8r",
    api_key: "455414113895392",
    api_secret: "7kNNkfb8SJz-Pr4Jwl8xSbEYVX0"
  });

  const upload = async (file)=> {
    return new Promise(function (resolve, reject) {
 
    console.log("kom")
    cloudinary.uploader.upload(file.tempFilePath, ({folder:'samples'}), async (err, result) => {
        console.log(result)
        return resolve(result.url)
    
      })
  
  }
    )}

const createFlyer = async (req, res) => {

  try {
    let flyerBody = req.body
    const { image_url, background_image_url, poster_height, poster_width, color, mode, is_pro } = flyerBody
 
    
   let imageUpload = await upload(req.files.image)
   console.log("file")
   let background_image = await upload(req.files.backGroundImage)
   console.log("khj")
      let obj ={
        image_url: imageUpload,
        background_image_url:background_image,
        poster_height,
        poster_width,
        color,
        mode, 
        is_pro
      }
   
    let createData = await flyerModel.create(obj)
    return res.status(201).send({ status: true, message: " flyer created successfully", data: createData})
  } catch (error) {

    return res.status(500).send({ status: false, msg: error.message })
  }

}

//* Update Flyer  *///////////////////////////////////

const updateFlyer = async function (req, res) {
  try {
    let id = req.params.id
    let updateFlyerData = req.body
    let updateFlyer = await flyerModel.updateOne(id, { $set: updateFlyerData }, { new: true })

    return res.status(success).send({ status: true, message: "Flyer update successfully", data: updateFlyer })

  }
  catch (err) {
    res.status(500).send({ status: false, message: err.message })
  }
}

//* get  Flyer by id   *///////////////////////////////////
const getFlyer = async function (req, res) {
try {   
let id = req.params.id
let getFlyerById = await flyerModel.findOne(id)  
return res.status(200).send({ status: true, message: "get fiyer by id", data: getFlyerById})
}
 catch (err) {
    res.status(500).send({ status: false, message: err.message })
  }

}

//* get  Flyer by id   *///////////////////////////////////
const getFlyerList = async function (req, res) {
  try {   
  let id = req.params.id
  let getFlyerById = await flyerModel.findOne(id)  
  return res.status(200).send({ status: true, message: "get fiyer list  ", data: getFlyerById})
  }
   catch (err) {
      res.status(500).send({ status: false, message: err.message })
    }
  
  }

////* delete flyer *///////////////////////////////////////////////////////////////////////////////////////

const deleteFlyer = async function (req, res) {
  try {
    let id = req.params.id
    const findFlyer = await flyerModel.findOne(id)

    if (!findFlyer) {
      return res.status(400).send({ status: false, message: "flyer data alreday delete", data: null })

    }
    const deleteFlyer = await flyerModel.deleteOne(id)
    return res.status(200).send({ status: true, message: " flyer delete successfully", data: deleteFlyer })

  }
catch (err) {
    res.status(500).send({ status: false, message: err.message })
  }

}








module.exports = { createFlyer, updateFlyer, getFlyer,getFlyerList, deleteFlyer }


