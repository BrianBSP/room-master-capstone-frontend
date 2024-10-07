import { REGISTRA_UTENTE, REGISTRAZIONE_FALLITA, REGISTRAZIONE_UTENTE_ERRORE } from "../actions/registraAction";

const initialState = {
  registrato: false,
  nuovoUtente: null,
  error: null,
};

const registraReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRA_UTENTE:
      return {
        ...state,
        registrato: true,
        nuovoUtente: action.payload,
        error: null,
      };

    case REGISTRAZIONE_FALLITA:
    case REGISTRAZIONE_UTENTE_ERRORE:
      return {
        ...state,
        registrato: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default registraReducer;
