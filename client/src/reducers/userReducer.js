import * as types from 'constants/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {

    case types.USER_REQUEST:
      return state;

    case types.USER_SUCCESS:
      return action.payload.data;

    case types.USER_FAILED:
      return state;

    case types.USER_LOGGED_OUT:
      return initialState.user;

    default:
      return state;
 }
}
