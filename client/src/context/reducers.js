export const GET_USER = 'GET_USER';
export const GET_COMPANIES = 'GET_COMPANIES';
export const GET_UPDATED_USER_DATA = 'GET_UPDATED_USER_DATA'

const getUser = (user, state) => {
  return { ...state, user };
};

const getCompanies = (companies, state) => {
  return { user: { ...state.user, companies } };
};

const getUpdatedUserData = (user, state) => {
  return {user: {...state.user, ...user} }
}

export const userReducer = (state, action) => {
  switch (action.type) {
    case GET_USER:
      return getUser(action.user, state);
    case GET_COMPANIES:
      return getCompanies(action.companies, state);
    case GET_UPDATED_USER_DATA:
      return getUpdatedUserData(action.user, state)
    default:
      return state;
  }
};
