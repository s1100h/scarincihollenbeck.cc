import { fetchAPI } from './api';
import { getIndustriesQuery } from './graphql-queries';

const sanitizeIndustries = (data) => {
  if (!data) return [];

  return data?.map((item, index) => ({
    databaseId: `${item?.title}-industry-${index}`,
    ...item,
    link: {
      url: item?.link?.url || '/services#industries',
      title: item?.link?.title || 'About Industry',
    },
  }));
};

export const getIndustries = async () => {
  const data = await fetchAPI(getIndustriesQuery, {});
  return sanitizeIndustries(data?.page?.servicesPage?.industries);
};
