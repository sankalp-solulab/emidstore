import { all } from "redux-saga/effects";
import clientSaga from "./client";
export default function* rootSaga(getState) {
    yield all([
        clientSaga()
    ]);
}
