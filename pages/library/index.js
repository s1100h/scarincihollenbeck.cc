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
import {
  generateYearOptions,
  sanitizeCategories,
  sortByKey,
} from 'utils/helpers';
import { getIndustries } from 'requests/getIndustries';
import useNotFoundNotification from 'hooks/useNotFoundNotification';

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
    revalidate: 3600,
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

  useNotFoundNotification("Category doesn't exist!");

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
