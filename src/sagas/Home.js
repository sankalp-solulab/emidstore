import { takeEvery, put } from "redux-saga/effects";
import { getClientData, getResourceData } from "../actions/Home";
import {
  SENT_CLIENT_DATA,
  SENT_RESOURCES_DATA
} from "../constants/actionTypes";
import { getAppData } from "../actions/Home.js";
import { SENT_APP_DATA } from "../constants/actionTypes.js";

//*****Client*****//
function* sentClientData() {
  const response = yield import("../assets/json/clients.json");
  console.log("res", response.default);
  yield put(getClientData(response.default));
}

//*****Resource*****//
function* sentResourceData() {
  const respone = yield import("../assets/json/resource.json");
  yield put(getResourceData(respone.default));
}

//*****Types of App*****//
function* sentAppData() {
  const response = yield import("../assets/json/app category.json");
  console.log("res", response.default);
  yield put(getAppData(response.default));
}

export default function* rootsaga() {
  yield takeEvery(SENT_CLIENT_DATA, sentClientData);
  yield takeEvery(SENT_RESOURCES_DATA, sentResourceData);
  yield takeEvery(SENT_APP_DATA, sentAppData);
}
