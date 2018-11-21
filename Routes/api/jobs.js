const express = require('express');
const router = express.Router();

// User Model
const Job = require('../../models/Job');
const User = require('../../models/User');

// @route   Get api/users
// @desc    Get All Users
// @access  Public
router.get('/', (req, res) => {
    
    Job.find({userId: req.body.data.userId}).then(job =>{
        if(req.body.data.userId == User.findById(req.params.id)){
            res.json(job)
        } else {
            res.status(400).json({ errors: { global: "No jobs available"}});
        }
    });
    
    
});

// @route   POST api/user
// @desc    Create A Post
// @access  Public
router.post('/', (req, res) => {
    console.log(req.body.data);
    const newJob = new Job({
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        budget: req.body.budget,
        skills: req.body.skills,
        duration: req.body.duration
    });
    
    newJob.save()
        .then(job => res.json(job));
});

// @route   DELETE api/user/:id
// @desc    Delete A User
// @access  Public
router.delete('/:id', (req, res) => {
    Job.findById(req.params.id)
    .then(job => job.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});



  module.exports = router;