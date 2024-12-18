import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import userReducer from "./reducers/UserReducer";
import PizzaReducer from "./reducers/PizzaReducer";
import { productReducer } from "./products/ProductReducer";

const rootReducer = combineReducers({
  userReducer,
  PizzaReducer,
  productReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});

export default store;
