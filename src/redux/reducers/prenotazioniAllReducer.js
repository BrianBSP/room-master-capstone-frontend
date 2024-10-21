import {
  LISTA_ALL_PRENOTAZIONI,
  LISTA_ALL_PRENOTAZIONI_FALLITO,
  LISTA_ALL_PRENOTAZIONI_RICHIERSTA,
} from "../actions/prenotazioniAction";

const initialState = {
  prenotazioni: [],
  loading: false,
  error: null,
  links: {},
  page: {},
};

const prenotazioniAllReducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTA_ALL_PRENOTAZIONI_RICHIERSTA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LISTA_ALL_PRENOTAZIONI:
      return {
        ...state,
        loading: false,
        prenotazioni: action.payload.prenotazioni,
        links: action.payload.links,
        page: action.payload.page,
      };
    case LISTA_ALL_PRENOTAZIONI_FALLITO:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default prenotazioniAllReducer;
