const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    brandName: {
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
        lowercase:true,
        index: true
    },
    phone: {
        type: Number,
        default: '',
        required: true,
        index: true 
    },
    password: {
        type: String,
        default: false,
        required: true,
        lowercase:true,
        index: true
    },
    isDeleted: {
        type: Boolean,
        default: ''
    },
    profilePictureURL: {
        type: String,
        default: '',
        index: true
    }
},
{
    timestamps: true
});


module.exports = mongoose.model('Brand', BrandSchema);