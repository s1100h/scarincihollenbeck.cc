import { fetchAPI } from './api';
import { getPracticesQuery } from './graphql-queries';
import { sanitizePracticesByChildren } from '../utils/helpers';

export const getPractices = async () => {
  const data = await fetchAPI(getPracticesQuery, {});
  return sanitizePracticesByChildren(data.practices.nodes);
};
