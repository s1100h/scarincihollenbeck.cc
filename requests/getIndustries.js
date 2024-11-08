import { getIndustryLink } from 'utils/helpers';
import { fetchAPI } from './api';
import { getIndustriesQuery } from './graphql-queries';

const sanitizeIndustries = (data) => {
  if (!data) return [];

  return data?.map((item, index) => ({
    ...item,
    uri: getIndustryLink(item?.uri),
  }));
};

export const getIndustries = async () => {
  const data = await fetchAPI(getIndustriesQuery, {});
  return sanitizeIndustries(data?.industries?.nodes);
};
