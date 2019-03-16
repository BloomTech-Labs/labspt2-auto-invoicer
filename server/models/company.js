const { Schema, model } = require('mongoose');

const companySchema = new Schema({
  name: {
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
<<<<<<< HEAD
=======
  },
  country_code: {
    type: String,
    required: true
>>>>>>> corrected the fields in the Company schema
  },
  address_1: {
    type: String,
    required: true
  },
  address_2: {
    type: String
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  postal_code: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  unlimited_tier: {
    type: Boolean,
    default: false
  },
  credits: {
    type: Number,
    default: 3
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  customers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Customer'
    }
  ],
  invoices: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Invoice'
    }
  ]
});

module.exports = model('Company', companySchema);
