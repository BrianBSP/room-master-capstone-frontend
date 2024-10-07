import { LOGIN_FALLITO, LOGIN_UTENTE, LOGIN_UTENTE_ERRORE } from "../actions/loginAction";
import { LOGOUT } from "../actions/logoutAction";

const initialState = {
  utente: null,
  autenticato: false,
  accessToken: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_UTENTE:
      return {
        ...state,
        utente: action.payload.utente,
        autenticato: true,
        accessToken: action.payload.accessToken,
        error: null,
      };
    case LOGIN_FALLITO:
    case LOGIN_UTENTE_ERRORE:
      return {
        ...state,
        utente: null,
        autenticato: false,
        accessToken: null,
        error: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        utente: null,
        autenticato: false,
        accessToken: null,
        error: null,
      };

    default:
      return state;
  }
};

export default loginReducer;
