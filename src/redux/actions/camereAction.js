import { LOGIN_FALLITO } from "./loginAction";
import { CREA_PREVENTIVO_RICHIESTA } from "./preventiviAction";

export const LISTA_ALL_CAMERE = "LISTA_ALL_CAMERE";
export const LISTA_ALL_CAMERE_RICHIESTA = "LISTA_ALL_CAMERE_RICHIESTA";
export const LISTA_ALL_CAMERE_FALLITO = "LISTA_ALL_CAMERE_FALLITO";

export const GET_CAMERA = "GET_CAMERA";
export const GET_CAMERA_RICHIESTA = "GET_CAMERA_RICHIESTA";
export const GET_CAMERA_FALLITA = "GET_CAMERA_FALLITA";

export const ELIMINA_CAMERA = "ELIMINA_CAMERA";
export const ELIMINA_CAMERA_RICHIESTA = "ELIMINA_CAMERA_RICHIESTA";
export const ELIMINA_CAMERA_FALLITO = "ELIMINA_CAMERA_FALLITO";

export const CREA_CAMERA = "CREA_CAMERA";
export const CREA_CAMERA_RICHIESTA = "CREA_CAMERA_RICHIESTA";
export const CREA_CAMERA_FALLITA = "CREA_CAMERA_FALLITA";

export const UPDATE_CAMERA = "UPDATE_CAMERA";
export const UPDATE_CAMERA_RICHIESTA = "UPDATE_CAMERA_RICHIESTA";
export const UPDATE_CAMERA_FALLITA = "UPDATE_CAMERA_FALLITA";

export const camereAllAction = (url = "http://localhost:3001/camere") => {
  return async (dispatch) => {
    try {
      dispatch({ type: LISTA_ALL_CAMERE_RICHIESTA });
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        let response = await resp.json();
        console.log(response);

        dispatch({
          type: LISTA_ALL_CAMERE,
          payload: { camere: response._embedded.cameraRicercaRespDTOList, links: response._links, page: response.page },
        });
      } else {
        throw new Error("Errore nella richiesta: ", resp.statusText);
      }
    } catch (error) {
      console.error("Errore: ", error);
      dispatch({
        type: LISTA_ALL_CAMERE_FALLITO,
        payload: error.message,
      });
    }
  };
};

export const cameraByIdAction = (cameraId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_CAMERA_RICHIESTA });
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/camere/${cameraId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        let response = await resp.json();
        console.log(response);

        dispatch({
          type: GET_CAMERA,
          payload: response,
        });
      } else {
        throw new Error("Errore nella richiesta: ", resp.statusText);
      }
    } catch (error) {
      console.error("Error: ", error);
      dispatch({
        type: GET_CAMERA_FALLITA,
        payload: error.message,
      });
    }
  };
};

export const eliminaCameraAction = (cameraId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ELIMINA_CAMERA_RICHIESTA });
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/camere/${cameraId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        dispatch({
          type: ELIMINA_CAMERA,
          payload: cameraId,
        });
      } else {
        throw new Error("Errore: ", resp.statusText);
      }
    } catch (error) {
      console.error("Error: ", error);
      dispatch({
        type: ELIMINA_CAMERA_FALLITO,
        payload: error.message,
      });
    }
  };
};

export const creaCameraAction = (camera, hotelId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CREA_PREVENTIVO_RICHIESTA });
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/camere/${hotelId}/crea`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(camera),
      });

      if (resp.ok) {
        let response = await resp.json();
        dispatch({
          type: CREA_CAMERA,
          payload: response,
        });
      } else {
        throw new Error("Error: ", resp.statusText);
      }
    } catch (error) {
      console.error("Error: ", error);
      dispatch({
        type: CREA_CAMERA_FALLITA,
        payload: error.message,
      });
    }
  };
};

export const updateCameraAction = (camera) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_CAMERA_RICHIESTA });

      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/camere/${camera.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(camera),
      });

      if (resp.ok) {
        const response = await resp.json();
        dispatch({
          type: UPDATE_CAMERA,
          payload: response,
        });
      } else {
        throw new Error("Errore: ", resp.statusText);
      }
    } catch (error) {
      console.error("Error: ", error);
      dispatch({
        type: UPDATE_CAMERA_FALLITA,
        payload: error.message,
      });
    }
  };
};
