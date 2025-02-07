import { PRODUCTION_URL } from 'utils/constants';
import { fetchAPI } from 'requests/api';
import {
  libraryPageContentQuery,
  mainCategoriesQuery,
} from 'requests/graphql-queries';
import { getLibraryFiltersAndSubheaderData } from 'requests/getLibraryFiltersData';
import LibrarySearchResultsPage from 'components/pages/LibrarySearchResultsPage';
import empty from 'is-empty';

export async function getServerSideProps({ query }) {
  const filtersParams = {
    keyword: query.keyword || '',
    category: query.categories || '',
    office: query.offices || '',
    author: query.authors || '',
    practice: query.practices || '',
    industry: query.industries || '',
    year: query.years || '',
  };

  Object.keys(filtersParams).forEach((key) => {
    if (!filtersParams[key]) {
      delete filtersParams[key];
    }
  });

  if (empty(filtersParams)) {
    return {
      redirect: {
        destination: '/library',
        permanent: true,
      },
    };
  }

  // console.log(
  //   `https://api.example.com/posts?${new URLSearchParams(filtersParams)}`,
  // );

  const {
    pageBy: { title, seo, pagesFields },
  } = await fetchAPI(libraryPageContentQuery);

  const { filters, subHeaderSlides } = await getLibraryFiltersAndSubheaderData(
    mainCategoriesQuery,
  );

  return {
    props: {
      posts: [],
      seo: {
        ...seo,
        canonicalUrl: `${PRODUCTION_URL}/library`,
      },
      title,
      description: pagesFields?.description,
      filters,
      subHeaderSlides,
      filtersParams,
    },
  };
}

const LibrarySearch = ({
  seo,
  title,
  description,
  filters,
  subHeaderSlides,
  filtersParams,
  posts,
}) => {
  const libraryProps = {
    seo,
    title,
    description,
    filters,
    subHeaderSlides,
    filtersParams,
    posts,
  };
  return <LibrarySearchResultsPage {...libraryProps} />;
};

export default LibrarySearch;
