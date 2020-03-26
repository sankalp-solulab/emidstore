import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Blog from "./blog";
import ContactUs from "./contactUs"

export default history =>
    combineReducers({
        router: connectRouter(history),
        Blog,
        ContactUs
    });
