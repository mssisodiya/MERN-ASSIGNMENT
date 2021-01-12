const mongoose = require('mongoose');


const photoSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  albumId: {
    type : mongoose.Schema.Types.ObjectId,
    ref: "Album"
  }
})

const Photo = mongoose.model('Photo', photoSchema);

exports.photoSchema = photoSchema;
exports.Photo = Photo; 