const { default: mongoose } = require('mongoose');

class BaseModel {
  constructor() {}

  init(name, schema) {
    this.model = mongoose.model(name, schema);
  }

  get(id) {
    let query = this.model.findById(id);
    return query.exec();
  }

  getAll() {
    let query = this.model.find();
    return query.exec();
  }

  create(data) {
    let result = this.model.create(data);
    return result;
  }

  delete(id) {
    let result = this.model.deleteOne({ _id: id });
    return result;
  }
}

module.exports = BaseModel;
