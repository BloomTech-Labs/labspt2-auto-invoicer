const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true
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
        ref: "Company"
      }
    ],
    invoices: [
      {
        type: Schema.Types.ObjectId,
        ref: "Invoice"
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

module.exports = model("User", userSchema);
