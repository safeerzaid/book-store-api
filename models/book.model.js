const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema(
  {
  name:{
    type: String,
    required: [true, 'product name is required'],
    trim: true,
  },

  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, "price cannot be negative"]
  },

  category: {
    type: String,
    required: [true, 'Catogory is required'],
    enum: ['adult', "minor"]
  },
  description: {
    type:String,
    trim: true,
    default: 'No description provided'
  }, 

  inStock: {
    type: Boolean,
    default: true,
  },
},

  {
    timestamps: true,
  }

)

const Product = mongoose.model('Product', productsSchema);
module.exports = Product;

