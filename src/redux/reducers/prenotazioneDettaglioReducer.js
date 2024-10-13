import {
  DETTAGLI_PRENOTAZIONE,
  DETTAGLI_PRENOTAZIONE_FALLITA,
  DETTAGLI_PRENOTAZIONE_RICHIESTA,
} from "../actions/prenotazioniAction";

const initialState = {
  prenotazione: {},
  loading: false,
  error: null,
};

const prenotazioneDettaglioReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETTAGLI_PRENOTAZIONE_RICHIESTA:
      return {
        ...state,
        loading: true,
      };
    case DETTAGLI_PRENOTAZIONE:
      return {
        ...state,
        loading: false,
        prenotazione: action.payload,
      };

    case DETTAGLI_PRENOTAZIONE_FALLITA:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default prenotazioneDettaglioReducer;
