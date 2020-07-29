const mongoose = require('mongoose');

const carModel = mongoose.Schema({
    model: {
        type: String,
        required: '{PATH} is required!'
    },
    registration_number: {
        type: String,
        required: '{PATH} is required!'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Owner'
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Car', carModel);