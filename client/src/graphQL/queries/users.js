import Post from "..";

export const FetchUsers = async (returnData) => {
  const Users = {
      query: `
        query {
          users {
            ${returnData}
          }
        }
      `
    }

    const listOfUsers = await Post(Users)
    return listOfUsers.data.data
};


export const FetchUser = async (userID, returnData) => {
  const User = {
    query: `
      query {
        user(userID: "${userID}") {
          ${returnData}
        }
      } 
      `
    }

  const returnedUser = await Post(User)
  return returnedUser.data.data
};