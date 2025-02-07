import { PRODUCTION_URL } from 'utils/constants';
import { fetchAPI } from 'requests/api';
import {
  libraryPageContentQuery,
  mainCategoriesQuery,
  postsForRandomComponentQuery,
} from 'requests/graphql-queries';
import LibraryPage from 'components/pages/LibraryPage';
import useNotFoundNotification from 'hooks/useNotFoundNotification';
import { getLibraryFiltersAndSubheaderData } from 'requests/getLibraryFiltersData';

export async function getStaticProps() {
  const {
    pageBy: { title, seo, pagesFields },
  } = await fetchAPI(libraryPageContentQuery);
  const { posts } = await fetchAPI(postsForRandomComponentQuery);

  const { filters, subHeaderSlides } = await getLibraryFiltersAndSubheaderData(
    mainCategoriesQuery,
  );

  return {
    props: {
      seo,
      title,
      description: pagesFields?.description,
      posts: posts?.nodes || [],
      filters,
      subHeaderSlides,
    },
    revalidate: 3600,
  };
}

const Library = ({
  seo,
  title,
  description,
  posts,
  filters,
  subHeaderSlides,
}) => {
  const canonicalUrl = `${PRODUCTION_URL}/library`;

  useNotFoundNotification("Category doesn't exist!");

  const libraryProps = {
    seo,
    title,
    description,
    canonicalUrl,
    posts,
    filters,
    subHeaderSlides,
  };
  return <LibraryPage {...libraryProps} />;
};

export default Library;
