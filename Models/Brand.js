const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const BrandSchema = new mongoose.Schema({
    brandName: {
        type: String,
        default: '',
        required: true,
        lowercase:true,
        index: true
    },
    email: {
        type: String,
        default: '',
        required: true,
        lowercase:true,
        index: true
    },
    phone: {
        type: Number,
        default: '',
        index: true 
    },
    password: {
        type: String,
        default: '',
        required: true,
        lowercase:true,
        index: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    profilePictureURL: {
        type: String,
        default: '',
        index: true
    }
},
{
    timestamps: true
});


BrandSchema.methods.generateJWT = function generateJWT(){
    return jwt.sign({
        email: this.email,
        brandName: this.brandName
    }, 'secretkey' );
};

BrandSchema.methods.toAuthJSON = function toAuthJSON () {
    return {
        id: this._id,
        email: this.email,
        brandName: this.brandName,
        phone: this.phone,
        confirmed: this.confirmed,
        token: this.generateJWT()
    }
};

BrandSchema.methods.isValidPassword = function isValidPassword(password) {
    return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('Brand', BrandSchema);