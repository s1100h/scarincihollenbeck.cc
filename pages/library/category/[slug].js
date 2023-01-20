import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import LibraryDirectory from 'components/pages/LibraryDirectory';
import ApolloWrapper from 'layouts/ApolloWrapper';
import { SITE_URL, BASE_API_URL, headers } from 'utils/constants';
import { formatSrcToCloudinaryUrl } from 'utils/helpers';
import { fetchAPI } from 'utils/api';
import { categoryPostQuery } from 'utils/graphql-queries';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

/** Fetch additional page information such as authors and popular categories from WP REST API */
const getLibraryCategoryContent = async () => {
  try {
    const [authors, popularCategories] = await Promise.all([
      fetch(`${BASE_API_URL}/wp-json/author/full-list`, { headers })
        .then((data) => data.json())
        .catch((err) => err),
      fetch(`${BASE_API_URL}/wp-json/category/popular-categories`, { headers })
        .then((data) => data.json())
        .catch((err) => err),
    ]);

    return [authors, popularCategories];
  } catch (error) {
    console.error(error);
  }
};

/** get the current category's latest post WP GRAPHQL API */
export async function categoryPosts(variables) {
  const data = await fetchAPI(categoryPostQuery, variables);
  return data.categories?.edges;
}

export const getServerSideProps = async ({ params, res }) => {
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=60, stale-while-revalidate');
  const [authors, popularCategories] = await getLibraryCategoryContent();
  const pageContent = await categoryPosts({
    variables: {
      name: params.slug,
    },
  });

  if (pageContent.length <= 0) {
    return {
      notFound: true,
    };
  }
  const content = pageContent[0].node;
  const news = content.posts?.edges.map(({ node }, index) => ({
    ID: index,
    title: node.title,
    link: node.uri.replace('https://scarincihollenbeck.com', ''),
    date: node.date,
    excerpt: node.excerpt,
    author: node.author.node.name,
    image: formatSrcToCloudinaryUrl(node.featuredImage?.node?.sourceUrl),
    category:
      node.categories.length > 0
        ? node.categories?.edges.map(({ node }) => ({
          name: node.name,
          link: node.link,
        }))
        : [],
  }));

  const categoryChildren = content.children.nodes.length > 0 ? content.children.nodes : [];

  const modPopCategories = popularCategories.map(({
    id, slug, name, postCount,
  }) => ({
    id,
    slug,
    name,
    count: postCount,
  }));

  return {
    props: {
      news,
      authors: authors || [],
      popularCategories: modPopCategories || [],
      childrenOfCurrentCategory: categoryChildren,
      description: content.description,
      name: content.name,
      pageTitle: params.slug,
      categoryId: content.databaseId,
      seo: {
        title: content.seo.title,
        metaDescription: content.seo.metaDesc,
      },
    },
  };
};

/** Library category page component -- /library/category/law-firm-insights etc. */
const LibraryCategory = ({
  authors,
  childrenOfCurrentCategory,
  description,
  pageTitle,
  popularCategories,
  news,
  name,
  categoryId,
  seo,
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    );
  }

  const canonicalUrl = `${SITE_URL}/library/${pageTitle}`;

  const libraryProps = {
    seo: {
      title: seo.title,
      metaDescription: seo.metaDescription,
      canonicalUrl,
    },
    news,
    authors,
    popularCategories,
    childrenOfCurrentCategory,
    currentPageTitle: name,
    categoryName: name,
    description,
    categoryId,
  };

  return (
    <ApolloWrapper>
      <LibraryDirectory {...libraryProps} />
    </ApolloWrapper>
  );
};

export default LibraryCategory;
