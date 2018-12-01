const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');

// @route   Get api/users
// @desc    Get All Users
// @access  Public
router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users));
});

// @route   POST api/user
// @desc    Create A Post
// @access  Public
router.post('/', (req, res) => {
    console.log(req.body.data);
    const newUser = new User({
        firstName: req.body.data.firstName,
        lastName: req.body.data.lastName,
        email: req.body.data.email,
        userName: req.body.data.userName,
        password: req.body.data.password
    });
    
    newUser.save()
        .then(user => res.json(user));
});

// @route   DELETE api/user/:id
// @desc    Delete A User
// @access  Public
router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

router.patch('/:id', function(req, res, next){
  console.log(req.payload, req.body)
    User.findById(req.params.id).then(function(user){
      console.log(req.params.id)
      if(!user){ return res.sendStatus(401); }
  
      // only update fields that were actually passed...
      if(typeof req.body.data.age !== 'undefined'){
        user.age = req.body.data.age;
      }
      if(typeof req.body.data.availability !== 'undefined'){
        user.availability = req.body.data.availability;
      }
      if(typeof req.body.data.gender !== 'undefined'){
        user.gender = req.body.data.gender;
      }
      if(typeof req.body.data.skills !== 'undefined'){
        user.skills = req.body.data.skills;
      }
      if(typeof req.body.data.about !== 'undefined'){
        user.about = req.body.data.about;
      }
      if(typeof req.body.data.phone !== 'undefined'){
        user.phone = req.body.data.phone;
      }
  
      return user.save().then(function(){
        return res.json({user: user.toAuthJSON()});
      });
    }).catch(next);
  });

  module.exports = router;