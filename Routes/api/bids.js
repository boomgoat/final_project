const express = require('express');
const router = express.Router();


const Bid = require('../../Models/Bid');

router.post('/bids', (req, res) => {
  const newBid = new Bid({
    status: '',
    bidInfo: '',
    bidValue: '',
    jobId: '',
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
