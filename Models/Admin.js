const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AdminSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: '',
        required: true,
        index: true
    },
    lastName: {
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
        index: true
    },
    gender: {
        type: String,
        default: '',
        index: true
    }
},
{
    timestamps: true
});

AdminSchema.methods.generateJWT = function generateJWT(){
    return jwt.sign({
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName
    }, 'secretkey' );
};

AdminSchema.methods.toAuthJSON = function toAuthJSON () {
    return {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        confirmed: this.confirmed,
        token: this.generateJWT()
    }
};

AdminSchema.methods.isValidPassword = function isValidPassword(password) {
    return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('Admin', AdminSchema);