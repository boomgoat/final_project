const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');

// @route   Get api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
    User.find({firstName: "talha"})
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

router.patch('/', function(req, res, next){
    User.findById(req.payload.id).then(function(user){
      if(!user){ return res.sendStatus(401); }
  
      // only update fields that were actually passed...
      if(typeof req.body.user.age !== 'undefined'){
        user.age = req.body.user.age;
      }
      if(typeof req.body.user.gender !== 'undefined'){
        user.gender = req.body.user.gender;
      }
      if(typeof req.body.user.skills !== 'undefined'){
        user.skills = req.body.user.skills;
      }
      if(typeof req.body.user.about !== 'undefined'){
        user.about = req.body.user.about;
      }
      if(typeof req.body.user.phone !== 'undefined'){
        user.phone = req.body.user.phone;
      }
  
      return user.save().then(function(){
        return res.json({user: user.toAuthJSON()});
      });
    }).catch(next);
  });


module.exports = router;