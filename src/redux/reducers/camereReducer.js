import { ELIMINA_CAMERA, ELIMINA_CAMERA_FALLITO, ELIMINA_CAMERA_RICHIESTA } from "../actions/camereAction";

const initialState = {
  camere: [],
  loading: false,
  error: null,
};

const camereReducer = (state = initialState, action) => {
  switch (action.type) {
    case ELIMINA_CAMERA_RICHIESTA:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    case ELIMINA_CAMERA:
      return {
        ...state,
        loading: false,
        camere: state.camere.filter((camera) => camera.id !== action.payload),
      };
    case ELIMINA_CAMERA_FALLITO:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default camereReducer;
