import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/SiteLoader';
import FirmPage from 'components/pages/FirmPage';
import { FIRM_PAGES, SITE_URL } from 'utils/constants';
import { getFirmPageContent } from 'utils/api';

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

export default function FirmPages({ page, currentPage }) {
  const router = useRouter();
  const canonicalUrl = `${SITE_URL}/${currentPage}`;

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
}

export async function getServerSideProps({ params }) {
  const req = await getFirmPageContent(params.slug);
  const {
    title, seo, firmPagesRelatedPostsMembers, firmPagesDescription, firmPagesTabs,
  } = req;
  const { groupChair, groupMembers, relatedPosts } = firmPagesRelatedPostsMembers;
  let blogPosts = [];

  if (relatedPosts) {
    blogPosts = relatedPosts[0]?.posts?.edges.map(({ node }) => ({
      title: node?.title,
      date: node?.date,
      featuredImg: node.featuredImage?.node?.sourceUrl,
      link: node?.uri,
    }));
  }

  const relatedPages = FIRM_PAGES.filter((a) => a.slug.replace('/', '') !== params.slug);

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
    attorneysMentioned: blogPosts,
    tabs: [firstTab, ...additionalTabs],
    members: {
      member: modMembers || [],
      chair: modChair || [],
    },
    relatedPages,
    seo,
  };

  return {
    props: {
      page,
      currentPage: params.slug,
    },
  };
}
