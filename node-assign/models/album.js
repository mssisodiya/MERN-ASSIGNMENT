const mongoose = require('mongoose');


const albumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  
  },
  userId: {
    type:Number
  }
})

const Album = mongoose.model('Album', albumSchema);

exports.albumSchema = albumSchema;
exports.Album = Album; 