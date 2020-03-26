import { all } from "redux-saga/effects";
<<<<<<< HEAD
import clientSaga from "./client";
export default function* rootSaga(getState) {
    yield all([
        clientSaga()
    ]);
=======
import actionWatcher from "./home/App.js";
export default function* rootSaga(getState) {
  yield all([actionWatcher()]);
>>>>>>> 448140a40e35079c594137715401d5e470074329
}
