import { takeEvery,put } from "redux-saga/effects";
import {getClientData} from "../actions/Home";
import {SENT_CLIENT_DATA} from "../constants/actionTypes";


function* sentClientData() {
  const response = yield import("../assets/json/clients.json");
  console.log("res",response.default);
  yield put(getClientData(response.default))

 
  }

export default function* rootsaga() {
    yield takeEvery(SENT_CLIENT_DATA, sentClientData);  
  }