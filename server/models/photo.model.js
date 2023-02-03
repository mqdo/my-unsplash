const mongoose = require('mongoose');

const BaseModel = require('./base.model')
const PhotoSchema = require('../schemas/photo.schema');

class PhotoModel extends BaseModel {
  constructor() {
    super();
    this.init('photo', PhotoSchema);
  }
}

module.exports = new PhotoModel();