const mongoose = require('mongoose');

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
        default: false,
        required: true,
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
    approved: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
});


module.exports = mongoose.model('User', UserSchema);