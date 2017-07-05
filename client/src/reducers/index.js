import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import crew from './crewReducer';
import user from './userReducer';
import session from './sessionReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  crew,
  user,
  session
});

export default rootReducer;
