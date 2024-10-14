export const LOGOUT = "LOGOUT";

export const logoutAction = () => {
  return (dispatch) => {
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("utente");

    dispatch({
      type: LOGOUT,
    });
  };
};
