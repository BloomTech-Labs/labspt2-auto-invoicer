const Invoice = require('../../models/invoice');
const Company = require('../../models/company');
const User = require('../../models/user');
const Customer = require('../../models/customer');
const { findDocumentById, findAllDocuments } = require('../helpers');

module.exports = {
  invoices: () => {
    return findAllDocuments(Invoice);
  },
  invoice: ({ invoiceID }) => {
    return findDocumentById(invoiceID, Invoice);
  },
  createInvoice: async ({ invoiceInput }) => {
    try {
      // ID from logged-in user creating the invoice
      const user = await User.findById('5c88bec6c5cf5c186025a084');
      // find or create: if new company => createCompany
      const company = await Company.findById('5c88bf30cc66691204cf83f5');
      // find or create: if new customer => createCustomer
      const customer = await Customer.findById('5c8b022992cd4d2f34663f8f');

      const invoice = new Invoice({
        createdBy: user._id,
        invoice_num: invoiceInput.invoice_num,
        company_id: company._id,
        customer_id: customer._id
      });

      const newInvoice = await invoice.save();
      user.invoices.push(newInvoice._doc._id);
      company.invoices.push(newInvoice._doc._id);
      customer.invoices.push(newInvoice._doc._id);
      await user.save();
      await company.save();
      await customer.save();
      return {
        ...newInvoice._doc
      };
    } catch (err) {
      throw err;
    }
  }
};
