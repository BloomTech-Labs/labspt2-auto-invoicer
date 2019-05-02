export const GET_USER = 'GET_USER';
export const GET_COMPANIES = 'GET_COMPANIES';

const getUser = (user, state) => {
  return { ...state, user };
};

const getCompanies = (companies, state) => {
  return { user: { ...state.user, companies } };
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case GET_USER:
      return getUser(action.user, state);
    case GET_COMPANIES:
      return getCompanies(action.companies, state);
    default:
      return state;
  }
};
