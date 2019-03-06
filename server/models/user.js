const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
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
    ]
  },
  { timestamps: true }
);

module.exports = model('User', userSchema);
