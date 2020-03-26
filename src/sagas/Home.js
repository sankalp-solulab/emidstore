import { takeEvery, put } from "redux-saga/effects";
import {
  getClientData,
  getResourceData,
  getAppData,
  getfeature
} from "../actions/Home";
import {
  SENT_CLIENT_DATA,
  SENT_RESOURCES_DATA,
  SENT_APP_DATA
} from "../constants/actionTypes";

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
function* sentChooseData() {
  const response = yield import("../assets/json/why_choose.json");
  console.log("single", response.default);
  yield put(getfeature(response.default));
}

export default function* rootsaga() {
  yield takeEvery(SENT_CLIENT_DATA, sentClientData);
  yield takeEvery(SENT_RESOURCES_DATA, sentResourceData);
  yield takeEvery(SENT_APP_DATA, sentAppData);
  yield takeEvery(SENT_APP_DATA, sentAppData);
  yield takeEvery(SENT_CHOOSE_DATA, sentChooseData);
}
