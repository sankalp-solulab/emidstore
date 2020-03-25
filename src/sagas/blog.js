import { all, takeEvery, call, put } from "redux-saga/effects";
import * as actions from "../constants/actionTypes";
import * as blogAction from "../actions";
import axios from 'axios';
//import {fetchData} from '../axios/index';

function* getBlogList() {
  
    console.log("RESPONCE : ");
    const url=('../services/blog.json');
  try {
      
    console.log("SAGA MY DATA : ");
    const response = yield import("../assets/json/blog.json");
    
     console.log("Responce DATA : ",response.default);
    // if (response.status == 200) {
       yield put(blogAction.getBlogDetailsSuccess(response.default));
    // }


        // const data = yield call(fetchData);
        // console.log("thiss",data)
        // yield put(blogAction.getBlogDetailsSuccess(data));
    
  
  } catch (error) {
    console.log("TCL: function*getBlogList -> error", error);

  }
}

export default function* rootsaga() {
    yield takeEvery(actions.GET_BLOG_DETAILS, getBlogList);  
  }