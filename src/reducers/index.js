import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { AppReducer } from "./Home/App.js";
export default history =>
  combineReducers({
    router: connectRouter(history),
    AppReducer
  });
