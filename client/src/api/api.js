import { urlEncodeData } from 'utils/httpFormSerializer';

const api = {
  fetchAuthToken: (credentials) => {
    return {
      type: 'SESSION',
      payload: {
        request:{
          method: 'POST',
          url:'auth/token',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: urlEncodeData({...credentials, grant_type: 'password'}),
        }
      }
    };
  },
  getUserProfile: (origin) => {
    return {
      type: 'USER',
      payload: {
        request:{
          method: 'GET',
          url:'user/profile'
        }
      },
      meta: {origin: origin}
    };
  },
  getCrewMembers: (origin) => {
    return {
      type: 'CREW',
      payload: {
        request:{
          method: 'GET',
          url:'crew'
        }
      },
      meta: {origin: origin}
    };
  }
};

export default api;
