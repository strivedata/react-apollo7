import { browserHistory } from 'react-router';
import * as types from 'constants/actionTypes';
import auth from 'api/auth';
import api from 'api/api';
import { message } from 'antd';
import 'antd/lib/message/style/index.less';

export const loginUser = ({credentials='', redirectUrl='', origin=''} = {}) => (dispatch) => {
  dispatch({type: types.USER_LOGGING_IN}, message.loading('Onboarding in progress..', 0));
  dispatch(api.fetchAuthToken(credentials))
    .then(response => {
      auth.saveAuthTokenToStorage(response.payload.access_token);
      dispatch(api.getUserProfile(origin))
        .then(() => {
          dispatch({type: types.USER_LOGGED_IN});
          (redirectUrl) ? browserHistory.push(redirectUrl) : browserHistory.push('/');
          message.destroy();
      });
    }).catch(() => {
      dispatch({type: types.FEEDBACK_MESSAGE_INFO}, setTimeout(() => {
          message.destroy();
          message.error('Houston, we\'ve had a problem', 3);
        }, 500)
      );
    });
};

export const logoutUser = () => dispatch => {
  auth.removeAuthTokenFromStorage();
  dispatch({type: types.USER_LOGGED_OUT});
  dispatch({type: types.SESSION_ENDED});
  browserHistory.push('/login');
};

export const goToRoute = (path) => {
  browserHistory.push(path);
};

export const fetchAuthUserProfile = () => dispatch => {
  dispatch(api.getUserProfile('sessionActions'));
};
