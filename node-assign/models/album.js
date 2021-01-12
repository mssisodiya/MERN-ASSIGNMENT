const mongoose = require('mongoose');


const albumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  
  },
  user: {
    type : mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
  // userId: {
  //   type:Number
  // }
})

const Album = mongoose.model('Album', albumSchema);

exports.albumSchema = albumSchema;
exports.Album = Album; 