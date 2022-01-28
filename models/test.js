const mongoose = require('mongoose');

const { Schema } = mongoose;

const TestSchema = new Schema({
  a_string: String,
  a_date: Date,
});

const testSchema = mongoose.model('SomeModel', TestSchema);

module.exports = testSchema;
