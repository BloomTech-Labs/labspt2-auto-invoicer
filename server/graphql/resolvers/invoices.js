const Invoice = require("../../models/invoice");
const Company = require("../../models/company");
const User = require("../../models/user");
const Customer = require("../../models/customer");

const {
  findDocumentById,
  findAllDocuments,
  updateDocumentById
} = require("../helpers");

module.exports = {
  invoices: () => {
    return findAllDocuments(Invoice);
  },
  invoice: ({ invoiceID }) => {
    return findDocumentById(invoiceID, Invoice);
  },
  createInvoice: async ({ invoiceInput }) => {
    const company = await Company.findById(invoiceInput.companyID);
    if (!company.unlimited_tier) {
      if (!company.credits) {
        throw new Error("");
      }
    }
    try {
      const invoice = new Invoice({
        companyID: invoiceInput.companyID,
        userID: invoiceInput.userID,
        customerID: invoiceInput.customerID,
        companyName: invoiceInput.companyName,
        userName: invoiceInput.userName,
        invoiceNumber: invoiceInput.invoiceNumber,
        invoiceDescription: invoiceInput.invoiceDescription,
        selectedDate: invoiceInput.selectedDate,
        invoiceDueDate: invoiceInput.invoiceDueDate,
        company: invoiceInput.company,
        cityTo: invoiceInput.cityTo,
        stateTo: invoiceInput.stateTo,
        zipCodeTo: invoiceInput.zipCodeTo,
        addressTo: invoiceInput.addressTo,
        emailTo: invoiceInput.emailTo,
        subtotal: invoiceInput.subtotal,
        discount: invoiceInput.discount,
        tax: invoiceInput.tax,
        shipping: invoiceInput.shipping,
        total: invoiceInput.total,
        amountPaid: invoiceInput.amountPaid,
        balanceDue: invoiceInput.balanceDue,
        notes: invoiceInput.notes,
        terms: invoiceInput.terms

        // Original Invoice Resolver
        // companyID: invoiceInput.companyID,
        // userID: invoiceInput.userID,
        // customerID: invoiceInput.customerID,
        // companyName: invoiceInput.companyName,
        // userName: invoiceInput.userName,
        // invoiceNumber: invoiceInput.invoiceNumber,
        // languageSelection: invoiceInput.languageSelection,
        // currencySelection: invoiceInput.currencySelection,
        // addressFrom: invoiceInput.addressFrom,
        // addressTo: invoiceInput.addressTo,
        // cityTo: invoiceInput.cityTo,
        // stateRegionTo: invoiceInput.stateRegionTo,
        // zipCodeTo: invoiceInput.zipCodeTo,
        // clientEmailTo: invoiceInput.clientEmailTo,
        // selectedDate: invoiceInput.selectedDate,
        // invoiceDueDate: invoiceInput.invoiceDueDate,
        // balanceDue: invoiceInput.balanceDue,
        // subtotal: invoiceInput.subtotal,
        // discount: invoiceInput.discount,
        // tax: invoiceInput.tax,
        // shipping: invoiceInput.shipping,
        // total: invoiceInput.total,
        // amountPaid: invoiceInput.amountPaid,
        // invoiceNotes: invoiceInput.invoiceNotes,
        // invoiceTerms: invoiceInput.invoiceTerms
      });

      const newInvoice = await invoice.save();
      const user = await User.findById(newInvoice._doc.userID);
      const customer = await Customer.findById(newInvoice._doc.customerID);
      user.invoices.push(newInvoice._doc._id);
      company.invoices.push(newInvoice._doc._id);
      customer.invoices.push(newInvoice._doc._id);
      if (!company.unlimited_tier) {
        company.credits -= 1;
      }
      await user.save();
      await company.save();
      await customer.save();
      return {
        ...newInvoice._doc
      };
    } catch (err) {
      throw err;
    }
  },
  editInvoice: ({ editInvoiceInput, invoiceID }) => {
    return updateDocumentById(editInvoiceInput, invoiceID, Invoice);
  }
};
