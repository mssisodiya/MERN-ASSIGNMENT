const express = require('express');
const router = express.Router();
const _ = require('lodash')
const {Photo} = require('../models/photo');
var multer  = require('multer')


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads')
    },
    filename:  (req, file, cb) =>  {
      cb(null, Date.now()+ '-' +file.originalname)
    }
})
var upload = multer({ storage: storage });

router.post('/', upload.single('image'), async (req, res) => {
  
    const url = req.protocol + '://' + req.get('host')
    const photo = new Photo({albumId: req.body.albumId, image: url + '/uploads/' + req.file.filename} )
   const savedphoto =  await photo.save()
   res.send(savedphoto)
  })

//get all photos
router.get('/', async (req, res) => {
  const data = await Photo.find()
  res.send(data)
  })

  //get photos of an particular album
router.get('/:id', async (req, res) => {
    const data = await Photo.find({albumId: req.params.id})
    res.send(data)
    })

//update photo of a user
router.put('/:id', async (req, res) => {
  const url = req.protocol + '://' + req.get('host')
  console.log('req', req.body)
  const album = await Photo.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.send(album);
});


module.exports = router
