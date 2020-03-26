import { all } from "redux-saga/effects";
import actionWatcher from "./home/App.js";
export default function* rootSaga(getState) {
  yield all([actionWatcher()]);
}
