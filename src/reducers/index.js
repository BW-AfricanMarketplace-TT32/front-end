import {
  SET_LOGGED_STATUS,
  SET_USER,
  SET_ITEMS,
  ADD_ITEM,
  EDIT_ITEM
} from "../actions";

const initialState = {
  user: null,
  isLoggedIn: localStorage.getItem("token") ? true : false,
  items: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};
