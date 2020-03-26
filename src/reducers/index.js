import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import clientReducer from "./Home";
export default history =>
    combineReducers({
        clientReducer,
        router: connectRouter(history),
    });
