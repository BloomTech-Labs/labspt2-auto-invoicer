import { Post, inputToString } from "../index";

export const CreateInvoice = async (invoiceInput, returnedData) => {
  inputToString(invoiceInput);

  const CreateInvoice = {
    query: `
            mutation {
                createInvoice(invoiceInput: {${invoiceInput}}) {
                    ${returnedData}
                }
            }
        `
  };
  const newInvoice = await Post(CreateInvoice);
  return newInvoice.data.data;
};

export const EditInvoice = async (invoiceID, editedData, returnedData) => {
  inputToString(editedData);

  const EditInvoice = {
    query: `
            mutation {
                editInvoice(invoiceID: "${invoiceID}", editInvoiceInput: {${editedData}}) {
                    ${returnedData}
                }
            }
        `
  };
  const editedInvoice = await Post(EditInvoice);
  return editedInvoice.data.data;
};

// AddInvoiceToUser or AddInvoiceToCompany?
export const AddInvoiceToCompany = async (
  invoiceID,
  companyID,
  returnedData
) => {
  const AddInvoiceToCompany = {
    query: `
            mutation {
                addInvoiceToCompany(invoiceID: "${invoiceID}", companyID: "${companyID}") {
                    ${returnedData}
                }
            }
        `
  };
  const returnedInvoice = await Post(AddInvoiceToCompany);
  return returnedInvoice.data.data;
};
