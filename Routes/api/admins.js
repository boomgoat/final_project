const express = require('express');
const router = express.Router();

// User Model
const Admin = require('../../models/Admin');

// @route   Get api/admins
// @desc    Get All Admins
// @access  Public
router.get('/', (req, res) => {
    Admin.find()
    .then(admins => res.json(admins));
});

// @route   POST api/admin
// @desc    Create A Post
// @access  Public
router.post('/', (req, res) => {
    const newAdmin = new Admin({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });
    
    newAdmin.save()
        .then(admin => res.json(admin));
});

// @route   DELETE api/user/:id
// @desc    Delete An Admin
// @access  Public
router.delete('/:id', (req, res) => {
    Admin.findById(req.params.id)
    .then(admin => admin.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;