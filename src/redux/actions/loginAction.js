export const LOGIN_UTENTE = "LOGIN_UTENTE";
export const LOGIN_FALLITO = "LOGIN_FALLITO";
export const LOGIN_UTENTE_ERRORE = "LOGIN_UTENTE_ERRORE";
export const LOGIN_UTENTE_RICHIESTA = "LOGIN_UTENTE_RICHIESTA";

export const UTENTE_RICHIESTA = "UTENTE_RICHIESTA";
export const UTENTE_CORRENTE_LOGGATO = "UTENTE_CORRENTE_LOGGATO";

export const loginAction = (utente) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_UTENTE_RICHIESTA });
      let resp = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(utente),
      });

      if (resp.ok) {
        let response = await resp.json();
        console.log(response);

        /* localStorage.setItem("utente", utente.email); */
        localStorage.setItem("accessToken", response.AccessToken);
        dispatch({
          type: LOGIN_UTENTE,
          payload: response,
        });
        /* localStorage.setItem("utente", JSON.stringify(response)); */

        alert("Login effettuato con successo");
      } else {
        dispatch({
          type: LOGIN_FALLITO,
          payload: "accessToken non presente nella risposta.",
        });
        alert("Login fallito: accessToken mancante.");

        throw new Error("Errore nel reperimento dei dati. ");
      }
    } catch (error) {
      console.error("Errore: ", error);
      dispatch({
        type: LOGIN_UTENTE_ERRORE,
        payload: error.message,
      });
      alert("Login fallito");
    }
  };
};

export const getUtenteAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: UTENTE_RICHIESTA });
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch("http://localhost:3001/utenti/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        let response = await resp.json();
        console.log(response);

        localStorage.setItem("utente", JSON.stringify(response));

        dispatch({
          type: UTENTE_CORRENTE_LOGGATO,
          payload: response,
        });
      }
    } catch (error) {
      dispatch({
        type: LOGIN_UTENTE_ERRORE,
        payload: error.message,
      });
    }
  };
};
