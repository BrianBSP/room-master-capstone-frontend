export const GET_LISTA_PREVENTIVI = "GET_LISTA_PREVENTIVI";
export const LISTA_PREVENTIVI_ERROR = "LISTA_PREVENTIVI_ERROR";
export const LISTA_PREVENTIVI_RICHIERSTA = "LISTA_PREVENTIVI_RICHIERSTA";

export const preventiviAction = (utente) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LISTA_PREVENTIVI_ERROR,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/preventivi/utenti/${utente.id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        let response = await resp.json();
        dispatch({
          type: GET_LISTA_PREVENTIVI,
          payload: response,
        });
      } else {
        dispatch({
          type: LISTA_PREVENTIVI_ERROR,
          payload: "Errore nel reperimento dei preventivi.",
        });
      }
    } catch (error) {
      dispatch({
        type: LISTA_PREVENTIVI_ERROR,
        payload: "Errore durante la richiesta dei dati: " + error.message,
      });
    }
  };
};
