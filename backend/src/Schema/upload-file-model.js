const mongoose = require('mongoose');

const uploadFileSchema = new mongoose.Schema({
    id: {
        type: String,    
      },
  path: {
    type: String,   
  },
  file_name: {
    type: String,
  },
  url: {
    type: String,
  },
 publicId:{
  type: String
 }

}, { timestamps: true }
)

module.exports = mongoose.model("uploadfiles", uploadFileSchema)