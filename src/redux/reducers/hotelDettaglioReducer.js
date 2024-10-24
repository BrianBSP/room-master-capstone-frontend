import { DETTAGLIO_UTENTE_FALLITO } from "../actions/cercaUtentiAction";
import { DETTAGLI_HOTEL, DETTAGLI_HOTEL_RICHIESTA } from "../actions/hotelsAction";

const initialState = {
  hotel: {},
  loading: false,
  error: null,
};

const hotelDettaglioReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETTAGLI_HOTEL_RICHIESTA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DETTAGLI_HOTEL:
      return {
        ...state,
        hotel: action.payload,
        loading: false,
      };
    case DETTAGLIO_UTENTE_FALLITO:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default hotelDettaglioReducer;
