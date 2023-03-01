const flyerModel = require('../Schema/flyer-model')
const subflyerModel = require('../Schema/subflyer-model')
const createFlyer = async (req, res) => {

  try {
    let flyerBody = req.body
    
    const { image_url, background_image_url, poster_height, poster_width, color, mode, is_pro } = flyerBody
if(!flyerBody){
  return res.status(400).send({message: "please enter data"})
}
    let createData = await flyerModel.create(flyerBody)
    return res.status(201).send({ status: true, message: " flyer created successfully", data: createData })
  } catch (error) {
    return res.status(500).send({ status: false, msg: error.message })
  }

}

//* Update Flyer  *///////////////////////////////////

const updateFlyer = async function (req, res) {
  try {
    let id = req.params.id
    let updateFlyerData = req.body
    let updateFlyer = await flyerModel.findOneAndUpdate({_id:id}, { $set: updateFlyerData }, { new: true })
    if(!updateFlyer){
      return res.status(400).send({ status: true, message: "record not found check data", data: null })
    }
    return res.status(200).send({ status: true, message: "Flyer update successfully", data: updateFlyer })

  }
  catch (err) {
    res.status(500).send({ status: false, message: err.message })
  }
}

//* get  Flyer by id   *///////////////////////////////////
const getFlyer = async function (req, res) {
  try {
    let id = req.params.id
    let getFlyerById = await flyerModel.findById(id)
    if(!getFlyerById){
      return res.status(400).send({ status: true, message: "record not found check data", data: null })
    }
    return res.status(200).send({ status: true, message: "get flyer by id", data: getFlyerById })
  }
  catch (err) {
    res.status(500).send({ status: false, message: err.message })
  }

}

//* get  Flyer by id   *///////////////////////////////////
const getFlyerList = async function (req, res) {
  try {
   
    let getFlyerList = await flyerModel.find()
    return res.status(200).send({ status: true, message: "get flyer list  ", data: getFlyerList })
  }
  catch (err) {
    res.status(500).send({ status: false, message: err.message })
  }
}

////* delete flyer *///////////////////////////////////////////////////////////////////////////////////////

const deleteFlyer = async function (req, res) {
  try {
    let id = req.params.id
    const findFlyer = await flyerModel.findById(id)
    if (!findFlyer) {
      return res.status(400).send({ status: false, message: "flyer data already delete", data: null })
    }
    await subflyerModel.deleteMany({flyerId: id})
    const deleteFlyer = await flyerModel.findByIdAndDelete(id)
    return res.status(200).send({ status: true, message: " flyer delete successfully", data: deleteFlyer })
  }
  catch (err) {
    res.status(500).send({ status: false, message: err.message })
  }

}








module.exports = { createFlyer, updateFlyer, getFlyer, getFlyerList, deleteFlyer }


