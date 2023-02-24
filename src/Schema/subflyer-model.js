const mongoose = require('mongoose');

const flyerSchema = new mongoose.Schema({
  type: {
    type: Number,
    enum: [1,2],
  },
  rotation: {
    type: Number,

  },
  scale: {
    type: Number,

  },
  is_flipped: {
    type: Number,

  },
  is_lock: {
    type: Number,

  },
  x: {
    type: Number,
    default: 0
  },
  y: {
    type: Number
    
  },
  height: {
    type: String,

  },
  width: {
    type: String,

  },
  order_by: {
    type: Number,

  },

  font: {
    font_name: {
      type: String
    },
    font_size: {
      type: Number
    },
    font_color: {
      type: String
    },
    font_align: {
      type: Number
    },
    is_bold: {
      type: Boolean,
      default: false
    },
    is_underline: {
      type: Boolean,
      default: false
    },

    letter_spacing: {
      type: Number,
      default: 0
    },
    font_file: {
      tyep: String
    },
    file_font: {
      type: String
    }
  },
  font_vertical_spacing: {
    type: String,
  },
  text: {
    type: String
   
  },
  image_url: {
    type: String
  }
}, { timestamps: true }
)

module.exports = mongoose.model("subflyer", flyerSchema)