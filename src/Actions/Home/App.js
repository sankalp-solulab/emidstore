import { GET_APP } from "../../constants/actionTypes.js";

export const getApp = () => {
  console.log("Apps in Action");
  return {
    type: GET_APP
  };
};
