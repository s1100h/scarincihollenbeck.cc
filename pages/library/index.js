import { PRODUCTION_URL } from 'utils/constants';
import { fetchAPI, fetchRestAPI } from 'requests/api';
import {
  firstCreatedPostQuery,
  libraryPageContentQuery,
  mainCategoriesQuery,
  postsForRandomComponentQuery,
} from 'requests/graphql-queries';
import LibraryPage from 'components/pages/LibraryPage';
import { getPractices } from 'requests/getPractices';
import { sortByKey } from 'utils/helpers';
import { getIndustries } from 'requests/getIndustries';

const generateYearOptions = (startYear) => {
  const currentYear = new Date().getFullYear();
  const yearOptions = [];

  for (let year = startYear; year <= currentYear; year++) {
    yearOptions.push({
      databaseId: `${year}-id`,
      title: year,
    });
  }

  return yearOptions;
};

const sanitizeCategories = (categories) => categories?.map((category) => ({
  databaseId: category.databaseId,
  title: category?.name || category.title,
  description: category?.description || category?.pagesFields?.description,
  uri: category?.uri ? `/library${category?.uri}` : '/library',
  image:
      category?.categoryFields?.image?.sourceUrl
      || category?.featuredImage?.node?.sourceUrl,
  posts: category?.posts?.nodes || [],
}));

export async function getStaticProps() {
  const {
    pageBy: { title, seo, pagesFields },
  } = await fetchAPI(libraryPageContentQuery);

  const mainCategories = await fetchAPI(mainCategoriesQuery);
  const { posts } = await fetchAPI(postsForRandomComponentQuery);

  const practices = await getPractices();

  const industries = await getIndustries();

  const { locations } = await fetchRestAPI('locations');

  const { authors } = await fetchRestAPI('authors');
  const sortedAuthors = sortByKey(authors, 'title');

  const firstPost = await fetchAPI(firstCreatedPostQuery);
  const dateFirstPost = new Date(firstPost?.posts?.nodes[0]?.date).getFullYear() || 2013;

  const filters = {
    practices,
    locations,
    authors: sortedAuthors,
    industries,
    years: generateYearOptions(dateFirstPost),
  };

  return {
    props: {
      seo,
      title,
      description: pagesFields?.description,
      mainCategories: sanitizeCategories([
        ...mainCategories?.categories?.nodes,
        mainCategories?.pageBy,
      ]),
      posts: posts?.nodes || [],
      filters,
    },
    revalidate: 86400,
  };
}

const Library = ({
  seo,
  title,
  description,
  mainCategories,
  posts,
  filters,
}) => {
  const canonicalUrl = `${PRODUCTION_URL}/library`;

  const libraryProps = {
    seo,
    title,
    description,
    canonicalUrl,
    mainCategories,
    posts,
    filters,
  };
  return <LibraryPage {...libraryProps} />;
};

export default Library;
