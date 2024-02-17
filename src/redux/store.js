import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { teamDirectoryReducer } from "./reducers/teamDirectoryReducer";
import { searchQueryReducer } from "./reducers/searchQueryReducer";

const reducer = combineReducers({
  teamDirectory: teamDirectoryReducer,
  searchQuery: searchQueryReducer,
});
const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
