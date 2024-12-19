import FirmPage from 'components/pages/FirmPage';
import { PRODUCTION_URL } from 'utils/constants';
import { fetchAPI } from 'requests/api';
import { firmPagesQuery } from 'requests/graphql-queries';
import empty from 'is-empty';

const sanitizePosts = (data) => {
  if (empty(data)) return [];

  return data[0]?.posts?.edges.map(({ node }) => ({
    databaseId: node?.id,
    title: node?.title,
    date: node?.date,
    author: node.author,
    uri: node?.uri,
  }));
};

/** firm page content  WP GRAPHQL query */
const getFirmPageContent = async (slug) => {
  const data = await fetchAPI(firmPagesQuery, {
    variables: { slug },
  });

  if (data.page?.status !== 'publish') {
    return null;
  }

  return data?.page;
};

export async function getStaticPaths() {
  const pages = ['diversity', 'community-involvement', 'pro-bono'];
  const paths = pages.map((url) => `/firm-page/${url}`);

  return {
    paths,
    fallback: 'blocking',
  };
}

/** Set firm page data to props */
export const getStaticProps = async ({ params }) => {
  const req = await getFirmPageContent(params.slug);

  if (empty(req)) {
    return {
      notFound: true,
    };
  }

  const {
    title,
    seo,
    firmPagesRelatedPostsMembers,
    firmPagesDescription,
    firmPagesTabs,
    featuredImage,
  } = req;

  const { relatedPosts } = firmPagesRelatedPostsMembers;

  const firstTab = {};
  if (firmPagesTabs?.tabContent) {
    firstTab.content = firmPagesTabs?.tabContent;
  }

  if (firmPagesTabs?.tabHeader) {
    firstTab.title = firmPagesTabs?.tabHeader;
  }

  const additionalTabs = [2, 3, 4, 5]
    .map((i) => ({
      id: i,
      title: firmPagesTabs[`tab${i}Header`],
      content: firmPagesTabs[`tab${i}Content`],
    }))
    .filter((a) => a.title !== null);

  const page = {
    title,
    description: firmPagesDescription?.description,
    attorneysRecommendedPosts: sanitizePosts(relatedPosts),
    sections: [firstTab, ...additionalTabs],
    image: featuredImage?.node?.sourceUrl || null,
    seo,
    canonicalLink: `${PRODUCTION_URL}/${params?.slug}`,
  };

  return {
    props: {
      page,
    },
    revalidate: 86400,
  };
};

/** The firm pages component - Pro Bono, Community Involvement, Diversity, Women LEAD etc. */
const FirmPages = ({ page }) => <FirmPage page={page} />;

export default FirmPages;
