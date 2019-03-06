const { Schema, model } = require('mongoose');

const invoiceSchema = new Schema(
  {
    invoice_num: {
      type: Number,
      required: true
    },
    due_date: {
      type: Date,
      required: true
    },
    total_cost: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = model('Invoice', invoiceSchema);
