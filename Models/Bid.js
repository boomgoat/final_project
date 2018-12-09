
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    bidValue: {
        type: String,
        default: '',
        required: true,
        index: true
    },
    jobId: {
        type: Schema.Types.ObjectId, ref: 'Job'
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
},
{
    timestamps: true
});


module.exports = mongoose.model('Bid', BidSchema);
