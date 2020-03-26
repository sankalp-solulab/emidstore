import { all } from "redux-saga/effects";
import clientSaga from "./Home";
export default function* rootSaga(getState) {
    yield all([
        clientSaga()
    ]);
}
