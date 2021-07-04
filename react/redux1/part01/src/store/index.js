import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReaduxThunk from 'redux-thunk';

import { numState } from './states/num';
import { numReducer } from './reducers/module1';
// import {} from '@reduxjs/toolkit';

const reducersSquare = combineReducers({ module1: numReducer });

const statesSquare = {
  module1: numState,
};

const store = createStore(reducersSquare, statesSquare, applyMiddleware(ReaduxThunk));
export default store;
