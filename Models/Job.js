const mongoose = require('mongoose');

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
    userId: [{
        type: Schema.Types.ObjectId, ref: 'User'
    }]
},
{
    timestamps: true
});


module.exports = mongoose.model('Job', JobSchema);