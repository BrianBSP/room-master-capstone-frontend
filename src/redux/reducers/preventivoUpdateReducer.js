import { UPDATE_PREV, UPDATE_PREV_FALLITO, UPDATE_PREV_RICHIESTA } from "../actions/preventiviAction";

const initialState = {
  riuscito: false,
  loading: false,
  error: null,
};

const preventivoUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PREV_RICHIESTA:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_PREV:
      return {
        ...state,
        loading: false,
        riuscito: true,
      };
    case UPDATE_PREV_FALLITO:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default preventivoUpdateReducer;
