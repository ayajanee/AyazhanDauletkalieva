import { combineReducers } from "redux";

import { default as agent } from "./agent";
import { default as view } from "./view";

export default combineReducers({
  agent,
  view,
});
