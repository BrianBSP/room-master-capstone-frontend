import { LOGIN_FALLITO } from "./loginAction";

export const GET_LISTA_PRENOTAZIONI = "GET_LISTA_PRENOTAZIONI";
export const LISTA_PRENOTAZIONI_FALLITO = "LISTA_PRENOTAZIONI_FALLITO";
export const RICHIESTA_LISTA_PRENOTAZIONI = "RICHIESTA_LISTA_PRENOTAZIONI";

export const DETTAGLI_PRENOTAZIONE_RICHIESTA = "DETTAGLI_PRENOTAZIONE_RICHIESTA";
export const DETTAGLI_PRENOTAZIONE = "DETTAGLI_PRENOTAZIONE";
export const DETTAGLI_PRENOTAZIONE_FALLITA = "DETTAGLI_PRENOTAZIONE_FALLITA";

export const ELIMINA_PRENOTAZIONE_RICHIESTA = "ELIMINA_PRENOTAZIONE_RICHIESTA";
export const ELIMINA_PRENOTAZIONE = "ELIMINA_PRENOTAZIONE_RICHIESTA";
export const ELIMINA_PRENOTAZIONE_FALLITA = "ELIMINA_PRENOTAZIONE_FALLITA";

export const CERCA_PRENOTAZIONI = "CERCA_PRENOTAZIONI";
export const CERCA_PRENOTAZIONI_RICHIESTA = "CERCA_PRENOTAZIONI_RICHIESTA";
export const CERCA_PRENOTAZIONI_FALLITA = "CERCA_PRENOTAZIONI_FALLITA";

export const LISTA_ALL_PRENOTAZIONI = "LISTA_ALL_PRENOTAZIONI";
export const LISTA_ALL_PRENOTAZIONI_FALLITO = "LISTA_ALL_PRENOTAZIONI_FALLITO";
export const LISTA_ALL_PRENOTAZIONI_RICHIERSTA = "LISTA_ALL_PRENOTAZIONI_RICHIERSTA";

export const prenotazioniAction = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/prenotazioni/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        let response = await resp.json();
        dispatch({
          type: GET_LISTA_PRENOTAZIONI,
          payload: response,
        });
      } else {
        dispatch({
          type: LISTA_PRENOTAZIONI_FALLITO,
          payload: "Errore nel reperimento dei dati.",
        });
      }
    } catch (error) {
      dispatch({
        type: LISTA_PRENOTAZIONI_FALLITO,
        payload: "Errore durante la richiesta dei dati: " + error.message,
      });
    }
  };
};

export const prenotazioniByIdAction = (prenotazioneId) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/prenotazioni/${prenotazioneId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        let response = await resp.json();
        dispatch({
          type: DETTAGLI_PRENOTAZIONE,
          payload: response,
        });
      } else {
        throw new Error("Errore nella richiesta: " + resp.statusText);
      }
    } catch (error) {
      dispatch({
        type: DETTAGLI_PRENOTAZIONE_FALLITA,
        payload: "Errore durante la richiesta dei dati: " + error.message,
      });
    }
  };
};

export const eliminaPrenotazioneAction = (prenotazioneId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ELIMINA_PRENOTAZIONE_RICHIESTA });
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/prenotazioni/${prenotazioneId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        dispatch({
          type: ELIMINA_PRENOTAZIONE,
          payload: prenotazioneId,
        });
      } else {
        throw new Error("Errore nella richiesta: " + resp.statusText);
      }
    } catch (error) {
      dispatch({
        type: ELIMINA_PRENOTAZIONE_FALLITA,
        payload: "Errore durante la richiesta dei dati: " + error.message,
      });
    }
  };
};

export const cercaPrenotazioniAction = (parola) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CERCA_PRENOTAZIONI_RICHIESTA });
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/prenotazioni/search/${parola}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        let response = await resp.json();
        dispatch({
          type: CERCA_PRENOTAZIONI,
          payload: response,
        });
      } else {
        throw new Error("Errore nella richiesta: ", resp.statusText);
      }
    } catch (error) {
      console.error("Errore: ", error);
      dispatch({
        type: CERCA_PRENOTAZIONI_FALLITA,
        payload: error.message,
      });
    }
  };
};

export const getAllPrenotazioniAction = (url = "http://localhost:3001/prenotazioni") => {
  return async (dispatch) => {
    try {
      dispatch({ type: LISTA_ALL_PRENOTAZIONI_RICHIERSTA });
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
          type: LISTA_ALL_PRENOTAZIONI,
          payload: {
            prenotazioni: response._embedded.prenotazioneRicercaRespDTOList,
            links: response._links,
            page: response.page,
          },
        });
      } else {
        throw new Error("Errore nella richiesta: ", resp.statusText);
      }
    } catch (error) {
      console.error("Errore: ", error);
      dispatch({
        type: LISTA_ALL_PRENOTAZIONI_FALLITO,
        payload: error.message,
      });
    }
  };
};

export const getPrenotazioniAnnoAction = (anno) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LISTA_ALL_PRENOTAZIONI_RICHIERSTA });
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/prenotazioni/anno/${anno}`, {
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
          type: LISTA_ALL_PRENOTAZIONI,
          payload: {
            prenotazioni: response._embedded.prenotazioneRicercaRespDTOList,
            links: response._links,
            page: response.page,
          },
        });
      } else {
        throw new Error("Errore nella richiesta: ", resp.statusText);
      }
    } catch (error) {
      console.error("Error: ", error);
      dispatch({
        type: LISTA_ALL_PRENOTAZIONI_FALLITO,
        payload: error.message,
      });
    }
  };
};
