import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Portfolio from './Portfolio';

export default history =>
    combineReducers({
        router: connectRouter(history),
        Portfolio
    });
    