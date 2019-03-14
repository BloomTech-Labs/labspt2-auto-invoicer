const Invoice = require('../../models/invoice');
const { findDocumentById, findAllDocuments } = require('../helpers');

module.exports = {
  invoices: () => {
    return findAllDocuments(Invoice);
  },
  invoice: async ({ invoiceID }) => {
    return findDocumentById(invoiceID, Invoice);
  },
};
