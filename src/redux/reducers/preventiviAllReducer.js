import {
  LISTA_ALL_PREVENTIVI,
  LISTA_ALL_PREVENTIVI_FALLITO,
  LISTA_ALL_PREVENTIVI_RICHIERSTA,
} from "../actions/preventiviAction";

const initialState = {
  preventivi: [],
  loading: false,
  error: null,
  links: {},
  page: {},
};

const preventiviAllReducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTA_ALL_PREVENTIVI_RICHIERSTA:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case LISTA_ALL_PREVENTIVI:
      return {
        ...state,
        loading: false,
        preventivi: action.payload.preventivi,
        links: action.payload.links,
        page: action.payload.page,
      };
    case LISTA_ALL_PREVENTIVI_FALLITO:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default preventiviAllReducer;
