import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import userReducer from "./Reducer";
import logger from "redux-logger";
import PizzaReducer from "./PizzaReducer";

const rootReducer = combineReducers({
  userReducer,
  PizzaReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      process.env.NODE_ENV === "development" ? logger : []
    ),
});

export default store;
