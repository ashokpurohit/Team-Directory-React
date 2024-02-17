import { SEARCH_QUERY, SEARCH_QUERY_RESET } from "../actions/actionTypes";

export const searchQueryReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_QUERY:
      return { text: action.payload };
    case SEARCH_QUERY_RESET:
      return { text: "" };
    default:
      return state;
  }
};
