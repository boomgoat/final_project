const mongoose = require('mongoose');

const BidSchema = new mongoose.Schema({
    status: {
        type: Boolean,
        default: false,
        required: true,
        index: true
    },
    bidInfo: {
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


module.exports = mongoose.model('Bid', BidSchema);