import { GET_CAMERA, GET_CAMERA_FALLITA, GET_CAMERA_RICHIESTA } from "../actions/camereAction";

const initialState = {
  camera: {},
  loading: false,
  error: null,
};

const cameraDettaglioReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMERA_RICHIESTA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CAMERA:
      return {
        ...state,
        camera: action.payload,
        loading: false,
      };
    case GET_CAMERA_FALLITA:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cameraDettaglioReducer;
