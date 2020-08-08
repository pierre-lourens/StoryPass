import { combineReducers } from "redux";
import storyReducer from "./storyReducer";
import updatesReducer from "./updatesReducer";

const rootReducer = combineReducers({
  story: storyReducer,
  updates: updatesReducer,
});

export default rootReducer;
