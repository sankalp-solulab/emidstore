import {GET_PILLERS,GET_PILLERS_SUSCESS} from '../constants/actionTypes';

export const get_pillers = paylod => {
    console.log("In action creator")
    return {
        type: GET_PILLERS,
    };
};

export const get_piller_success = paylod => {
    return {
        type: GET_PILLERS_SUSCESS,
        payload: paylod
    };
};