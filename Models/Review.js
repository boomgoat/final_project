const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    reviewInfo: {
        type: String,
        default: '',
        lowercase:true,
        index: true
    },
    jobId: [{
        type: Schema.Types.ObjectId, ref: 'Job'
    }],
    userId: [{
        type: Schema.Types.ObjectId, ref: 'User'
    }], 
},
{
    timestamps: true
});


module.exports = mongoose.model('Bid', ReviewSchema);