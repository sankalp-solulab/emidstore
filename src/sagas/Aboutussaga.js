import {all,takeEvery,put,call} from 'redux-saga/effects';
import * as action from '../constants/actionTypes';
import * as AboutAction from '../actions'; 
import axios from '../services';
// import url from "../assets/Json/Pillers.json";


function* getApidata()
{
    console.log("getapidata");
    const url=('../assets/Json/Pillers.json');
    //const url = '../../assets/Json/Pillers';
    try {
        console.log("try saga data : ",url );
        //const response = yield JSON.stringify(url);
        const response = yield import("../assets/json/Pillers.json");
        console.log("response : ",response.default);
                
                yield put(AboutAction.get_piller_success(response.default));
        
    } catch (error) {
        console.log("error in funtion ", error);
    }
}

export default function* mysaga(){
    yield takeEvery(action.GET_PILLERS,getApidata);

}
