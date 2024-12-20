import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducers/loginReducer";
import registraReducer from "../reducers/registraReducer";
import preventiviReducer from "../reducers/preventiviReducer";
import preventivoDettaglioReducer from "../reducers/preventivoDettaglioReducer";
import preventivoUpdateReducer from "../reducers/preventivoUpdateReducer";
import prenotazioniReducer from "../reducers/prenotazioniReducer";
import prenotazioneDettaglioReducer from "../reducers/prenotazioneDettaglioReducer";
import uploadImageReducer from "../reducers/uploadImageReducer";
import cercaUtentiReducer from "../reducers/cercaUtentiReducer";
import utentiReducer from "../reducers/utentiReducer";
import utenteSelezionatoReducer from "../reducers/utenteSelezionatoReducer";
import utenteUpdateReducer from "../reducers/utenteUpdateReducer";
import cercaPreventiviReducer from "../reducers/cercaPreventiviReducer";
import preventiviAllReducer from "../reducers/preventiviAllReducer";
import cercaPrenotazioniReducer from "../reducers/cercaPrenotazioniReducer";
import prenotazioniAllReducer from "../reducers/prenotazioniAllReducer";
import cameraDettaglioReducer from "../reducers/cameraDettaglioReducer";
import camereAllReducer from "../reducers/camereAllReducer";
import camereReducer from "../reducers/camereReducer";
import hotelsReducer from "../reducers/hotelsReducer";
import hotelDettaglioReducer from "../reducers/hotelDettaglioReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  registra: registraReducer,
  preventivi: preventiviReducer,
  dettaglioPreventivo: preventivoDettaglioReducer,
  updatePreventivo: preventivoUpdateReducer,
  prenotazioni: prenotazioniReducer,
  dettaglioPrenotazione: prenotazioneDettaglioReducer,
  uploadImage: uploadImageReducer,
  cercaUtenti: cercaUtentiReducer,
  utenti: utentiReducer,
  utenteSelezionato: utenteSelezionatoReducer,
  utenteUpdate: utenteUpdateReducer,
  cercaPreventivi: cercaPreventiviReducer,
  preventiviAll: preventiviAllReducer,
  cercaPrenotazioni: cercaPrenotazioniReducer,
  prenotazioniAll: prenotazioniAllReducer,
  cameraDettaglio: cameraDettaglioReducer,
  camereAll: camereAllReducer,
  camere: camereReducer,
  hotels: hotelsReducer,
  hotelDettaglio: hotelDettaglioReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
