import Post from '../index'

export const CreateCustomer = async (customerInput, returnedData) => {
  const data = [];
  for(let key in customerInput) {
    data.push(`${key}: "${customerInput[key]}"`)
  }
  customerInput = data.join(", ");

  const CreateCustomer = {
    query: `
      mutation {
        createCustomer(customerInput: {${customerInput}}) {
          ${returnedData}
        }
      }
    `
  }
  const newCustomer = await Post(CreateCustomer)
  return newCustomer.data.data
}

export const EditCustomer = async (customerID, editedData, returnedData) => {
  const data = [];
  for(let key in editedData) {
    data.push(`${key}: "${editedData[key]}"`)
  }
  editedData = data.join(", ");

  const EditCustomer = {
    query: `
      mutation {
        editCustomer(customerID: "${customerID}", editCustomerInput: {${editedData}}) {
          ${returnedData}
        }
      }
    `
  }
  const editedCustomer = await Post(EditCustomer)
  return editedCustomer.data.data
}

export const AddCustomerToCompany = async (customerID, companyID, returnedData) => {
  const AddCustomerToCompany = {
    query: `
      mutation {
        addCustomerToCompany(customerID: "${customerID}", companyID: "${companyID}") {
          ${returnedData}
        }
      }
    `
  }
  const returnedCustomer = await Post(AddCustomerToCompany)
  return returnedCustomer.data.data
}