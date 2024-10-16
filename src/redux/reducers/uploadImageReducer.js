import { UPDATE_PREV_FALLITO } from "../actions/preventiviAction";
import { UPLOAD_IMG_UTENTE, UPLOAD_IMG_UTENTE_RICHIESTA } from "../actions/uploadImageAction";

const initialState = {
  loading: false,
  riuscito: false,
  error: null,
  utente: {},
};

const uploadImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMG_UTENTE_RICHIESTA:
      return {
        ...state,
        loading: true,
        riuscito: false,
        error: null,
      };
    case UPLOAD_IMG_UTENTE:
      return {
        ...state,
        loading: false,
        riuscito: true,
        error: null,
        utente: {
          ...state.utente,
          avatar: action.payload.avatar,
        },
      };
    case UPDATE_PREV_FALLITO:
      return {
        ...state,
        loading: false,
        riuscito: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default uploadImageReducer;
