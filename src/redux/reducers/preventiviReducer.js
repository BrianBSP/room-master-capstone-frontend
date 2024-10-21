import {
  ACCETTA_PREV_FAIL,
  ACCETTA_PREV_RICHIESTA,
  ACCETTA_PREVENTIVO,
  ELIMINA_PREVENTIVO,
  ELIMINA_PREVENTIVO_FALLITA,
  ELIMINA_PREVENTIVO_RICHIESTA,
  GET_LISTA_PREVENTIVI,
  LISTA_PREVENTIVI_ERROR,
  LISTA_PREVENTIVI_RICHIERSTA,
} from "../actions/preventiviAction";

const initialState = {
  preventivi: [],
  loading: false,
  error: null,
};

const preventiviReducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTA_PREVENTIVI_RICHIERSTA:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_LISTA_PREVENTIVI:
      return {
        ...state,
        loading: false,
        preventivi: action.payload,
      };

    case LISTA_PREVENTIVI_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ACCETTA_PREVENTIVO:
      return {
        ...state,
        loading: false,
        preventivi: state.preventivi.map((preventivo) =>
          preventivo.id === action.payload ? { ...preventivo, accettato: true } : preventivo
        ),
      };

    case ACCETTA_PREV_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ACCETTA_PREV_RICHIESTA:
      return {
        ...state,
        loading: true,
      };

    case ELIMINA_PREVENTIVO_RICHIESTA:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ELIMINA_PREVENTIVO:
      return {
        ...state,
        loading: false,
        preventivi: state.preventivi.filter((preventivo) => preventivo.id !== action.payload),
      };

    case ELIMINA_PREVENTIVO_FALLITA:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default preventiviReducer;
