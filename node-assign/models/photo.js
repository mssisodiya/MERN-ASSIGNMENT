const mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var multer = require('multer');

const photoSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  albumId : {
    type: Number
  }
})

const Photo = mongoose.model('Photo', photoSchema);

exports.photoSchema = photoSchema;
exports.Photo = Photo; 