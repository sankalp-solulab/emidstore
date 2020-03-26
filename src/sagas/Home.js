import { takeEvery,put } from "redux-saga/effects";
import {getClientData} from "../actions/Home";
import {SENT_CLIENT_DATA} from "../constants/actionTypes";
import {getAppData} from "../actions/Home.js";
import {SENT_APP_DATA} from "../constants/actionTypes.js";
import {getfeature} from "../actions/Home.js";
import {SENT_CHOOSE_DATA} from "../constants/actionTypes.js";


function* sentClientData() {
  const response = yield import("../assets/json/clients.json");
  console.log("res",response.default);
  yield put(getClientData(response.default))

 
  }
  function* sentAppData() {
    const response = yield import("../assets/json/app category.json");
    console.log("res",response.default);
    yield put(getAppData(response.default))
    }
  
    function* sentChooseData() {
      const response = yield import("../assets/json/why_choose.json");
      console.log("single",response.default);
      yield put(getfeature(response.default))
      }
export default function* rootsaga() {
    yield takeEvery(SENT_CLIENT_DATA, sentClientData);  
    yield takeEvery(SENT_APP_DATA,sentAppData);
    yield takeEvery(SENT_CHOOSE_DATA,sentChooseData);
  }