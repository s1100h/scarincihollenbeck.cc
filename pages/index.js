import HomePage from 'components/pages/HomePage';
import { fetchAPI } from 'requests/api';
import {
  firmNewsQuery,
  homePageQuery,
  officeLocationQuery,
} from 'requests/graphql-queries';

/** pull out the attorney chair data from attorney response */
const extractChair = (chair) => {
  if (chair) {
    return chair.map((c) => c.title).join(', ');
  }

  return null;
};

/** Get homepage content WP GRAPHQL API */
export async function homePageContent() {
  const data = await fetchAPI(homePageQuery, {});

  return data?.pageBy;
}

const getMapDataFrmLocations = async () => {
  const { officeLocations } = await fetchAPI(officeLocationQuery, {});
  return officeLocations?.nodes;
};

const getFirmNewsArticles = async () => {
  const { posts } = await fetchAPI(firmNewsQuery, {});
  return posts?.nodes;
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

const sanitizeFirmNews = (news) => news.map(
  ({
    date, databaseId, slug, featuredImage, title, excerpt, author,
  }) => ({
    date,
    databaseId,
    slug: `/firm-news/${slug}`,
    featuredImage: featuredImage.node,
    title,
    excerpt,
    author: author.node.name,
  }),
);

/** Map the home page query data to page props */
export const getStaticProps = async () => {
  /** get page content */
  const firmNewsArticles = sanitizeFirmNews(await getFirmNewsArticles());

  const offices = await getMapDataFrmLocations();
  const request = await homePageContent();
  const { seo, homePage } = request;
  const {
    awards,
    mainTag,
    subMainTag,
    isHoliday,
    firstSection,
    whoWeAre,
    industryWeWorkWith,
    whatWeDo,
    whyChooseUs,
  } = homePage;

  /** get firm locations */
  // const offices = await homePageLocations();

  const sortedOffices = offices.sort((a, b) => (a.title > b.title ? 1 : -1));
  return {
    props: {
      seo,
      awards,
      firmNewsArticles,
      offices: sanitizeOffices(sortedOffices),
      isHoliday,
      firstSection,
      whoWeAre,
      industryWeWorkWith,
      whatWeDo,
      whyChooseUs,
    },
    revalidate: 86400,
  };
};

/** The home page component */
const Home = ({
  seo,
  awards,
  firmNewsArticles,
  offices,
  isHoliday,
  firstSection,
  whoWeAre,
  industryWeWorkWith,
  whatWeDo,
  whyChooseUs,
}) => {
  const homePageProps = {
    seo,
    awards,
    firmNewsArticles,
    offices,
    isHoliday,
    firstSection,
    whoWeAre,
    industryWeWorkWith,
    whatWeDo,
    whyChooseUs,
  };
  return <HomePage {...homePageProps} />;
};

export default Home;
