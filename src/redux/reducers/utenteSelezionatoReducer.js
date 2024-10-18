import {
  UTENTE_SELEZIONATO,
  UTENTE_SELEZIONATO_FALLITO,
  UTENTE_SELEZIONATO_RICHIESTA,
} from "../actions/cercaUtentiAction";

const initialState = {
  utente: {},
  loading: false,
  error: null,
};

const utenteSelezionatoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UTENTE_SELEZIONATO_RICHIESTA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UTENTE_SELEZIONATO:
      return {
        ...state,
        loading: false,
        utente: action.payload,
      };
    case UTENTE_SELEZIONATO_FALLITO:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default utenteSelezionatoReducer;
