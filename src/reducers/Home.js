import { GET_CLIENT_DATA } from "../constants/actionTypes";
import { GET_APP_DATA } from "../constants/actionTypes";
import { GET_CHOOSE_DATA } from "../constants/actionTypes";
const INITIAL_STATE = {};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CLIENT_DATA: {
      console.log("reducer", action);
      return {
        ...state,
        data: action.payload
      };
    }
    case GET_APP_DATA: {
      console.log("reducer", action);
      return {
        ...state,
        appdata: action.payload
      };
    } 
    case GET_CHOOSE_DATA: {
      console.log("reducer", action);
      return {
        ...state,
        single: action.payload
      };
    } 
    default:
      return state;
  }
};
