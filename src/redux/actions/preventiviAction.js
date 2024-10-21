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

export const CREA_PREVENTIVO_RICHIESTA = "CREA_PREVENTIVO_RICHIESTA";
export const CREA_PREVENTIVO = "CREA_PREVENTIVO";
export const CREA_PREVENTIVO_FALLITO = "CREA_PREVENTIVO_FALLITO";

export const CERCA_PREVENTIVI_RICHIESTA = "CERCA_PREVENTIVI_RICHIESTA";
export const CERCA_PREVENTIVI = "CERCA_PREVENTIVI";
export const CERCA_PREVENTIVI_FALLITO = "CERCA_PREVENTIVI_FALLITO";

export const LISTA_ALL_PREVENTIVI = "LISTA_ALL_PREVENTIVI";
export const LISTA_ALL_PREVENTIVI_FALLITO = "LISTA_ALL_PREVENTIVI_FALLITO";
export const LISTA_ALL_PREVENTIVI_RICHIERSTA = "LISTA_ALL_PREVENTIVI_RICHIERSTA";

export const ELIMINA_PREVENTIVO = "ELIMINA_PREVENTIVO";
export const ELIMINA_PREVENTIVO_RICHIESTA = "ELIMINA_PREVENTIVO_RICHIESTA";
export const ELIMINA_PREVENTIVO_FALLITA = "ELIMINA_PREVENTIVO_FALLITA";
export const preventiviAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LISTA_PREVENTIVI_RICHIERSTA });
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
      console.error("Errore: ", error);
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
      dispatch({ type: DETTAGLI_PREV_RICHIESTA });
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
      } else {
        throw new Error("Errore nella richiesta: " + resp.statusText);
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
      dispatch({ type: ACCETTA_PREV_RICHIESTA });
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

export const richiediPreventivoAction = (preventivo) => {
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
      let resp = await fetch("http://localhost:3001/preventivi", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(preventivo),
      });

      if (resp.ok) {
        let response = await resp.json();
        dispatch({
          type: CREA_PREVENTIVO,
          payload: response,
        });
      } else {
        throw new Error("Errore nella richiesta: " + resp.statusText);
      }
    } catch (error) {
      console.error("Errore: ", error);
      dispatch({
        type: CREA_PREVENTIVO_FALLITO,
        payload: error.message,
      });
    }
  };
};

export const cercaPreventiviAction = (parola) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CERCA_PREVENTIVI_RICHIESTA });
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/preventivi/search/${parola}`, {
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
          type: CERCA_PREVENTIVI,
          payload: response,
        });
      } else {
        throw new Error("Errore nella richiesta: " + resp.statusText);
      }
    } catch (error) {
      console.error("Error ", error);
      dispatch({
        type: CERCA_PREVENTIVI_FALLITO,
        payload: error.message,
      });
    }
  };
};

export const getAllPreventiviAction = (url = "http://localhost:3001/preventivi") => {
  return async (dispatch) => {
    try {
      dispatch({ type: LISTA_ALL_PREVENTIVI_RICHIERSTA });
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
          type: LISTA_ALL_PREVENTIVI,
          payload: {
            preventivi: response._embedded.preventivoRicercaRespDTOList,
            links: response._links,
            page: response.page,
          },
        });
      } else {
        throw new Error("Errore nella richiesta: " + resp.statusText);
      }
    } catch (error) {
      console.error("Error: ", error);
      dispatch({
        type: LISTA_ALL_PREVENTIVI_FALLITO,
        payload: error.message,
      });
    }
  };
};

export const eliminaPreventivoAction = (preventivoId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ELIMINA_PREVENTIVO_RICHIESTA });
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/preventivi/${preventivoId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        dispatch({
          type: ELIMINA_PREVENTIVO,
          payload: preventivoId,
        });
      } else {
        throw new Error("Errore nella richiesta: ", resp.statusText);
      }
    } catch (error) {
      console.error("Error ", error);
      dispatch({
        type: ELIMINA_PREVENTIVO_FALLITA,
        payload: error.message,
      });
    }
  };
};

export const getAllAccettati = (url = "http://localhost:3001/preventivi/accettati") => {
  return async (dispatch) => {
    try {
      dispatch({ type: LISTA_ALL_PREVENTIVI_FALLITO });
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
        dispatch({
          type: LISTA_ALL_PREVENTIVI,
          payload: {
            preventivi: response._embedded.preventivoRicercaRespDTOList,
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
        type: LISTA_ALL_PREVENTIVI_FALLITO,
        payload: error,
      });
    }
  };
};

export const getPreventiviAnnoAction = (anno) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LISTA_ALL_PREVENTIVI_RICHIERSTA });
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch(`http://localhost:3001/preventivi/anno/${anno}`, {
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
          type: LISTA_ALL_PREVENTIVI,
          payload: {
            preventivi: response._embedded.preventivoRicercaRespDTOList,
            links: response._links,
            page: response.page,
          },
        });
      } else {
        throw new Error("Errore nellaq richiesta: ", resp.statusText);
      }
    } catch (error) {
      console.error("Erroraccio: ", error);
      dispatch({
        type: LISTA_ALL_PREVENTIVI_FALLITO,
        payload: "Nessun preventivo in quest'anno selezionare un altro anno...",
      });
    }
  };
};
