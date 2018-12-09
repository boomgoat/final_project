const express = require('express');
const router = express.Router();


const Bid = require('../../Models/Bid');

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
    jobId: req.body.data.jobId,
    userId: req.body.data.userId
  });

  newBid.save()
    .then(() => {
      Bid.find()
        .then(bids => {
          res.json(bids)
        })

    });
});

module.exports = router;
