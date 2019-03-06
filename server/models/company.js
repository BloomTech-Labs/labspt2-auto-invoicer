const { Schema, model } = require('mongoose');

const companySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone_num: {
    type: String,
    required: true
  },
  email: {
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
  company_code: {
    type: Number,
    required: true
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  admins: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

module.exports = model('Company', companySchema);
