export const LOGOUT = "LOGOUT";

export const logoutAction = () => {
  return (dispatch) => {
    localStorage.removeItem("accesstoken");

    dispatch({
      type: LOGOUT,
    });
  };
};
