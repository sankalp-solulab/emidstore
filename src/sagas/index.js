import { all } from "redux-saga/effects";
import blogSagas from "./blog";
import contactUsSaga from './contactUs';
import portfolio from './portfolio';

export default function* rootSaga(getState) {
    yield all([
        blogSagas(),
        contactUsSaga(),
        portfolio(),
    ]);
}



