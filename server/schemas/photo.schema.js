const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  label: String,
  photoUrl: String
});

module.exports = PhotoSchema;