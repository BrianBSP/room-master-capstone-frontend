import { LOGIN_FALLITO } from "./loginAction";

export const LISTA_HOTELS = "LISTA_HOTELS";
export const LISTA_HOTELS_RICHIESTA = "LISTA_HOTELS_RICHIESTA";
export const LISTA_HOTELS_FALLITA = "LISTA_HOTELS_FALLITA";

export const DETTAGLI_HOTEL = "DETTAGLI_HOTEL";
export const DETTAGLI_HOTEL_RICHIESTA = "DETTAGLI_HOTEL_RICHIESTA";
export const DETTAGLI_HOTEL_FALLITA = "DETTAGLI_HOTEL_FALLITA";

export const HOTEL_SELEZIONATO = "HOTEL_SELEZIONATO";

export const hotelsAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LISTA_HOTELS_RICHIESTA });
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }

      let resp = await fetch("http://localhost:3001/hotels", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        let response = await resp.json();
        console.log(response.content);

        dispatch({
          type: LISTA_HOTELS,
          payload: response.content,
        });
      } else {
        throw new Error("Error: ", resp.statusText);
      }
    } catch (error) {
      console.error("Error: ", error);
      dispatch({
        type: LISTA_HOTELS_FALLITA,
        payload: error.message,
      });
    }
  };
};

export const hotelSelezionatoAction = (hotelId) => ({
  type: HOTEL_SELEZIONATO,
  payload: hotelId,
});

export const hotelByIdAction = (hotelId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DETTAGLI_HOTEL_RICHIESTA });
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return dispatch({
          type: LOGIN_FALLITO,
          payload: "Utente non autenticato. Effettua il login.",
        });
      }
      let resp = await fetch(`http://localhost:3001/hotels/${hotelId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        let response = await resp.json();
        dispatch({
          type: DETTAGLI_HOTEL,
          payload: response,
        });
      } else {
        throw new Error("Error: ", resp.statusText);
      }
    } catch (error) {
      console.error("Error: ", error);
      dispatch({
        type: DETTAGLI_HOTEL_FALLITA,
        payload: error.message,
      });
    }
  };
};
