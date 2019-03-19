const { Schema, model } = require('mongoose');

const invoiceSchema = new Schema(
  {
    createdBy: {
      type: Schema.Types.ObjectId
    },
    invoice_num: {
      type: String,
      required: true
    },
    company_id: {
      type: Schema.Types.ObjectId
    },
    customer_id: {
      type: Schema.Types.ObjectId
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('Invoice', invoiceSchema);
