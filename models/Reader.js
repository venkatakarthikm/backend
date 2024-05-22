const mongoose = require("mongoose")

const readerschema = new mongoose.Schema({
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
    gender: {
      type: String,
      required:true,
      enum: ['male', 'female', 'others']    // enumaration : if the value is out of the given value throws the error
    },
    location: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
});

const reader = mongoose.model('reader',readerschema);

module.exports = reader;