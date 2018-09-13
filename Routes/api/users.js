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
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
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


module.exports = router;