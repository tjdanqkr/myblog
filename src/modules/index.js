import { combineReducers } from "redux";
import sample from "./sample";
import loading from "./loading";
import main from "./main";
const rootReducer = combineReducers({
  sample,
  loading,
  main,
});

export default rootReducer;
