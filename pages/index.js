import HomePage from 'components/pages/HomePage';
import { fetchAPI, homePageLocations } from 'utils/api';
import { homePageQuery, officeLocationQuery } from 'utils/graphql-queries';
import { formatSrcToCloudinaryUrl } from 'utils/helpers';

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

/** Map the home page query data to page props */
export const getStaticProps = async () => {
  /** get page content */
  const offices = await getMapDataFrmLocations();
  const request = await homePageContent();
  const { seo, homePage } = request;
  const {
    aboutFirm,
    aboutFirm2,
    awards,
    bannerLineOne,
    serviceOne,
    serviceTwo,
    bannerLineTwo,
    quote,
    mainTag,
    subMainTag,
    leadership,
    isHoliday,
  } = homePage;

  const modLeadership = leadership.map(
    ({
      title,
      uri,
      featuredImage,
      administration,
      attorneyMainInformation,
      attorneyChairCoChair,
    }) => ({
      title,
      slug: uri,
      featuredImage: formatSrcToCloudinaryUrl(featuredImage?.node?.sourceUrl),
      designation: administration ? administration?.title : attorneyMainInformation?.designation,
      chair: attorneyChairCoChair ? extractChair(attorneyChairCoChair?.chair) : null,
    }),
  );

  /** get firm locations */
  // const offices = await homePageLocations();
  const sanitizeOffices = (offices) => offices.map(({
    databaseId, slug, title, officeMainInformation,
  }) => ({
    databaseId,
    slug,
    title,
    ...officeMainInformation,
  }));

  const sortedOffices = offices.sort((a, b) => (a.title > b.title ? 1 : -1));
  return {
    props: {
      seo,
      aboutFirm,
      aboutFirm2,
      awards,
      banner: {
        lineOne: bannerLineOne,
        lineTwo: bannerLineTwo,
        quote,
      },
      intro: {
        mainTag,
        subMainTag,
      },
      serviceOne,
      serviceTwo,
      leadership: modLeadership,
      offices: sanitizeOffices(sortedOffices),
      isHoliday,
    },
    revalidate: 86400,
  };
};

/** The home page component */
const Home = ({
  seo,
  aboutFirm,
  aboutFirm2,
  awards,
  banner,
  intro,
  leadership,
  offices,
  serviceOne,
  serviceTwo,
  isHoliday,
}) => {
  const homePageProps = {
    seo,
    aboutFirm,
    aboutFirm2,
    awards,
    banner,
    intro,
    leadership,
    offices,
    serviceOne,
    serviceTwo,
    isHoliday,
  };
  return <HomePage {...homePageProps} />;
};

export default Home;
