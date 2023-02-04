const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  label: String,
  photoUrl: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = PhotoSchema;