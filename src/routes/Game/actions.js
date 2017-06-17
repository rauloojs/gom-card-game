import axios from 'axios';
import Api from 'Api'
import { GET_FLOWS_LIST } from './constants'

// ------------------------------------
// Actions
// ------------------------------------
export const getFLowsList = (flowId) => {
  return (dispatch, getState) => {
    return Api('flows/?append_history=true').then((response) => {
      dispatch({
        type: GET_FLOWS_LIST,
        payload: response.data
      });
    });
  };
};
