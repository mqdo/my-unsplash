const { default: mongoose } = require('mongoose');

class BaseModel {
  constructor() {}

  init(name, schema) {
    this.model = mongoose.model(name, schema);
  }

  async get(id) {
    const result = await this.model.findById(id);
    return result;
  }

  async getAll() {
    const result = await this.model.find().sort({ date: -1 });
    return result;
  }

  async getByLabel(label) {
    const regex = new RegExp(label, 'g');
    const result = await this.model.find({ label: regex });
    return result;
  }

  create(data) {
    let result = this.model.create(data);
    return result;
  }

  async delete(id) {
    let result = await this.model.findByIdAndDelete(id);
    return result;
  }
}

module.exports = BaseModel;
