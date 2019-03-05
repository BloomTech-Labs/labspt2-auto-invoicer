const { Schema, model } = require('mongoose');

const invoiceSchema = new Schema({});

module.exports = model('Invoice', invoiceSchema);
