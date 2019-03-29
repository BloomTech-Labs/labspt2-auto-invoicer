import {Post, inputToString} from '../index'

export const CreateCompany = async (companyInput, returnedData) => {
  inputToString(companyInput)
  
  const CreateCompany = {
    query: `
      mutation {
        createCompany(companyInput: {${companyInput}} ) {
          ${returnedData}
        }
      }
    `
  };

  const newCompany = await Post(CreateCompany)
  return newCompany.data.data
}

export const EditCompany = async (companyID, editedData, returnedData) => {
inputToString(editedData)

    const EditCompany = {
      query: `
        mutation {
          editCompany(companyID: "${companyID}", editCompanyInput: {${editedData}}) {
            ${returnedData}
          }
        }
      `
    };

    const editedCompany = await Post(EditCompany)
    return editedCompany.data.data
}
