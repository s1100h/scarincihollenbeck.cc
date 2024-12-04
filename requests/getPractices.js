import { filterTunePractices } from 'utils/helpers';
import { fetchRestAPI } from './api';

export const getPractices = async () => {
  const { practices } = await fetchRestAPI('practices');
  const filteredPractices = practices.filter(filterTunePractices);
  return filteredPractices;
};
