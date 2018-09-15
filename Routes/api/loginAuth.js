const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.status(400).json({ errors: { global: "Invalid Credentials" }});
});

module.exports = router;