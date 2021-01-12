const express = require('express');
const router = express.Router();
const _ = require('lodash')
const {Album} = require('../models/album');

//create new album
router.post('/', async(req, res) => {
  album = new Album(_.pick(req.body, ['name', 'userId']));
   await album.save()
  res.send(album)
});

//get all albums
router.get('/', async (req, res) => {
  const album = await Album.find()
  res.send(album);
});

//get albums of particular user
router.get('/:id', async (req, res) => {
  const album = await Album.find({userId: req.params.id})
  res.send(album);
});

//update a album
router.put('/:id', async (req, res) => {
  const album = await Album.findByIdAndUpdate(req.params.id, { name: req.body.name}, {
    new: true
  });
  res.send(album);
});


module.exports = router
