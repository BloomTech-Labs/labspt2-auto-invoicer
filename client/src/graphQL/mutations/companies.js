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
editedData = inputToString(editedData)

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

export const BuyPlanOrCredits = async (companyID, quantity, returnedData) => {
  const BuyPlanOrCredits = {
    query: `
      mutation {
        buyPlanOrCredits(companyID: "${companyID}", quantity: ${quantity}) {
          ${returnedData}
        }
      }
    `
  };

  const updatedCompany = await Post(BuyPlanOrCredits)
  return updatedCompany.data.data
  //change
}