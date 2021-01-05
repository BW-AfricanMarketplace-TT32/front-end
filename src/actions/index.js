const SET_LOGGED_STATUS = "SET_LOGGED_STATUS";
export const SET_USER = "SET_USER";
export const ADD_ITEM = "ADD_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";

export const setLoggedStatus = status => {
  return {
    type: SET_LOGGED_STATUS,
    payload: status
  };
};
