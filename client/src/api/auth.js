import { UserAuthWrapper } from 'redux-auth-wrapper';
import cookie from 'js-cookie';
import * as storageConfig from 'config/storage';
import authAPI from 'api/auth';

const auth = {

  createAuthWrapper: UserAuthWrapper({
    authSelector: state => state.session.status,
    predicate: () => {
      return !!authAPI.getAuthTokenFromStorage();
    },
    wrapperDisplayName: 'UserIsAuthenticated'
  }),

    getAuthTokenFromStorage: () => {
      return cookie.get(storageConfig.STORAGE.ACCESS_TOKEN);
    },
    removeAuthTokenFromStorage: () => {
      return cookie.remove(storageConfig.STORAGE.ACCESS_TOKEN);
    },
    saveAuthTokenToStorage: (accessToken) => {
      return cookie.set(storageConfig.STORAGE.ACCESS_TOKEN, accessToken);
    },
    getAuthorizationHeader: () => {
      return 'Bearer ' + cookie.get(storageConfig.STORAGE.ACCESS_TOKEN);
    }
};

export default auth;
