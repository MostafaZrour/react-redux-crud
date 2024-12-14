import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './Reducer';

const rootReducer = combineReducers({
  userReducer,
})

const store = configureStore({
  reducer : rootReducer
});

export default store;
