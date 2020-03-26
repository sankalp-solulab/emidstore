import {
  GET_CLIENT_DATA,
  GET_RESOURCES_DATA,
  GET_APP_DATA
} from "../constants/actionTypes";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CLIENT_DATA:
      console.log("reducer", action);
      return {
        ...state,
        data: action.payload
      };
    case GET_RESOURCES_DATA:
      return {
        ...state,
        data: action.payload
      };

    case GET_APP_DATA: {
      console.log("reducer", action);
      return {
        ...state,
        appdata: action.payload
      };
    }
    default:
      return state;
  }
};
