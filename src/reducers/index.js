import { SET_LOGGED_STATUS, SET_ITEMS, SET_CATEGORIES } from "../actions";

const initialState = {
  user: null,
  isLoggedIn: localStorage.getItem("token") ? true : false,
  items: [],
  categories: [],
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
    case SET_LOGGED_STATUS:
      return {
        ...state,
        isLoggedIn: action.payload
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
};
