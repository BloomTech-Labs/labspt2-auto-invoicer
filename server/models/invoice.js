const { Schema, model } = require("mongoose");

const invoiceSchema = new Schema({
  invoiceNumber: {
    type: String,
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
    type: String,
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
    type: String,
    required: true
  },
  subtotal: {
    type: String,
    required: true
  },
  discount: {
    type: String,
    required: true
  },
  tax: {
    type: String,
    required: true
  },
  shipping: {
    type: String,
    required: true
  },
  total: {
    type: String,
    required: true
  },
  amountPaid: {
    type: String,
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
