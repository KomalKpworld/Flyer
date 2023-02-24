
const sabflyerModel = require('../Schema/subflyer-model')


//* Create SubFlyer *//////
const createSubFlyer = async (req, res) => {

  try {
    let flyerBody = req.body
    const {type,  rotation, scale, is_flipped, is_lock, x, y, height, width, order_by, font, font_vertical_spacing, text, image_url } = flyerBody
   if((!image_url)&&(type == 2)){
    return res.status(400).send({ status: false, message: "the type should be 1 if you choose font", data: null }) 
   }
   else
 {
    let createData = await sabflyerModel.create(flyerBody)
    return res.status(201).send({ status: true, message: " sabflyer created successfully", data: createData })
 }
  } catch (err) {
    console.log(err)
    return res.status(500).send({ status: false, msg: err.message })
  }

}

//* Update SubFlyer  *///////////////////////////////////

const updateSubFlyer = async function (req, res) {
  try {
    let id = req.params.id
    let updateFlyerData = req.body
    let updateFlyer = await sabflyer_1_Model.updateOne(id, { $set: updateFlyerData }, { new: true })

    return res.status(success).send({ status: true, message: "SabFlyer update successfully", data: updateFlyer })

  }
  catch (err) {
    res.status(500).send({ status: false, message: err.message })
  }
}

//* get  SubFlyer by id   *///////////////////////////////////
const getSubFlyer = async function (req, res) {
  try {
    let id = req.params.id
    let getFlyerById = await sabflyer_1_Model.findOne(id)
    return res.status(200).send({ status: true, message: "get sabfiyer by id", data: getFlyerById })
  }
  catch (err) {
    res.status(500).send({ status: false, message: err.message })
  }

}

//* get  SubFlyer by id   *///////////////////////////////////
const getSubFlyerList = async function (req, res) {
  try {
    let id = req.params.id
    let getFlyerById = await sabflyer_1_Model.findOne(id)
    return res.status(200).send({ status: true, message: "get sabfiyer list  ", data: getFlyerById })
  }
  catch (err) {
    res.status(500).send({ status: false, message: err.message })
  }

}

////* delete Subflyer *///////////////////////////////////////////////////////////////////////////////////////

const deleteSubFlyer = async function (req, res) {
  try {
    let id = req.params.id
    const findFlyer = await sabflyer_1_Model.findOne(id)

    if (!findFlyer) {
      return res.status(400).send({ status: false, message: "sabflyer data alreday delete", data: null })

    }
    const deleteSabFlyer = await sabflyer_1_Model.deleteOne(id)
    return res.status(200).send({ status: true, message: " sabflyer delete successfully", data: deleteSabFlyer })

  }
  catch (err) {
    res.status(500).send({ status: false, message: err.message })
  }

}








module.exports = { createSubFlyer, updateSubFlyer, getSubFlyer, getSubFlyerList, deleteSubFlyer }


