import { takeEvery,put } from "redux-saga/effects";
import {getClientData} from "../actions/client";
import {SENT_CLIENT_DATA} from "../constants/actionTypes";

function* sentClientData(action) {
    console.log('in saga',action)
    yield put(getClientData(action.payload))
  }

export default function* rootsaga() {
    yield takeEvery(SENT_CLIENT_DATA, sentClientData);  
  }