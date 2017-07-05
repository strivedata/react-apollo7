import * as types from 'constants/actionTypes';
import initialState from './initialState';

export default function sessionReducer(state = initialState.session, action) {

  switch (action.type) {

    case types.SESSION_REQUEST:
      return { ...initialState.session, userIsLoggingIn: true };

    case types.SESSION_SUCCESS:
      return { ...initialState.session, status: {active: true}, userIsLoggingIn: false };

    case types.SESSION_FAILED:
      return { ...initialState.session, userLoginFailed: true };

    case types.SESSION_ENDED:
      return { ...initialState.session, status: {} };

    default:
      return state;
  }
}
