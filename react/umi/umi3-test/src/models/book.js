export default {
  namespace: 'book',
  state: {
    bookName: 'book',
    bookAge: 12,
  },
  reducers: {
    add(state) {
      state.bookAge += 1;
      return { ...state };
    },
  },
  effects: {
    *addAge(action, { put }) {
      yield put({ type: 'add' });
    },
  },
};
