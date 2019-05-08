export const GET_USER = 'GET_USER';
export const GET_COMPANIES = 'GET_COMPANIES';
export const GET_COMPANY = 'GET_COMPANY'
export const GET_UPDATED_USER_DATA = 'GET_UPDATED_USER_DATA'

const getUser = (user, state) => {
  return { ...state, user };
};

const getCompanies = (companies, state) => {
  return { ...state, user: { ...state.user, companies } };
};

const getCompany = (company, state) => {
  return {...state, company}
}

const getUpdatedUserData = (user, state) => {
  return {...state, user: {...state.user, ...user} }
}

export const userReducer = (state, action) => {
  switch (action.type) {
    case GET_USER:
      return getUser(action.user, state);
    case GET_COMPANIES:
      return getCompanies(action.companies, state);
    case GET_UPDATED_USER_DATA:
      return getUpdatedUserData(action.user, state);
    case GET_COMPANY:
      return getCompany(action.company, state)
    default:
      return state;
  }
};
