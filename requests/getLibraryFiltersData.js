import {
  generateYearOptions,
  sanitizeCategories,
  sortByKey,
} from 'utils/helpers';
import { fetchAPI, fetchRestAPI } from './api';
import { getIndustries } from './getIndustries';
import { getPractices } from './getPractices';
import { firstCreatedPostQuery } from './graphql-queries';

export const getLibraryFiltersData = async () => {
  const practices = await getPractices();

  const industries = await getIndustries();

  const { locations } = await fetchRestAPI('locations');

  const { authors } = await fetchRestAPI('authors');
  const sortedAuthors = sortByKey(authors, 'title');

  const firstPost = await fetchAPI(firstCreatedPostQuery);
  const dateFirstPost = new Date(firstPost?.posts?.nodes[0]?.date).getFullYear() || 2013;

  return {
    practices,
    locations,
    authors: sortedAuthors,
    industries,
    years: generateYearOptions(dateFirstPost),
  };
};

export const getLibraryFiltersAndSubheaderData = async (categoriesQuery) => {
  const filters = await getLibraryFiltersData();

  const mainCategories = await fetchAPI(categoriesQuery);
  const categories = sanitizeCategories(mainCategories?.categories?.nodes);

  return {
    filters: {
      ...filters,
      categories,
    },
    subHeaderSlides: [
      ...categories,
      ...sanitizeCategories([mainCategories?.pageBy]),
    ],
  };
};
