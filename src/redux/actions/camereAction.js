import { LOGIN_FALLITO } from "./loginAction";

export const LISTA_ALL_CAMERE = "LISTA_ALL_CAMERE";
export const LISTA_ALL_CAMERE_RICHIESTA = "LISTA_ALL_CAMERE_RICHIESTA";
export const LISTA_ALL_CAMERE_FALLITO = "LISTA_ALL_CAMERE_FALLITO";

export const GET_CAMERA = "GET_CAMERA";
export const GET_CAMERA_RICHIESTA = "GET_CAMERA_RICHIESTA";
export const GET_CAMERA_FALLITA = "GET_CAMERA_FALLITA";

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
