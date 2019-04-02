const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  rate: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});

module.exports = model('Item', itemSchema);
