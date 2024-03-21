import mongoose from "mongoose";


const photoSchema = new mongoose.Schema({

  originalname: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },

  data: {
    type: Date,
    default: Date.now()
  }
})

const Photo = mongoose.model('Photo', photoSchema)

export default Photo