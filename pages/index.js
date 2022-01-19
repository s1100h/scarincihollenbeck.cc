import HomePage from 'components/pages/HomePage';
import { fetchAPI, homePageLocations } from 'utils/api';
import { homePageQuery } from 'utils/graphql-queries';
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

/** Map the home page query data to page props */
export const getStaticProps = async () => {
  /** get page content */
  const request = await homePageContent();
  const { seo, homePage } = request;
  const {
    aboutFirm,
    awards,
    bannerLineOne,
    serviceOne,
    serviceTwo,
    bannerLineTwo,
    mainTag,
    subMainTag,
    leadership,
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
  const offices = await homePageLocations();
  const sortedOffices = offices.sort((a, b) => (a.node.title > b.node.title ? 1 : -1));

  return {
    props: {
      seo,
      aboutFirm,
      awards,
      banner: {
        lineOne: bannerLineOne,
        lineTwo: bannerLineTwo,
      },
      intro: {
        mainTag,
        subMainTag,
      },
      serviceOne,
      serviceTwo,
      leadership: modLeadership,
      offices: sortedOffices,
    },
    revalidate: 86400,
  };
};

/** The home page component */
const Home = ({
  seo,
  aboutFirm,
  awards,
  banner,
  intro,
  leadership,
  offices,
  serviceOne,
  serviceTwo,
}) => {
  const homePageProps = {
    seo,
    aboutFirm,
    awards,
    banner,
    intro,
    leadership,
    offices,
    serviceOne,
    serviceTwo,
  };
  return <HomePage {...homePageProps} />;
};

export default Home;
