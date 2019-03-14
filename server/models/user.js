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
    }
  },
  { timestamps: true }
);

module.exports = model('User', userSchema);
