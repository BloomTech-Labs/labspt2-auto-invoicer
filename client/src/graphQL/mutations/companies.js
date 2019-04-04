import {Post, inputToString} from '../index'

export const CreateCompany = async (companyInput, returnedData) => {
  const result = inputToString(companyInput)
  
  const CreateCompany = {
    query: `
      mutation {
        createCompany(companyInput: {${result}} ) {
          ${returnedData}
        }
      }
    `
  };

  const newCompany = await Post(CreateCompany)
  return newCompany.data.data
}

export const EditCompany = async (companyID, editedData, returnedData) => {
const result = inputToString(editedData)

    const EditCompany = {
      query: `
        mutation {
          editCompany(companyID: "${companyID}", editCompanyInput: {${result}}) {
            ${returnedData}
          }
        }
      `
    };

    const editedCompany = await Post(EditCompany)
    return editedCompany.data.data
}
