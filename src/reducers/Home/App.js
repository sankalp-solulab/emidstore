import { GET_APP } from "../../constants/actionTypes.js";

export const initial_state = {
  data: " "
};
export const AppReducer = (state = initial_state, action) => {
  console.log("in App reducer");
  switch (action.type) {
    case GET_APP:
      return { ...state };
    default:
      return state;
  }
};
