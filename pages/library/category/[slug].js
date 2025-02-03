import ApolloWrapper from 'layouts/ApolloWrapper';
import { PRODUCTION_URL } from 'utils/constants';
import {
  generateYearOptions,
  sanitizeCategories,
  sortByKey,
} from 'utils/helpers';
import { fetchAPI, fetchRestAPI } from 'requests/api';
import {
  categoriesQuery,
  categoryPageContentQuery,
  firstCreatedPostQuery,
} from 'requests/graphql-queries';
import LibraryCategoryPage from 'components/pages/LibraryCategoryPage';
import { getPractices } from 'requests/getPractices';
import { getIndustries } from 'requests/getIndustries';
import empty from 'is-empty';

/** get the current category's latest post WP GRAPHQL API */
async function getCategoryContent(variables) {
  const data = await fetchAPI(categoryPageContentQuery, variables);
  return data?.category;
}

const categoriesSlugsQuery = `
query categoriesSlugs {
  categories(first: 100) {
    nodes {
      slug
    }
  }
}`;

export const getStaticPaths = async () => {
  const listId = await fetchAPI(categoriesSlugsQuery);

  const paths = [];

  listId.categories.nodes.forEach((node) => {
    paths.push(`/library/category/${node?.slug}`);
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const pageContent = await getCategoryContent({
    variables: {
      slug: params.slug,
    },
  });

  const categories = await fetchAPI(categoriesQuery);

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

  if (empty(pageContent)) {
    return {
      redirect: {
        destination: '/library?notFound=true',
        permanent: true,
      },
    };
  }

  return {
    props: {
      title: pageContent?.name,
      description: pageContent?.description,
      seo: {
        ...pageContent?.seo,
        canonicalUrl: `${PRODUCTION_URL}/library/category/${params.slug}`,
      },
      categoryId: pageContent?.databaseId,
      categories: sanitizeCategories([
        ...categories?.categories?.nodes,
        categories?.pageBy,
      ]),
      filters,
    },
    revalidate: 3600,
  };
};

/** Library category page component -- /library/category/law-firm-insights etc. */
const LibraryCategory = ({
  title,
  description,
  seo,
  categoryId,
  categories,
  filters,
}) => {
  const libraryProps = {
    title,
    description,
    seo,
    categoryId,
    categories,
    filters,
  };

  return (
    <ApolloWrapper>
      <LibraryCategoryPage {...libraryProps} />
    </ApolloWrapper>
  );
};

export default LibraryCategory;
