import {
  TEAM_DIRECTORY_REQUEST,
  TEAM_DIRECTORY_SUCCESS,
  TEAM_DIRECTORY_FAIL,
  TEAM_DIRECTORY_RESET,
} from "../actions/actionTypes";

export const teamDirectoryReducer = (state = {}, action) => {
  switch (action.type) {
    case TEAM_DIRECTORY_REQUEST:
      return { loading: true, data: [] };
    case TEAM_DIRECTORY_SUCCESS:
      return { data: action.payload };
    case TEAM_DIRECTORY_FAIL:
      return { error: action.payload, data: [] };
    case TEAM_DIRECTORY_RESET:
      return { data: [] };
    default:
      return state;
  }
};
