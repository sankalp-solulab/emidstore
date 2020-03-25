import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Blog from "./blog";

export default history =>
    combineReducers({
        router: connectRouter(history),
        Blog
    });
