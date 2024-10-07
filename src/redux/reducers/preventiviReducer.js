import { GET_LISTA_PREVENTIVI, LISTA_PREVENTIVI_ERROR, LISTA_PREVENTIVI_RICHIERSTA } from "../actions/preventiviAction";

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

    default:
      return state;
  }
};

export default preventiviReducer;
