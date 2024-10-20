import { CERCA_PREVENTIVI, CERCA_PREVENTIVI_FALLITO, CERCA_PREVENTIVI_RICHIESTA } from "../actions/preventiviAction";

const initialState = {
  cercaPreventivi: [],
  ceraLoading: false,
  cercaError: null,
};

const cercaPreventiviReducer = (state = initialState, action) => {
  switch (action.payload) {
    case CERCA_PREVENTIVI_RICHIESTA:
      return {
        ...state,
        cercaLoading: true,
        cercaError: null,
      };
    case CERCA_PREVENTIVI:
      return {
        ...state,
        cercaLoading: false,
        cercaPreventivi: action.payload,
      };
    case CERCA_PREVENTIVI_FALLITO:
      return {
        ...state,
        cercaLoading: false,
        cercaError: action.payload,
      };

    default:
      return state;
  }
};

export default cercaPreventiviReducer;
