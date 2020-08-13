import { combineReducers } from "redux";
import storyReducer from "./storyReducer";
import updatesReducer from "./updatesReducer";
import promptReducer from "./promptReducer";

const rootReducer = combineReducers({
  story: storyReducer,
  updates: updatesReducer,
  prompt: promptReducer,
});

export default rootReducer;
