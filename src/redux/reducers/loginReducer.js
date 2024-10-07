import { LOGIN_FALLITO, LOGIN_UTENTE, LOGIN_UTENTE_ERRORE } from "../actions/loginAction";
import { LOGOUT } from "../actions/logoutAction";

const initialState = {
  autenticato: false,
  accessToken: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_UTENTE:
      return {
        ...state,
        autenticato: true,
        accessToken: action.payload,
        error: null,
      };
    case LOGIN_FALLITO:
    case LOGIN_UTENTE_ERRORE:
      return {
        ...state,
        autenticato: false,
        accessToken: null,
        error: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        autenticato: false,
        accessToken: null,
        error: null,
      };

    default:
      return state;
  }
};

export default loginReducer;
