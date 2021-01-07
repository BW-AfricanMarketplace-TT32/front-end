export const SET_LOGGED_STATUS = "SET_LOGGED_STATUS";
export const SET_ITEMS = "SET_ITEMS";
export const ADD_ITEM = "ADD_ITEM";
export const SET_CATEGORIES = "SET_CATEGORIES";

export const setLoggedStatus = status => {
  return {
    type: SET_LOGGED_STATUS,
    payload: status
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

export const setCategories = categories => {
  return {
    type: SET_CATEGORIES,
    payload: categories
  };
};
