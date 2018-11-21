const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        default: '',
        required: true,
        lowercase:true,
        index: true
    },
    category: {
        type: [String],
        default: '',
        required: true,
        lowercase:true,
        index: true
    },
    description: {
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
    budget: {
        type: Number,
        default: '',
        index: true
    },
    review: {
        type: [String],
        default: '',
        index: true
    },
    skills: {
        type: [String],
        default: '',
        lowercase: true,
        index: true
    },
    duration: {
        type: Number,
        index: true
    },
    status: {
        type: String, enum: ['Pending', 'Active', 'Completed']
    },
    userId: {
        type: String,
        default: '',
        index: true
    }
},
{
    timestamps: true
});



module.exports = mongoose.model('Job', JobSchema);