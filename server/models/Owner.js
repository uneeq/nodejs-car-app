const mongoose = require('mongoose');

const ownerModel = mongoose.Schema({
    name: {
        type: String,
        required: '{PATH} is required!'
    },
    bio: {
        type: String
    },
    cars: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Car' }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Owner', ownerModel);