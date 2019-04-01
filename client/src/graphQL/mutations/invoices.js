import { Post, inputToString } from "../index";

export const CreateInvoice = async (invoiceInput, returnedData) => {
  const result = inputToString(invoiceInput);
  console.log("invoice input:", result);
  const CreateInvoice = {
    query: `
            mutation {
                createInvoice(invoiceInput: {${result}}) {
                    ${returnedData}
                }
            }
        `
  };
  console.log("create invoice", CreateInvoice);
  const newInvoice = await Post(CreateInvoice);
  console.log("new invoice", newInvoice);
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
