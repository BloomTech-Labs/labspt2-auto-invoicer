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
      type: String,
      required: true
    },
    country_code: {
      type: String,
      required: true
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
    companies: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Company'
      }
    ],
    google: {
      googleId: String,
      picture: String,
      gender: String,
      locale: String
    },
    facebook: {
      facebookId: String
    }
  },
  { timestamps: true }
);

module.exports = model('User', userSchema);
