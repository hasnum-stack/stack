const reducerRouter = {
  PLUS(state, action) {
    return { ...state, value: state.value + action.payload };
  },
  MINUS(state, action) {
    return { ...state, value: state.value - action.payload };
  },
};

const numReducer = (state = {}, action) => {
  return reducerRouter[action.type]?.(state, action) || state;
  // if (action.type === 'ADD') {
  //   return { ...state, value: state.value + action.payload };
  // }
  // if (action.type === 'BBB') {
  //   return { ...state, bbb: state.bbb + action.payload };
  // }
  // return state;
};
export { numReducer };
