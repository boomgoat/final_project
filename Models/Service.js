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
        default: ''
    },
    price: {
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
    duration: {
        type: Number,
        default:'',
        index: true
    },
    status: {
        type: String, enum: ['Inactive', 'Active']
    },
    userId: [{
        type: Schema.Types.ObjectId, ref: 'User'
    }],
},
{
    timestamps: true
});


module.exports = mongoose.model('Service', ServiceSchema);