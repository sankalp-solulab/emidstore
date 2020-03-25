import { all } from "redux-saga/effects";
import blogSagas from "./blog";

export default function* rootSaga(getState) {
    yield all([
        blogSagas(),
    ]);
}
