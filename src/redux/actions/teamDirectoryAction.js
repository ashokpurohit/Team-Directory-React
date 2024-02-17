import {
  TEAM_DIRECTORY_REQUEST,
  TEAM_DIRECTORY_SUCCESS,
  TEAM_DIRECTORY_FAIL,
} from "./actionTypes";
import { getTeamDirectory } from "../../apiUtilities/teamDIrectory";

export const listTeamDirectoryAction = () => async (dispatch) => {
  try {
    dispatch({
      type: TEAM_DIRECTORY_REQUEST,
    });

    const { data } = await getTeamDirectory();

    dispatch({
      type: TEAM_DIRECTORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: TEAM_DIRECTORY_FAIL,
      payload: message,
    });
  }
};
