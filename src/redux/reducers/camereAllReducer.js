import { LISTA_ALL_CAMERE, LISTA_ALL_CAMERE_FALLITO, LISTA_ALL_CAMERE_RICHIESTA } from "../actions/camereAction";

const initialState = {
  camere: [],
  loading: false,
  error: null,
  links: {},
  page: {},
};

const camereAllReducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTA_ALL_CAMERE_RICHIESTA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LISTA_ALL_CAMERE:
      return {
        ...state,
        loading: false,
        camere: action.payload.camere,
        links: action.payload.links,
        page: action.payload.page,
      };
    case LISTA_ALL_CAMERE_FALLITO:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default camereAllReducer;
