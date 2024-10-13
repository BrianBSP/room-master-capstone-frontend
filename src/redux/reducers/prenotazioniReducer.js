import {
  GET_LISTA_PRENOTAZIONI,
  LISTA_PRENOTAZIONI_FALLITO,
  RICHIESTA_LISTA_PRENOTAZIONI,
} from "../actions/prenotazioniAction";

const initialState = {
  prenotazioni: [],
  loading: false,
  error: null,
};

const prenotazioniReducer = (state = initialState, action) => {
  switch (action.type) {
    case RICHIESTA_LISTA_PRENOTAZIONI:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_LISTA_PRENOTAZIONI:
      return {
        ...state,
        loading: false,
        prenotazioni: action.payload,
      };

    case LISTA_PRENOTAZIONI_FALLITO:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default prenotazioniReducer;
