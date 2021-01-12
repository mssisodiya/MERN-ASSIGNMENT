const express = require('express');
const router = express.Router();
const _ = require('lodash')
const {Album} = require('../models/album');
const {User} = require('../models/user');

//create new album
// router.post('/', async(req, res) => {
//   album = new Album(_.pick(req.body, ['name']));
//    await album.save()
//   res.send(album)
// });

router.post('/:id', async(req, res) => {
  const user = await User.findById(req.params.id)

  if(!user) return res.status(404).send("Not a valid user")
  album = new Album({name: req.body.name, user: user._id});
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
  const user = await Album.find({user: req.params.id})
  .populate('user', 'name -_id') //excluded id
  .select('name')
  res.send(user)

});

//update a album
router.put('/:id', async (req, res) => {
  const album = await Album.findByIdAndUpdate(req.params.id, { name: req.body.name}, {
    new: true
  });
  res.send(album);
});


module.exports = router
