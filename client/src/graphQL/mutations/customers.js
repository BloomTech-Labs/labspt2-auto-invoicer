import { Post, inputToString } from '../index';

export const CreateCustomer = async (customerInput, returnedData) => {
  const result = inputToString(customerInput);

  const CreateCustomer = {
    query: `
      mutation {
        createCustomer(customerInput: {${result}}) {
          ${returnedData}
        }
      }
    `
  };
  const newCustomer = await Post(CreateCustomer);
  return newCustomer.data.data;
};

export const EditCustomer = async (customerID, editedData, returnedData) => {
  inputToString(editedData);

  const EditCustomer = {
    query: `
      mutation {
        editCustomer(customerID: "${customerID}", editCustomerInput: {${editedData}}) {
          ${returnedData}
        }
      }
    `
  };
  const editedCustomer = await Post(EditCustomer);
  return editedCustomer.data.data;
};

export const AddCustomerToCompany = async (
  customerID,
  companyID,
  returnedData
) => {
  const AddCustomerToCompany = {
    query: `
      mutation {
        addCustomerToCompany(customerID: "${customerID}", companyID: "${companyID}") {
          ${returnedData}
        }
      }
    `
  };
  const returnedCustomer = await Post(AddCustomerToCompany);
  return returnedCustomer.data.data;
};
