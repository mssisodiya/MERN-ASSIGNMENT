const express = require('express');
const router = express.Router();
const _ = require('lodash')
const {User} = require('../models/user');

//list all users
router.get('/', async (req, res) => {
  const users = await User.find()
  res.send(users);
});

//create new user
router.post('/', async(req, res) => {
  user = new User(_.pick(req.body, ['name', 'email', 'phone']));
   await user.save()
  res.send(user)
});

//update a user
router.put('/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.send(user);
});


module.exports = router
