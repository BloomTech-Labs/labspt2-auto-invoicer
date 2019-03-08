const {
  Schema,
  model
} = require('mongoose');

const invoiceSchema = new Schema({
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
  },
  company_id: {
    type: Schema.Types.ObjectId,
    ref: 'Company'
  },
  archive: {
    type: Boolean,
    required: true
  },
  paid: {
    type: Boolean,
    required: true
  },
  services: [{
    type: Schema.Types.ObjectId,
    ref: 'Service'
  }],
  service_done_by: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  item: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  rate: {
    type: Number,
    required: true
  },
  subtotal: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  tax: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  shipping: {
    type: Number,
    required: true
  },
  amount_paid: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model('Invoice', invoiceSchema);