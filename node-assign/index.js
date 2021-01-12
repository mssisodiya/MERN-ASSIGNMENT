const express = require('express')
const app = express()
const mongoose = require('mongoose')
const users = require('./routes/users')
const albums = require('./routes/albums')
const photos = require('./routes/photos')
const cors = require('cors')

mongoose.connect('mongodb://localhost/node-assign', { useNewUrlParser: true , useUnifiedTopology: true, useCreateIndex: true})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json())
app.use('/uploads', express.static('uploads'));

app.use(cors())
app.use('/api/users', users);
app.use('/api/albums', albums);
app.use('/api/photos', photos);

const port = 8000
app.listen(port, () => console.log('Listening on port 8000'))