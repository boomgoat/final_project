// const express = require('express');
// const router = express.Router();

// // User Model
// const Job = require('../../models/Job');

// // @route   Get api/users
// // @desc    Get All Users
// // @access  Public
// router.get('/', (req, res) => {
//     Job.find({title: "Test"})
//     .then(jobs => res.json(jobs));
// });

// // @route   POST api/user
// // @desc    Create A Post
// // @access  Public
// router.post('/', (req, res) => {
//     console.log(req.body.data);
//     const newJob = new Job({
//         title: req.body.data.title,
//         category: req.body.data.category,
//         description: req.body.data.description,
//         budget: req.body.data.budget,
//         skills: req.body.data.skills,
//         duration: req.body.data.duration
//     });
    
//     newJob.save()
//         .then(job => res.json(job));
// });

// // @route   DELETE api/user/:id
// // @desc    Delete A User
// // @access  Public
// router.delete('/:id', (req, res) => {
//     Job.findById(req.params.id)
//     .then(job => job.remove().then(() => res.json({success: true})))
//     .catch(err => res.status(404).json({success: false}));
// });



//   module.exports = router;