import { Post } from '../index';

export const FetchInvoices = async returnedData => {
  const Invoices = {
    query: `
            query {
                invoices {
                    ${returnedData}
                }
            }
        `
  };
  const listOfInvoices = await Post(Invoices);
  return listOfInvoices.data.data;
};

export const FetchInvoice = async (invoiceId, returnedData) => {
  const Invoice = {
    query: `
            query {
                invoice(invoiceId: "${invoiceId}") {
                    ${returnedData}
                }
            }
        `
  };
  const returnedInvoice = await Post(Invoice);
  return returnedInvoice.data.data;
};
