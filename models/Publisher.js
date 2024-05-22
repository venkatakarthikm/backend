const mongoose = require("mongoose")

const publisherschema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
});

const publisher = mongoose.model('publisher',publisherschema);

module.exports = publisher;