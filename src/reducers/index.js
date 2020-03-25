import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import contactUs from './contactUs';
export default history =>
    combineReducers({
        router: connectRouter(history),
        contactUs,
    });
