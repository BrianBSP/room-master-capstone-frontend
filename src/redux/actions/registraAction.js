export const REGISTRA_UTENTE = "REGISTRA_UTENTE";
export const REGISTRAZIONE_FALLITA = "REGISTRAZIONE_FALLITA";
export const REGISTRAZIONE_UTENTE_ERRORE = "REGISTRAZIONE_UTENTE_ERRORE";

export const registraAction = (utente) => {
  return async (dispatch) => {
    try {
      let resp = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(utente),
      });

      if (resp.ok) {
        let response = await resp.json();
        dispatch({
          type: REGISTRA_UTENTE,
          payload: response,
        });
        alert("Registrazione effettuata con successo");
      } else {
        dispatch({
          type: REGISTRAZIONE_FALLITA,
          payload: "Registrazione fallita.",
        });
        throw new Error("Errore nel reperimento dei dati.");
      }
    } catch (error) {
      console.error("Errore: ", error);
      dispatch({
        type: REGISTRAZIONE_UTENTE_ERRORE,
        payload: error.message,
      });
      alert("Registrazione fallita");
    }
  };
};
