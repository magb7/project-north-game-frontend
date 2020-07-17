const initial = {
  loggedIn: false,
};

const userReducer = (state = initial, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loggedIn: true,
        ...action.payload,
      };
    case 'LOGOUT':
      return {
        ...initial,
      };
    default:
      return state;
  }
};

export default userReducer;
