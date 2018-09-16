const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const uniqueValidator = require('mongoose-unique-validator');

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
        index: true,
        unique: true
    },
    passwordHash: {
        type: String,
        default: false,
        required: true,
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
    confirmed: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
});


// UserSchema.methods.isValidPassword = function isValidPassword(password) {
//     console.log(password, this.password);
//     return bcrypt.compareSync(password, this.password);
// };

UserSchema.methods.generateJWT = function generateJWT(){
    return jwt.sign({
        email: this.email
    }, 'secretkey' );
};

UserSchema.methods.toAuthJSON = function toAuthJSON () {
    return{
        email: this.email,
        confirmed: this.confirmed,
        token: this.generateJWT()
    }
};

UserSchema.plugin(uniqueValidator, { message: "This email is already taken"});


module.exports = mongoose.model('User', UserSchema);