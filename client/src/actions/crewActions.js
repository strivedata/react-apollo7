import api from 'api/api';

export const fetchCrewMembers = (origin) => dispatch => {

  dispatch(api.getCrewMembers(origin));

};
