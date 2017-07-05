import * as types from 'constants/actionTypes';
import initialState from './initialState';

export default function crewReducer(state = initialState.crew, action) {

  switch (action.type) {
    case types.CREW_REQUEST:
      return state;

    case types.CREW_SUCCESS:
      return action.payload.data;

    case types.CREW_FAILED:
      return state;

    default:
      return state;
  }
}
