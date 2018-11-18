const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.post('/', (req, res) => {
   const { credentials } = req.body;
   User.findOne({ email: credentials.email }).then(user=> {
       if(user && user.password === credentials.pass) {
            res.json({ user: user.toAuthJSON() });
           
       } else{
        res.status(400).json({ errors: { global: "Invalid Credenials "}});
       }
   });
});

module.exports = router;