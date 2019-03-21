import Post from '../index'

export const CreateUser = async (userInput, returnedData) => {
  const data = [];
  for(let key in userInput) {
    data.push(`${key}: "${userInput[key]}"`)
  }
  userInput = data.join(", ");
  
  const CreateUser = {
    query: `
      mutation {
        createUser(userInput: {${userInput}} ) {
          ${returnedData}
        }
      }
    `
  };

  const NewUser = await Post(CreateUser)
  return NewUser.data.data
}

export const EditUser = async (userID, editedData, returnedData) => {
  const data = [];
  for(let key in editedData) {
      data.push(`${key}: "${editedData[key]}"`)
  }
  editedData = data.join(", ")

    const EditUser = {
      query: `
        mutation {
          editUser(userID: "${userID}", editUserInput: {${editedData}}) {
            ${returnedData}
          }
        }
      `
    };

    const editedUser = await Post(EditUser)
    return editedUser.data.data
}