const mongoose = require('mongoose');
const moment = require('moment-timezone');

const commentschema = new mongoose.Schema({
    commentid: {
        type: String,
        unique: true,
        required: true,
        default: () => generateRandomId()
    },
    newsid: {
        type: String,
        required: true
    },
    commentername: {
        type: String,
        required: true
    },
    commenttext: {
        type: String,
        required: true
    },
    commentedtime: {
        type: String,
        default: () => moment().tz('Asia/Kolkata').format('DD-MM-YYYY HH:mm:ss A')
    },
});

const Comment = mongoose.model('Comment',commentschema);

function generateRandomId() {
    return Math.floor(Math.random() * 900000) + 100000;
}

module.exports = Comment;