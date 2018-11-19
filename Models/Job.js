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
        default: ''
    },
    budget: {
        type: Number,
        default: '',
        index: true
    },
    review: {
        type: {
            type: String
        },
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
        default:'',
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

JobSchema.methods.generateJWT = function generateJWT(){
    return jwt.sign({
        title: this.title,
        category: this.category,
        isDeleted: this.isDeleted,
        status: this.status,
        duration: this.duration,
        budget: this.budget
    }, 'secretkey' );
};

JobSchema.methods.toAuthJSON = function toAuthJSON () {
    return {
        title: this.title,
        category: this.category,
        isDeleted: this.isDeleted,
        status: this.status,
        userId: this.userId,
        duration: this.duration,
        budget: this.budget,
        token: this.generateJWT()
    }
};


module.exports = mongoose.model('Job', JobSchema);