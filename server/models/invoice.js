const { Schema, model } = require('mongoose');

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
  },
  paid: {
    type: Boolean,
    default: false
  },
  companyID: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  userID: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  customerID: {
    type: String,
    required: true
  },
  invoiceItems: {
    type: [Schema.Types.ObjectId],
    ref: 'Item'
  }
});
module.exports = model('Invoice', invoiceSchema);
