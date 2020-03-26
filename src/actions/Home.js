import {
  SENT_CLIENT_DATA,
  GET_CLIENT_DATA,
  SENT_RESOURCES_DATA,
  GET_RESOURCES_DATA
} from "../constants/actionTypes";

//*****Client*****/
export const sentClientData = () => ({
  type: SENT_CLIENT_DATA
});

export const getClientData = payload => ({
  type: GET_CLIENT_DATA,
  payload
});

//*****Resources*****/

export const sentResourceData = () => ({
  type: SENT_RESOURCES_DATA
});

export const getResourceData = payload => ({
  type: GET_RESOURCES_DATA,
  payload
});

export const sentAppData = () => ({
  type: SENT_APP_DATA
});

export const getAppData = payload => ({
  type: GET_APP_DATA,
  payload
});
