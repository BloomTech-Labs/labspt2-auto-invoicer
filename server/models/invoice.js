const { Schema, model } = require('mongoose');

const invoiceSchema = new Schema(
  {
    invoice_num: {
      type: Number,
      required: true,
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company',
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: 'Customer',
    },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Item',
      },
    ],
    due_date: {
      type: Date,
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    shipping: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    total_cost: {
      type: Number,
      required: true,
    },
    paid: {
      type: Boolean,
      required: true,
    },
    archive: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Invoice', invoiceSchema);
