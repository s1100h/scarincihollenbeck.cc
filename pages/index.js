import HomePage from 'components/pages/HomePage';
import { fetchAPI } from 'requests/api';
import { getAttorneysForRandomBio } from 'requests/getAttorneys';
import { getPractices } from 'requests/getPractices';
import {
  homePageQuery,
  latestAllPosts,
  latestClientAlertsArticles,
  latestFirmInsightsArticles,
  latestFirmNewsArticles,
  officeLocationQuery,
} from 'requests/graphql-queries';
import {
  chunkArray,
  filterAttorneysByDesignation,
  filterTunePractices,
  sortByKey,
} from 'utils/helpers';

/** Get homepage content WP GRAPHQL API */
export async function homePageContent() {
  const data = await fetchAPI(homePageQuery, {});

  return data?.pageBy;
}

const getMapDataFrmLocations = async () => {
  const { officeLocations } = await fetchAPI(officeLocationQuery, {});
  return officeLocations?.nodes;
};

const getLatestArticlesTabsData = async () => {
  const { posts } = await fetchAPI(latestAllPosts, {});
  const { posts: clientAlertsPosts } = await fetchAPI(
    latestClientAlertsArticles,
    {},
  );
  const { posts: firmNewsPosts } = await fetchAPI(latestFirmNewsArticles, {});
  const { posts: firmInsightsPosts } = await fetchAPI(
    latestFirmInsightsArticles,
    {},
  );

  return {
    allPosts: {
      categoryLink: '/library/category/client-alert',
      articles: [...chunkArray(posts.nodes, 4)],
    },
    clientAlertsPosts: {
      categoryLink: '/library/category/client-alert',
      articles: [...chunkArray(clientAlertsPosts.nodes, 4)],
    },
    firmNewsPosts: {
      categoryLink: '/library/category/firm-news',
      articles: [...chunkArray(firmNewsPosts.nodes, 4)],
    },
    firmInsightsPosts: {
      categoryLink: '/library/category/law-firm-insights',
      articles: [...chunkArray(firmInsightsPosts.nodes, 4)],
    },
  };
};

export const sanitizeOffices = (offices) => offices.map(({
  databaseId, slug, title, officeMainInformation,
}) => {
  if (officeMainInformation?.autoMap?.mediaItemUrl?.length > 0) {
    officeMainInformation.autoMap = officeMainInformation.autoMap.mediaItemUrl;
  }
  if (officeMainInformation?.trainStationsMap?.mediaItemUrl?.length > 0) {
    officeMainInformation.trainStationsMap = officeMainInformation.trainStationsMap.mediaItemUrl;
  }
  return {
    databaseId,
    slug,
    title,
    ...officeMainInformation,
  };
});

/** Map the home page query data to page props */
export const getStaticProps = async () => {
  /** get page content */
  const latestArticlesTabsData = await getLatestArticlesTabsData();

  const offices = await getMapDataFrmLocations();
  const request = await homePageContent();
  const attorneys = await getAttorneysForRandomBio();
  const practices = await getPractices();
  const filteredPractices = sortByKey(practices, 'title').filter(
    filterTunePractices,
  );

  const filteredAttorneysByDesignation = filterAttorneysByDesignation(attorneys);

  const { seo, homePage } = request;
  const {
    awards,
    isHoliday,
    firstSection,
    whoWeAre,
    industryWeWorkWith,
    whyChooseUs,
  } = homePage;

  /** get firm locations */
  // const offices = await homePageLocations();

  const sortedOffices = offices.sort((a, b) => (a.title > b.title ? 1 : -1));
  return {
    props: {
      seo,
      awards,
      offices: sanitizeOffices(sortedOffices),
      isHoliday,
      firstSection,
      whoWeAre,
      industryWeWorkWith,
      latestArticlesTabsData,
      whyChooseUs,
      attorneys: filteredAttorneysByDesignation,
      practices: filteredPractices,
    },
    revalidate: 86400,
  };
};

/** The home page component */
const Home = ({
  seo,
  awards,
  offices,
  isHoliday,
  firstSection,
  whoWeAre,
  industryWeWorkWith,
  latestArticlesTabsData,
  whyChooseUs,
  attorneys,
  practices,
}) => {
  const homePageProps = {
    seo,
    awards,
    offices,
    isHoliday,
    firstSection,
    whoWeAre,
    industryWeWorkWith,
    latestArticlesTabsData,
    whyChooseUs,
    attorneys,
    practices,
  };
  return <HomePage {...homePageProps} />;
};

export default Home;
