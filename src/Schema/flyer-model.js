const mongoose = require('mongoose');

const flyerSchema = new mongoose.Schema({
  image_url: {
        type: String,
        //required: true,
    },
    background_image_url: {
        type: String,
       // required: true,
    },
    poster_height: {
        type: String,
      //  required: true,
    },
    poster_width: {
        type: String,
       // required: true,
    },
    color: {
      type: String,
     // required: true,
  },
  mode: {
      type: Number,
     default: 0
  },
  is_pro: {
      type: Boolean,
     default: false
  }
}, { timestamps: true }
)

module.exports = mongoose.model("flyer ", flyerSchema)