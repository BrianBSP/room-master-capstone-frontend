export const LOGIN_UTENTE = "LOGIN_UTENTE";
export const LOGIN_FALLITO = "LOGIN_FALLITO";
export const LOGIN_UTENTE_ERRORE = "LOGIN_UTENTE_ERRORE";

export const loginAction = (utente) => {
  return async (dispatch) => {
    try {
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

        localStorage.setItem("accessToken", response.AccessToken);
        dispatch({
          type: LOGIN_UTENTE,
          payload: response,
        });
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
