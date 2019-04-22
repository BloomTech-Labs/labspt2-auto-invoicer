import { Post } from '../index';

export const FetchUsers = async returnedData => {
  const Users = {
    query: `
        query {
          users {
            ${returnedData}
          }
        }
      `
  };

  const listOfUsers = await Post(Users);
  return listOfUsers.data.data;
};

export const FetchUser = async (userId, returnedData) => {
  const User = {
    query: `
      query {
        user(userId: "${userId}") {
          ${returnedData}
        }
      } 
      `
  };

  const returnedUser = await Post(User);
  return returnedUser.data.data;
};
