import {
  ELIMINA_PRENOTAZIONE,
  ELIMINA_PRENOTAZIONE_FALLITA,
  ELIMINA_PRENOTAZIONE_RICHIESTA,
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

    case ELIMINA_PRENOTAZIONE_RICHIESTA:
      return {
        ...state,
        loading: true,
      };

    case ELIMINA_PRENOTAZIONE:
      return {
        ...state,
        loading: false,
        prenotazioni: state.prenotazioni.filter((prenotazione) => prenotazione.id !== action.payload),
      };

    case ELIMINA_PRENOTAZIONE_FALLITA:
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
