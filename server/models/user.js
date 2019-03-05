const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    phone_num: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
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
