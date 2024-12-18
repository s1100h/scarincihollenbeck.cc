import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import FirmPage from 'components/pages/FirmPage';
import { PRODUCTION_URL } from 'utils/constants';
import { fetchAPI } from 'requests/api';
import { firmPagesQuery } from 'requests/graphql-queries';
import empty from 'is-empty';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

/** sanitize the attorney and administration response mapping the data to the same keys */
const sanitizeAttorneyProfile = (node) => ({
  ID: node.id,
  name: node.title,
  lastName: node.attorneyMainInformation?.lastName,
  link: node.uri,
  image: node.featuredImage?.node?.sourceUrl,
  email: node.attorneyMainInformation?.email,
  contact: node.attorneyMainInformation?.phoneNumber,
  designation: node.attorneyMainInformation?.designation,
});

/** firm page content  WP GRAPHQL query */
export async function getFirmPageContent(slug, relatedPostsCategoryId) {
  const data = await fetchAPI(firmPagesQuery, {
    variables: { slug, categoryId: relatedPostsCategoryId },
  });
  if (data.page?.status !== 'publish') {
    return null;
  }

  return data?.page;
}

const diversityCategoryId = (slug) => {
  const pagesMap = {
    diversity: 5789,
  };

  return pagesMap[slug] || 98;
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
  const req = await getFirmPageContent(
    params.slug,
    diversityCategoryId(params.slug),
  );

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

  const { groupChair, groupMembers, relatedPosts } = firmPagesRelatedPostsMembers;
  let blogRecommendedPosts = [];

  if (relatedPosts) {
    blogRecommendedPosts = relatedPosts[0]?.posts?.edges.map(({ node }) => ({
      title: node?.title,
      date: node?.date,
      featuredImage: node.featuredImage?.node?.sourceUrl,
      author: node.author?.node?.name,
      uri: node?.uri.replace('https://scarincihollenbeck.com/', '/'),
    }));
  }

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

  const modMembers = groupMembers?.map((node) => sanitizeAttorneyProfile(node));
  const modChair = groupChair?.map((node) => sanitizeAttorneyProfile(node));

  const page = {
    title,
    description: firmPagesDescription?.description,
    attorneysRecommendedPosts: blogRecommendedPosts,
    sections: [firstTab, ...additionalTabs],
    members: {
      member: modMembers || [],
      chair: modChair || [],
    },
    image: featuredImage?.node?.sourceUrl || null,
    seo,
  };

  return {
    props: {
      page,
      currentPage: params.slug,
    },
    revalidate: 86400,
  };
};

/** The firm pages component - Pro Bono, Community Involvement, Diversity, Women LEAD etc. */
const FirmPages = ({ page, currentPage }) => {
  const router = useRouter();
  const canonicalUrl = `${PRODUCTION_URL}/${currentPage}`;

  if (router.isFallback) {
    return <SiteLoader />;
  }

  const handleLink = (e) => {
    router.push(e.target.value);
  };

  const firmPageProps = {
    page,
    canonicalUrl,
    handleLink,
  };

  return <FirmPage {...firmPageProps} />;
};

export default FirmPages;
