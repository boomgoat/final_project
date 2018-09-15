const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.post('/', (req, res) => {
console.log(req.body.credentials);
   const { credentials } = req.body;
   User.findOne({ email: credentials.email }).then(user=> {
       console.log(user && user.isValidPassword(credentials.password));
       if(user) {
            res.json({ user: { email: user.email } });
       } else {
           res.status(400).json({ errors: { global: "Invalid Credenials "}});
       }
   });
});

module.exports = router;