import Post from '../index'

export const CreateCompany = async (companyInput, returnedData) => {
  const data = [];
  for(let key in companyInput) {
    data.push(`${key}: "${companyInput[key]}"`)
  }
  companyInput = data.join(", ");
  
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
  const data = [];
  for(let key in editedData) {
      data.push(`${key}: "${editedData[key]}"`)
  }
  editedData = data.join(", ")

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
