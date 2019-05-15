import axios from "axios";

const inputToString = input => {
  const data = [];
  for (const key in input) {
    if (typeof input[key] === 'boolean') {
      data.push(`${key}: ${input[key]}`);
    } else {
      data.push(`${key}: "${input[key]}"`);
    }
  }
  input = data.join(", ");
  return input;
};

export const toUpdateUser = async (userID, editedData) => {
  editedData = inputToString(editedData)
  const userMutation = {
    query: `
      mutation {
        editUser(userId: "${userID}", editUserInput: {${editedData}}) {
          name, email, phoneNumber
        }
      }
    `
  }
  return await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/graphql`,
    userMutation
  )
}

export const toUpdateInvoice = async (invoiceID, editedData) => {
  editedData = inputToString(editedData)
  const invoiceMutation = {
    query: `
      mutation {
        editInvoice(invoiceId: "${invoiceID}", editInvoiceInput: {${editedData}}) {
          hidden, balance, _id
        }
      }
    `
  }
  return await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/graphql`,
    invoiceMutation
  ) 
}