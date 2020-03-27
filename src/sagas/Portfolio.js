import { takeEvery, call, put } from 'redux-saga/effects';
import * as actions from '../constants/actionTypes';
import * as portfolioActions from '../actions';
import {fetchData} from '../Axious';
import axios from 'axios';

function* getPortfolioList() {
    console.log("RESPONCE : ");
    const url=('../services/portfolio.json');
  try {
      
    console.log("SAGA MY DATA : ");
    const response = yield import("../assets/portfolio.json");
    
     console.log("Responce DATA : ",response.default);
    if (response.status == 200) {
       yield put(portfolioActions.getPortfolioDetailsSuccess(response.default));
    }

    const data = yield call(fetchData);
    console.log("thiss",data)
    yield put(blogAction.getPortfolioDetailsSuccess(data));
  
  } catch (error) {
    console.log("TCL: function*getPortfolioList -> error", error);
  }
}

export default function* rootsaga() {
    yield takeEvery(actions.GET_PORTFOLIO_DETAILS, getPortfolioList);  
}