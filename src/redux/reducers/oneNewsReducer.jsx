const store = {
  oneNews: {},
};

const newsReducer = (state = { ...store }, action) => {
  switch (action.type) {
    case 'GET_ONE_NEWS':
      return { ...store, oneNews: action.data };

    default:
      return state;
  }
};

export default newsReducer;