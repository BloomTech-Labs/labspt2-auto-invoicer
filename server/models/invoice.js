const { Schema, model } = require("mongoose");

const invoiceSchema = new Schema({
  invoiceNumber: {
    type: Number,
    required: true
  },
  languageSelection: {
    type: String,
    required: true
  },
  currencySelection: {
    type: String,
    required: true
  },
  addressFrom: {
    type: String,
    required: true
  },
  addressTo: {
    type: String,
    required: true
  },
  cityTo: {
    type: String,
    required: false
  },
  stateRegionTo: {
    type: String,
    required: false
  },
  zipCodeTo: {
    type: Number,
    required: true
  },
  clientEmailTo: {
    type: String,
    required: true
  },
  selectedDate: {
    type: String,
    required: true
  },
  invoiceDueDate: {
    type: String,
    required: true
  },
  balanceDue: {
    type: Number,
    required: true
  },
  subtotal: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  tax: {
    type: Number,
    required: true
  },
  shipping: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  amountPaid: {
    type: Number,
    required: true
  },
  invoiceNotes: {
    type: String,
    required: true
  },
  invoiceTerms: {
    type: String,
    required: true
  }

  // invoiceItems: [{...}]
  // (not required) subtotal, tax, total, invoiceNotes, invoiceTerms
});
module.exports = model("Invoice", invoiceSchema);
