import { LOGIN_FALLITO } from "./loginAction";

export const UPLOAD_IMG_UTENTE = "UPLOAD_IMG_UTENTE";
export const UPLOAD_IMG_UTENTE_RICHIESTA = "UPLOAD_IMG_UTENTE_RICHIESTA";
export const UPLOAD_IMG_UTENTE_FALLITO = "UPLOAD_IMG_UTENTE_FALLITO";

export const uploadImageAction = (formData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPLOAD_IMG_UTENTE_RICHIESTA });
      const token = localStorage.getItem("accessToken");
      const utente = JSON.parse(localStorage.getItem("utente"));
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/utenti/${utente.id}/avatar`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          /* "Content-Type": "application/json", */
        },
      });

      if (resp.ok) {
        let response = await resp.json();
        dispatch({
          type: UPLOAD_IMG_UTENTE,
          payload: response,
        });
      } else {
        throw new Error("Errore nel caricamento dell'immagine");
      }
    } catch (error) {
      console.error("Errore: ", error);
      dispatch({
        type: UPLOAD_IMG_UTENTE_FALLITO,
        payload: "Errore durante la richiesta dei dati: " + error.message,
      });
    }
  };
};
