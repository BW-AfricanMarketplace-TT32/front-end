import {
  SET_LOGGED_STATUS,
  SET_USER,
  SET_ITEMS,
  ADD_ITEM,
  EDIT_ITEM
} from "../actions";

const initialState = {
  user: null,
  isLoggedIn: false,
  items: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
