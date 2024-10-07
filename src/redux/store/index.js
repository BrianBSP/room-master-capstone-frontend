import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducers/loginReducer";
import registraReducer from "../reducers/registraReducer";
import preventiviReducer from "../reducers/preventiviReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  registra: registraReducer,
  preventivi: preventiviReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
