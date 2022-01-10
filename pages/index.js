import HomePage from 'components/pages/HomePage';
import { homePageContent, homePageLocations } from 'utils/api';
import { formatSrcToCloudinaryUrl, sortByKey } from 'utils/helpers';

export default function Home({
  seo,
  aboutFirm,
  awards,
  banner,
  intro,
  leadership,
  offices,
  serviceOne,
  serviceTwo,
}) {
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
}

const extractChair = (chair) => {
  if (chair) {
    return chair.map((c) => c.title).join(', ');
  }

  return null;
};
export async function getStaticProps() {
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
  };
}
