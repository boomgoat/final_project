const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


const Bid = require('../../Models/Bid');
const Job = mongoose.model('Job');

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
      bid.populate('Job');
      Job.find({_id : req.body.data.jobId}).exec((err, jobs)=>{
        const job = jobs[0];
        job.bids = job.bids.concat([newBid]);
        job.save().then(job => {
          res.json(bid);
        })
      });

    });
});

module.exports = router;
