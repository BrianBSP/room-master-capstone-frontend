import { LOGIN_FALLITO } from "./loginAction";

export const GET_LISTA_PREVENTIVI = "GET_LISTA_PREVENTIVI";
export const LISTA_PREVENTIVI_ERROR = "LISTA_PREVENTIVI_ERROR";
export const LISTA_PREVENTIVI_RICHIERSTA = "LISTA_PREVENTIVI_RICHIERSTA";

export const ACCETTA_PREVENTIVO = "ACCETTA_PREVENTIVO";
export const ACCETTA_PREV_FAIL = "ACCETTA_PREV_FAIL";
export const ACCETTA_PREV_RICHIESTA = "ACCETTA_PREV_RICHIESTA";

export const DETTAGLI_PREV_RICHIESTA = "DETTAGLI_PREV_RICHIESTA";
export const DETTAGLI_PREV = "DETTAGLI_PREV";
export const DETTAGLI_PREV_FALLITO = "DETTAGLI_PREV_FALLITO";

export const UPDATE_PREV_RICHIESTA = "UPDATE_PREV_RICHIESTA";
export const UPDATE_PREV = "UPDATE_PREV";
export const UPDATE_PREV_FALLITO = "UPDATE_PREV_FALLITO";

export const preventiviAction = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/preventivi/me`, {
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

export const preventivoByIdAction = (preventivoId) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/preventivi/${preventivoId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        let response = await resp.json();
        dispatch({
          type: DETTAGLI_PREV,
          payload: response,
        });
      }
    } catch (error) {
      dispatch({
        type: DETTAGLI_PREV_FALLITO,
        payload: "Errore durante la richiesta dei dati: " + error.message,
      });
    }
  };
};

export const accettaPreventivoAction = (preventivoId) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }
      let resp = await fetch(`http://localhost:3001/preventivi/me/${preventivoId}/accetta`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        let response = await resp.json();
        dispatch({
          type: ACCETTA_PREVENTIVO,
          payload: response,
        });
        alert("preventivo ACCETTATO!");
        dispatch(preventiviAction());
      }
    } catch (error) {
      console.error("Errore: ", error);
      dispatch({
        type: ACCETTA_PREV_FAIL,
        payload: "Errore durante la richiesta dei dati: " + error.message,
      });
    }
  };
};

export const updatePreventivoAction = (preventivo) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PREV_RICHIESTA });

      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/preventivi/${preventivo.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(preventivo),
      });

      if (resp.ok) {
        const response = await resp.json();
        dispatch({
          type: UPDATE_PREV,
          payload: response,
        });
      } else {
        throw new Error("Errore nella richiesta: " + resp.statusText);
      }
    } catch (error) {
      dispatch({
        type: UPDATE_PREV_FALLITO,
        payload: error.message,
      });
    }
  };
};
