import { LOGIN_FALLITO } from "./loginAction";

export const CERCA_UTENTI = "CERCA_UTENTI";
export const CERCA_UTENTI_RICHIESTA = "CERCA_UTENTI_RICHIESTA";
export const CERCA_UTENTI_FALLITO = "CERCA_UTENTI_FALLITO";

export const UTENTE_SELEZIONATO = "UTENTE_SELEZIONATO";
export const UTENTE_SELEZIONATO_RICHIESTA = "UTENTE_SELEZIONATO_RICHIESTA";
export const UTENTE_SELEZIONATO_FALLITO = "UTENTE_SELEZIONATO_FALLITO";

export const DETTAGLIO_UTENTE_RICHIESTA = "DETTAGLIO_UTENTE_RICHIESTA";
export const DETTAGLIO_UTENTE = "DETTAGLIO_UTENTE";
export const DETTAGLIO_UTENTE_FALLITO = "DETTAGLIO_UTENTE_FALLITO";

export const UPDATE_UTENTE = "UPDATE_UTENTE";
export const UPDATE_UTENTE_RICHIESTA = "UPDATE_UTENTE_RICHIESTA";
export const UPDATE_UTENTE_FALLITO = "UPDATE_UTENTE_FALLITO";

export const ELIMINA_UTENTE = "ELIMINA_UTENTE";
export const ELIMINA_UTENTE_RICHIESTA = "ELIMINA_UTENTE_RICHIESTA";
export const ELIMINA_UTENTE_FALLITA = "ELIMINA_UTENTE_FALLITA";

export const cercaUtentiAction = (parola) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CERCA_UTENTI_RICHIESTA });
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/utenti/nome-cognome/${parola}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        let response = await resp.json();
        dispatch({
          type: CERCA_UTENTI,
          payload: response,
        });
      } else {
        throw new Error("Errore nella richiesta: " + resp.statusText);
      }
    } catch (error) {
      console.error("Error ", error);
      dispatch({
        type: CERCA_UTENTI_FALLITO,
        payload: error.message,
      });
    }
  };
};

export const utentiAction = (url = "http://localhost:3001/utenti") => {
  return async (dispatch) => {
    try {
      dispatch({ type: CERCA_UTENTI_RICHIESTA });
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
          type: CERCA_UTENTI,
          payload: { utenti: response._embedded.utentiRicercaRespDTOList, links: response._links, page: response.page },
        });
      } else {
        throw new Error("Errore nella richiesta: " + resp.statusText);
      }
    } catch (error) {
      console.error("Errore: ", error);
      dispatch({
        type: CERCA_UTENTI_FALLITO,
        payload: error.message,
      });
    }
  };
};

export const utenteByIdAction = (utenteId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UTENTE_SELEZIONATO_RICHIESTA });
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/utenti/${utenteId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        let response = await resp.json();

        dispatch({
          type: UTENTE_SELEZIONATO,
          payload: response,
        });
      } else {
        throw new Error("Errore nella richiesta: " + resp.statusText);
      }
    } catch (error) {
      console.error("Errore: ", error);
      dispatch({
        type: UTENTE_SELEZIONATO_FALLITO,
        payload: "Errore durante la richiesta dei dati: " + error.message,
      });
    }
  };
};

export const updateUtenteAction = (utente) => {
  return async (dispatch) => {
    try {
      dispatch({ tyoe: UPDATE_UTENTE_RICHIESTA });

      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/utenti/${utente.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(utente),
      });

      if (resp.ok) {
        const response = await resp.json();
        dispatch({
          type: UPDATE_UTENTE,
          payload: response,
        });
      } else {
        throw new Error("Errore nella richiesta.");
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: UPDATE_UTENTE_FALLITO,
        payload: error.message,
      });
    }
  };
};

export const eliminaUtenteAction = (utenteId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ELIMINA_UTENTE_RICHIESTA });
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/utenti/${utenteId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        dispatch({
          type: ELIMINA_UTENTE,
          payload: utenteId,
        });
      } else {
        throw new Error("Errore nella richiesta: " + resp.statusText);
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: ELIMINA_UTENTE_FALLITA,
        payload: error.message,
      });
    }
  };
};
