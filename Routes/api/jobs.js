const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// User Model
const Job = require('../../models/Job');
const User = mongoose.model('User');

// @route   Get api/users
// @desc    Get All Users
// @access  Public
router.get('/', (req, res) => {

  Job.find().sort({timestamps: -1}).then(jobs => {
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

// @route   PATCH api/jobs
// @desc    Assign job to worker
// @access  Public
router.patch('/', function (req, res, next) {
  console.log(req.body);
  Job.findById(req.body.jobId)
    .then(job => {
      job.workerId = req.body.jobId;
      job.save()
        .then(job => {
          User.find({_id: req.body.workerId}).exec((err, users) => {
            const user = users[0];
            user.jobs = user.jobs.concat(job);
            user.save()
              .then(user => {
              res.json(user)
            });
          })
        });
    })
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