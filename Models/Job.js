const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        type: String, enum: ['Blocked', 'Active', 'Completed'],
        default: 'Active'
    },
    userId: [{
      type: Schema.Types.ObjectId, ref: 'User'
    }],
    workerId: {
        type: String,
        default: '',
        index: true
    },
    bids: [{
        type: Schema.Types.ObjectId, ref: 'Bid'
    }]
},
  {
    timestamps: true
});



module.exports = mongoose.model('Job', JobSchema);
