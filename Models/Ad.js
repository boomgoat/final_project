const mongoose = require('mongoose');

const AdSchema = new mongoose.Schema({
    adURL: {
        type: String,
        default: '',
        required: true,
        lowercase:true,
        index: true
    },
    redirectURL: {
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
    duration: {
        type: Number,
        default:'',
        index: true
    },
    brandId: [{
        type: Schema.Types.ObjectId, ref: 'Brand'
    }]
},
{
    timestamps: true
});


module.exports = mongoose.model('Ad', AdSchema);