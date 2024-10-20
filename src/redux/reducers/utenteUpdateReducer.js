import { UPDATE_UTENTE, UPDATE_UTENTE_RICHIESTA } from "../actions/cercaUtentiAction";
import { UPDATE_PREV_FALLITO } from "../actions/preventiviAction";

const initialState = {
  riuscito: false,
  loading: false,
  error: null,
};

const utenteUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_UTENTE_RICHIESTA:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_UTENTE:
      return {
        ...state,
        loading: false,
        riuscito: true,
      };
    case UPDATE_PREV_FALLITO:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default utenteUpdateReducer;
