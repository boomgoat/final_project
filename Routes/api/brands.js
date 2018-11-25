const express = require('express');
const router = express.Router();

// User Model
const Brand = require('../../models/Brand');

// @route   Get api/users
// @desc    Get All Users
// @access  Public
router.get('/', (req, res) => {
    Brand.find()
    .then(brands => res.json(brands));
});

// @route   POST api/user
// @desc    Create A Post
// @access  Public
router.post('/', (req, res) => {
    console.log(req.body.data);
    const newBrand = new Brand({
        brandName: req.body.brandName,
        email: req.body.email,
        password: req.body.password
    });
    
    newBrand.save()
        .then(brand => res.json(brand));
});

router.post('/login', (req, res) => {
  const { credentials } = req.body;
  Brand.findOne({ email: credentials.email }).then(brand=> {
     if(brand && brand.password === credentials.pass) {
          res.json({ brand: brand.toAuthJSON() });
         
     } else{
      res.status(400).json({ errors: { global: "Invalid Credenials "}});
     }
 });
})

// @route   DELETE api/user/:id
// @desc    Delete A User
// @access  Public
router.delete('/:id', (req, res) => {
    Brand.findById(req.params.id)
    .then(brand => brand.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

router.patch('/:id', function(req, res, next){
  console.log(req.payload, req.body)
    Brand.findById(req.params.id).then(function(brand){
      console.log(req.params.id)
      if(!brand){ return res.sendStatus(401); }
  
      // only update fields that were actually passed...
      if(typeof req.body.data.age !== 'undefined'){
        brand.age = req.body.data.age;
      }
      if(typeof req.body.data.gender !== 'undefined'){
        brand.gender = req.body.data.gender;
      }
      if(typeof req.body.data.skills !== 'undefined'){
        brand.skills = req.body.data.skills;
      }
      if(typeof req.body.data.about !== 'undefined'){
        brand.about = req.body.data.about;
      }
      if(typeof req.body.data.phone !== 'undefined'){
        brand.phone = req.body.data.phone;
      }
  
      return brand.save().then(function(){
        return res.json({brand: brand.toAuthJSON()});
      });
    }).catch(next);
  });

  module.exports = router;