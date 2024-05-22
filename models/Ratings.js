const mongoose = require('mongoose');
const moment = require('moment-timezone');

const ratingsschema = new mongoose.Schema({
    ratingid: {
        type: Number,
        unique: true,
        required: true,
        default: () => generateRandomId()
    },
    newsid: {
        type: String,
        required: true
    },
    rusername: {
        type: String,
        required: true
    },
    ratingpoint: {
        type: Number,
        required: true
    },
    ratingtime: {
        type: String,
        default: () => moment().tz('Asia/Kolkata').format('DD-MM-YYYY HH:mm:ss A')
    }
});

const Ratings = mongoose.model('Ratings',ratingsschema);

function generateRandomId() {
    return Math.floor(Math.random() * 900000) + 100000;
}

module.exports = Ratings;