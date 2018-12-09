const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


const Bid = require('../../Models/Bid');
const Job = mongoose.model('Job');
const User = mongoose.model('User');

router.get('/', (req, res) => {

  Bid.find().sort({timestamps: -1}).then(bids => {
    res.json(bids)
  });

});

router.post('/', (req, res) => {
  const newBid = new Bid({
    status: req.body.data.status,
    bidInfo: req.body.data.bidInfo,
    bidValue: req.body.data.bidValue,
    job: req.body.data.jobId,
    user: req.body.data.userId
  });


  newBid.save()
    .then((bid) => {
      Job.find({_id : req.body.data.jobId}).exec((err, jobs)=>{
        const job = jobs[0];
        console.log(job)
        job.bids = job.bids.concat([newBid]);
        job.save().then(job => {
          User.find({_id : req.body.data.userId}).exec((err, users)=> {
            const user = users[0];
            console.log(user)
            user.bids = user.bids.concat([bid]);
            user.save().then(user => {
              bid.job = job;
              bid.user = user;
              bid.save().then(bid=> {
                const populatedBid = bid.populate('job, user');
                res.json(populatedBid);
              });
            })
          });
        })
      });

    });
});

module.exports = router;
