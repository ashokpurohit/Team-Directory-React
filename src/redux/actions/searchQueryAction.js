import { SEARCH_QUERY, SEARCH_QUERY_RESET } from "./actionTypes";

export const searchQueryAction = (text) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_QUERY,
      payload: text,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_QUERY_RESET,
      payload: "",
    });
  }
};
