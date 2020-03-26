import { SENT_CLIENT_DATA } from "../constants/actionTypes";
import { GET_CLIENT_DATA} from "../constants/actionTypes";

export const sentClientData = payload => ({
  type: SENT_CLIENT_DATA,
  payload
});

export const getClientData = payload => ({
  type: GET_CLIENT_DATA,
  payload
});
