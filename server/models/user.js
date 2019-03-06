const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: true
    },
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
    },
    active: {
      type: Boolean,
      required: true
    },
    companies: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Company'
      }
    ]
  },
  { timestamps: true }
);

module.exports = model('User', userSchema);
