import { HOTEL_SELEZIONATO, LISTA_HOTELS, LISTA_HOTELS_FALLITA, LISTA_HOTELS_RICHIESTA } from "../actions/hotelsAction";

const initialState = {
  hotels: [],
  loading: false,
  error: null,
  hotelSelezionato: {},
};

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTA_HOTELS_RICHIESTA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LISTA_HOTELS:
      return {
        ...state,
        hotels: action.payload,
        loading: false,
      };
    case LISTA_HOTELS_FALLITA:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case HOTEL_SELEZIONATO:
      return {
        ...state,
        hotelSelezionato: action.payload,
      };
    default:
      return state;
  }
};
export default hotelsReducer;
