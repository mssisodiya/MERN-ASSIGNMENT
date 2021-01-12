router.post('/', upload.single('image'), async (req, res) => {
  console.log(req.body);
    console.log(req.file);
    const url = req.protocol + '://' + req.get('host')
    const photo = new Photo({albumId: req.body.albumId, image: url + '/uploads/' + req.file.filename} )
    await photo.save()
  })

//get photos
router.get('/', async (req, res) => {
  const data = await Photo.find()
  res.send(data)
  })