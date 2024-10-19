import { CERCA_UTENTI, CERCA_UTENTI_FALLITO, CERCA_UTENTI_RICHIESTA } from "../actions/cercaUtentiAction";

const initialState = {
  cercaUtenti: [],
  cercaLoading: false,
  cercaError: null,
};

const cercaUtentiReducer = (state = initialState, action) => {
  switch (action.type) {
    case CERCA_UTENTI_RICHIESTA:
      return {
        ...state,
        cercaLoading: true,
        cercaError: null,
      };
    case CERCA_UTENTI:
      return {
        ...state,
        cercaLoading: false,
        cercaUtenti: action.payload,
      };
    case CERCA_UTENTI_FALLITO:
      return {
        ...state,
        cercaLoading: false,
        cercaError: action.payload,
      };
    default:
      return state;
  }
};

export default cercaUtentiReducer;
