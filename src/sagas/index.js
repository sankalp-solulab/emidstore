import { all } from "redux-saga/effects";
import PortfolioSagas  from './Portfolio';

export default function* rootSaga(getState) {
    yield all([
        PortfolioSagas()
    ]);
}
