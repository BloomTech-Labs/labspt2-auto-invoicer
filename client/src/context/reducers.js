export const GET_USER = 'GET_USER';

const getUser = (user, state) => {
  return { ...state, user };
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case GET_USER:
      return getUser(action.user, state);
    default:
      return state;
  }
};
