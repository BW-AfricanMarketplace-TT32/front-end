export const SET_LOGGED_STATUS = "SET_LOGGED_STATUS";
export const SET_ITEMS = "SET_ITEMS";
export const SET_USER = "SET_USER";
export const ADD_ITEM = "ADD_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";

export const setLoggedStatus = status => {
  return {
    type: SET_LOGGED_STATUS,
    payload: status
  };
};

export const setUser = user => {
  return {
    type: SET_USER,
    payload: user
  };
};

export const setItems = items => {
  return {
    type: SET_ITEMS,
    payload: items
  };
};

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const editItem = item => {
  return {
    type: EDIT_ITEM,
    payload: item
  };
};
