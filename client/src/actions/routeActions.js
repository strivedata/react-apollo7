import { browserHistory } from 'react-router';
import { debounce } from 'utils/debounce';

export const navigateTo = ({route, delay=1000 } = {}) => {
  debounce( browserHistory.push(route), delay);
};
