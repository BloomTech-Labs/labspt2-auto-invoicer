const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    phone_num: {
      type: String
    },
    country_code: {
      type: String
    },
    address_1: {
      type: String
    },
    address_2: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    postal_code: {
      type: String
    },
    country: {
      type: String
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
    ],
    googleId: {
      type: String
    },
    facebookId: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = model('User', userSchema);
