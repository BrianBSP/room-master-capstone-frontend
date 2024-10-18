import { CERCA_UTENTI, CERCA_UTENTI_FALLITO, CERCA_UTENTI_RICHIESTA } from "../actions/cercaUtentiAction";

const initialState = {
  utenti: [],
  loading: false,
  error: null,
};

const cercaUtentiReducer = (state = initialState, action) => {
  switch (action.type) {
    case CERCA_UTENTI_RICHIESTA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CERCA_UTENTI:
      return {
        ...state,
        loading: false,
        utenti: action.payload,
      };
    case CERCA_UTENTI_FALLITO:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cercaUtentiReducer;
