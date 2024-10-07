import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducers/loginReducer";
import registraReducer from "../reducers/registraReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  registra: registraReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
