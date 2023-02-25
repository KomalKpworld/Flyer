
const subflyerModel = require('../Schema/subflyer-model')
const flyers = require('../Schema/flyer-model')

//* Create SubFlyer *//////
const createSubFlyer = async (req, res) => {

  try {
    let flyerBody = req.body
    const { type, rotation, scale, is_flipped, is_lock, x, y, height, width, order_by, font, font_vertical_spacing, text, flyerId,image_url } = flyerBody
    if ((image_url && type !== 2)) {
      return res.status(400).send({ status: false, message: " type should be 2 if you choose image", data: null })
    }
    else if ((font && type !== 1)) {
      return res.status(400).send({ status: false, message: "the type should be 1 if you choose font ", data: null })
    }
    else {
      let createData = await subflyerModel.create(flyerBody)
      return res.status(201).send({ status: true, message: "subflyer created successfully", data: createData })
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
    if (updateFlyerData.type) {
      return res.status(400).send({ status: false, message: "type is not allow to update", data: null })
    }
    let updateFlyer = await subflyerModel.findOneAndUpdate({ _id: id }, { $set: updateFlyerData }, { new: true })
    return res.status(200).send({ status: true, message: "SubFlyer update successfully", data: updateFlyer })
  }
  catch (err) {
    res.status(500).send({ status: false, message: err.message })
  }
}

//* get  SubFlyer by id   *///////////////////////////////////
const getSubFlyer = async function (req, res) {
  try {
    let id = req.params.flyerId
    console.log(id)
  let flyerData= await subflyerModel.find({flyerId:id})

    if (!flyerData) {
      return res.status(400).send({ status: false, message: "please check id , record is deleted or wrong id", data: null })
    }
    return res.status(200).send({ status: true, message: "get subflyer by id", data: flyerData })
  }
  catch (err) {
    res.status(500).send({ status: false, message: err.message })
  }
}

//* get  SubFlyer    *///////////////////////////////////
const getSubFlyerList = async function (req, res) {
  try {
    
    let flyerData = await flyers.aggregate([
      {
        $lookup: {
          from: "subflyers",
          localField: "_id",
          foreignField: "flyerId",
          as: "subflyer",
        },
         
      },
    ])
   
    //let getFlyerById = await subflyerModel.find()
    return res.status(200).send({ status: true, message: "get subflyer list  ", data: flyerData  })
  }
  catch (err) {
    res.status(500).send({ status: false, message: err.message })
  }
}

////* delete Subflyer *///////////////////////////////////////////////////////////////////////////////////////

const deleteSubFlyer = async function (req, res) {
  try {
    let id = req.params.id
    test
  
    const findFlyer = await subflyerModel.findById({ _id: id })
    if (!findFlyer) {
      return res.status(400).send({ status: false, message: "subflyer data already delete", data: null })
    }
    const deleteSabFlyer = await subflyerModel.findByIdAndDelete(id)
    return res.status(200).send({ status: true, message: " subflyer delete successfully", data: deleteSabFlyer })
  }
  catch (err) {
    res.status(500).send({ status: false, message: err.message })
  }
}


module.exports = { createSubFlyer, updateSubFlyer, getSubFlyer, getSubFlyerList, deleteSubFlyer }


