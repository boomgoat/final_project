const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
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
        lowercase:true,
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
        default: '',
        required: true,
        index: true
    },
    gender: {
        type: String,
        default: '',
        index: true
    }
},
{
    timestamps: true
});


module.exports = mongoose.model('Admin', AdminSchema);