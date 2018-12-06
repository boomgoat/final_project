const express = require('express');
const router = express.Router();

// User Model
const Service = require('../../models/Service');
const User = require('../../models/User');

// @route   Get api/users
// @desc    Get All Users
// @access  Public
router.get('/', (req, res) => {
    
    Service.find({userId: req.body.data.userId}).then(service =>{
        if(req.body.data.userId == User.findById(req.params.id)){
            res.json(service)
        } else {
            res.status(400).json({ errors: { global: "No services available"}});
        }
    });
    
    
});

// @route   POST api/user
// @desc    Create A Post
// @access  Public
router.post('/', (req, res) => {
    console.log(req.body.data);
    const newService = new Service({
        title: req.body.data.title,
        category: req.body.data.category,
        description: req.body.data.description,
        budget: req.body.data.budget,
        skills: req.body.data.skills,
        duration: req.body.data.duration
    });
    
    newService.save()
        .then(service => res.json(service));
});

// @route   DELETE api/user/:id
// @desc    Delete A User
// @access  Public
router.delete('/:id', (req, res) => {
    Service.findById(req.params.id)
    .then(service => service.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});



  module.exports = router;