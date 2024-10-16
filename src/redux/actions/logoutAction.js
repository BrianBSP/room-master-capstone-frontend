export const LOGOUT = "LOGOUT";

export const logoutAction = () => {
  return (dispatch) => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("utente");

    dispatch({
      type: LOGOUT,
    });
  };
};
