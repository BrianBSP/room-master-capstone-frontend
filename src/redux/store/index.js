import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducers/loginReducer";
import registraReducer from "../reducers/registraReducer";
import preventiviReducer from "../reducers/preventiviReducer";
import preventivoDettaglioReducer from "../reducers/preventivoDettaglioReducer";
import preventivoUpdateReducer from "../reducers/preventivoUpdateReducer";
import prenotazioniReducer from "../reducers/prenotazioniReducer";
import prenotazioneDettaglioReducer from "../reducers/prenotazioneDettaglioReducer";
import uploadImageReducer from "../reducers/uploadImageReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  registra: registraReducer,
  preventivi: preventiviReducer,
  dettaglioPreventivo: preventivoDettaglioReducer,
  updatePreventivo: preventivoUpdateReducer,
  prenotazioni: prenotazioniReducer,
  dettaglioPrenotazione: prenotazioneDettaglioReducer,
  uploadImage: uploadImageReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
