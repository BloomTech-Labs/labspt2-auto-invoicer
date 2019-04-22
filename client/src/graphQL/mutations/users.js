import { Post, inputToString } from '../index';

export const CreateUser = async (userInput, returnedData) => {
  inputToString(userInput);

  const CreateUser = {
    query: `
      mutation {
        createUser(userInput: {${userInput}} ) {
          ${returnedData}
        }
      }
    `
  };

  const newUser = await Post(CreateUser);
  return newUser.data.data;
};

export const EditUser = async (userId, editedData, returnedData) => {
  editedData = inputToString(editedData);

  const EditUser = {
    query: `
        mutation {
          editUser(userId: "${userId}", editUserInput: {${editedData}}) {
            ${returnedData}
          }
        }
      `
  };

  const editedUser = await Post(EditUser);
  return editedUser.data.data;
};

export const AddUserToCompany = async (userId, companyId, returnedData) => {
  const AddUserToCompany = {
    query: `
      mutation {
        addUserToCompany(userId: "${userId}", companyId: "${companyId}") {
          ${returnedData}
        }
      }
    `
  };

  const returnedCompany = await Post(AddUserToCompany);
  return returnedCompany.data.data;
};
