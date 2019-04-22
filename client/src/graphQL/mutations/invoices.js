import { Post, inputToString } from '../index';

export const CreateInvoice = async (invoiceInput, returnedData) => {
  const result = inputToString(invoiceInput);
  const CreateInvoice = {
    query: `
            mutation {
                createInvoice(invoiceInput: {${result}}) {
                    ${returnedData}
                }
            }
        `
  };
  const newInvoice = await Post(CreateInvoice);
  return newInvoice.data.data;
};

export const EditInvoice = async (invoiceId, editedData, returnedData) => {
  editedData = inputToString(editedData);

  const EditInvoice = {
    query: `
            mutation {
                editInvoice(invoiceId: "${invoiceId}", editInvoiceInput: {${editedData}}) {
                    ${returnedData}
                }
            }
        `
  };
  const editedInvoice = await Post(EditInvoice);
  return editedInvoice.data.data;
};

export const EditAmountPaid = async (invoiceId, amountPaid, returnedData) => {
  // const amount = amountPaid.toString();
  const EditAmountPaid = {
    query: `
                mutation {
                    editInvoice(invoiceId: "${invoiceId}", editInvoiceInput: {amountPaid: "${amountPaid}"}) {
                        ${returnedData}
                    }
                }
            `
  };
  const editedAmount = await Post(EditAmountPaid);
  return editedAmount.data.data;
};

// AddInvoiceToUser or AddInvoiceToCompany?
export const AddInvoiceToCompany = async (
  invoiceId,
  companyId,
  returnedData
) => {
  const AddInvoiceToCompany = {
    query: `
            mutation {
                addInvoiceToCompany(invoiceId: "${invoiceId}", companyId: "${companyId}") {
                    ${returnedData}
                }
            }
        `
  };
  const returnedInvoice = await Post(AddInvoiceToCompany);
  return returnedInvoice.data.data;
};
