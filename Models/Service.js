const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
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
    price: {
        type: Number,
        default: '',
        index: true
    },
    review: {
        type: String,
        default: '',
        index: true
    },
    duration: {
        type: Number,
        default:'',
        index: true
    },
    status: {
        type: String, enum: ['Inactive', 'Active']
    },
    userId: {
        type: String
    },
},
{
    timestamps: true
});


module.exports = mongoose.model('Service', ServiceSchema);