import { SENT_CLIENT_DATA } from "../constants/actionTypes";
import { GET_CLIENT_DATA} from "../constants/actionTypes";

export const sentClientData = () => ({
  type: SENT_CLIENT_DATA,
});

export const getClientData = payload => ({
  type: GET_CLIENT_DATA,
  payload
});
