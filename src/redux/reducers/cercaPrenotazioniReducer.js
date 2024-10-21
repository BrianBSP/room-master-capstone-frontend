import {
  CERCA_PRENOTAZIONI,
  CERCA_PRENOTAZIONI_FALLITA,
  CERCA_PRENOTAZIONI_RICHIESTA,
} from "../actions/prenotazioniAction";

const initialState = {
  cercaPrenotazioni: [],
  ceraLoading: false,
  cercaError: null,
};
const cercaPrenotazioniReducer = (state = initialState, action) => {
  switch (action.type) {
    case CERCA_PRENOTAZIONI_RICHIESTA:
      return {
        ...state,
        cercaLoading: true,
        cercaError: null,
      };
    case CERCA_PRENOTAZIONI:
      return {
        ...state,
        cercaLoading: false,
        cercaPreventivi: action.payload,
      };
    case CERCA_PRENOTAZIONI_FALLITA:
      return {
        ...state,
        cercaLoading: false,
        cercaError: action.payload,
      };
    default:
      return state;
  }
};
export default cercaPrenotazioniReducer;
