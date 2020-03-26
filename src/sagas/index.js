import { all } from "redux-saga/effects";
import Aboutus from './Aboutussaga';
export default function* rootSaga(getState) {
    yield all([
        Aboutus()
    ]);
}
