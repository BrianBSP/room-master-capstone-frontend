import {
  CREA_PREVENTIVO,
  CREA_PREVENTIVO_FALLITO,
  CREA_PREVENTIVO_RICHIESTA,
  DETTAGLI_PREV,
  DETTAGLI_PREV_FALLITO,
  DETTAGLI_PREV_RICHIESTA,
} from "../actions/preventiviAction";

const initialState = {
  preventivo: {},
  loading: false,
  error: null,
};

const preventivoDettaglioReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETTAGLI_PREV_RICHIESTA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DETTAGLI_PREV:
      return {
        ...state,
        loading: false,
        preventivo: action.payload,
      };
    case DETTAGLI_PREV_FALLITO:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CREA_PREVENTIVO_RICHIESTA:
      return {
        ...state,
        loading: true,
      };

    case CREA_PREVENTIVO:
      return {
        ...state,
        loading: false,
        preventivo: action.payload,
      };
    case CREA_PREVENTIVO_FALLITO:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default preventivoDettaglioReducer;
