const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
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
        index: true
    },
    userName: {
        type: String,
        default: '',
        required: true,
        index: true
    },
    email: {
        type: String,
        default: '',
        required: true,
        lowercase: true,
        index: true
    },
    password: {
        type: String,
        default: false,
        required: true,
        index: true
    },
    phone: {
        type: Number,
        default: '',
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
    },
    gender: {
        type: String,
        default: '',
        lowercase:true,
        index: true
    },
    dateOfBirth: {
        type: String,
        default: '',
        lowercase:true,
        index: true
    },
    about: {
        type: String,
        default: '',
        lowercase: true,
        index: true
    },
    age: {
        type: Number,
        default: '',
        index: true
    },
    rank: {
        type: Number,
        default: '',
        index: true
    },
    favorPoints: {
        type: Number,
        default: '',
        index: true
    },
    skills: {
        type: [String],
        default: '',
        lowercase: true,
        index: true
    },
    approved: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
});

UserSchema.methods.generateJWT = function generateJWT(){
    return jwt.sign({
        id: this._id,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        userName: this.userName,
        age: this.age,
        phone: this.phone,
        about: this.about,
        skills: this.skills
    }, 'secretkey' );
};

UserSchema.methods.toAuthJSON = function toAuthJSON () {
    return {
        id: this._id,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        gender: this.gender,
        userName: this.userName,
        phone: this.phone,
        about: this.about,
        skills: this.skills,
        confirmed: this.confirmed,
        token: this.generateJWT()
    }
};

UserSchema.methods.isValidPassword = function isValidPassword(password) {
    return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User', UserSchema);