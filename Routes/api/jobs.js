const express = require('express');
const router = express.Router();

// User Model
const Job = require('../../models/Job');

// @route   Get api/users
// @desc    Get All Users
// @access  Public
router.get('/', (req, res) => {

  Job.find().populate('bids').sort({timestamps: -1}).then(jobs => {
    res.json(jobs)
  });
});

router.get('/:id', (req, res) => {
  Job.findById(req.params.id)
    .then(job => {
      res.json(job)
    });
});

// @route   POST api/user
// @desc    Create A Post
// @access  Public
router.post('/', (req, res) => {
  const newJob = new Job({
    title: req.body.data.title,
    category: req.body.data.category,
    description: req.body.data.description,
    budget: req.body.data.budget,
    skills: req.body.data.skills,
    duration: req.body.data.duration,
    userId: req.body.data.userId
  });

  newJob.save()
    .then(() => {
      Job.find()
        .then(jobs => {
          res.json(jobs)
        })

    });
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
