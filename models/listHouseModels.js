const mongoose = require("mongoose");
const propertySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Property Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter Property Description"],
  },
  price: {
    type: String,
    required: [true, "Please Enter Property Price"],
    maxLength: [20, "Price cannot exceed 8 characters"],
  },
  images: [
    {
      public_id: {
        type: String
        // required: true,
      },
      url: {
        type: String
        // required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  ownername: {
    type: String,
    required: [true, "Please Enter Owner Name"],
    trim: true,
  },
  ownernumber: {
    type: String,
    required: [true, "Please Enter Owner Number"],
    minLength: [10, "Price cannot exceed 10 Number"],
  },
  address: {
    type: String,
    required: [true, "Please Enter address"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ListProperty", propertySchema);