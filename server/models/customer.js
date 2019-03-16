const { Schema, model } = require('mongoose');

const customerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone_num: {
    type: String,
    required: true
  },
  companies: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Company'
    }
  ],
  invoices: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Invoice'
    }
  ]
});

module.exports = model('Customer', customerSchema);
