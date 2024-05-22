const mongoose = require('mongoose');
const moment = require('moment-timezone');

const newsschema = new mongoose.Schema({
    newsid: {
        type: String,
        unique: true,
        required: true,
        default: () => generateRandomId()
    },
    imagelink: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    postedtime: {
        type: String,
        default: () => moment().tz('Asia/Kolkata').format('DD-MM-YYYY HH:mm:ss A')
    },
    publishedby: {
        type: String,
        required: true
    },
    publisher: {
        type: Object,
        required: true
    }
});

const news = mongoose.model('News',newsschema);

function generateRandomId() {
    return Math.floor(Math.random() * 900000) + 100000;
}

module.exports = news;