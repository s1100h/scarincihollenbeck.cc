import FirmOverviewPage from 'components/pages/FirmOverview';
import {
  firmOverViewTitles,
  SITE_PHONE,
  PRODUCTION_URL,
} from 'utils/constants';
import { fetchAPI } from 'requests/api';
import { firmOverviewQuery } from 'requests/graphql-queries';
import {
  getSubTitleFromHTML,
  sortAttorneysByCategory,
  sortByKey,
} from 'utils/helpers';

/** Fetch the firm overview page content WP GRAPHQL API */
export async function getFirmOverviewContent() {
  const data = await fetchAPI(firmOverviewQuery);
  return data?.pageBy;
}

const sanitizeMembers = (members) => members.map((member) => ({
  title: member.title,
  uri: member.attorneyMainInformation
    ? `attorneys/${member.slug}`
    : `administration/${member.slug}`,
  better_featured_image:
      member.attorneyMainInformation?.profileImage?.sourceUrl
      || member.administration?.featuredImage?.sourceUrl,
  phone:
      member.attorneyMainInformation?.phoneNumber
      || `${SITE_PHONE} #${member.administration?.phoneExtension}`,
  email:
      member.attorneyMainInformation?.email || member.administration?.email,
  designation:
      (member.attorneyMainInformation?.designation
        !== 'Firm Managing Partner'
      && member.attorneyMainInformation?.designation
        !== 'Deputy Managing Partner'
      && member.attorneyMainInformation?.designation !== 'NYC Managing Partner'
        ? member.attorneyChairCoChair
        : member.attorneyMainInformation.designation)
      || member.administration?.title,
}));

export const getServerSideProps = async () => {
  const pageRequest = await getFirmOverviewContent();

  const {
    title, seo, content, firmOverviewTabs,
  } = pageRequest;
  const {
    // this was committed(2.02.2022). it need for /firm-overview.
    // firmChairsCochairs,
    directors,
    firmLeaders,
  } = firmOverviewTabs;
  const restFirmMembers = [
    ...sanitizeMembers(firmLeaders),
    // this was committed(2.02.2022). it need for /firm-overview.
    // ...sanitizeMembers(firmChairsCochairs),
    ...sanitizeMembers(directors),
  ];
  const sortedTitlesByOrder = sortByKey(firmOverViewTitles, 'order');
  const sorteredFirmMembers = sortAttorneysByCategory(
    restFirmMembers,
    sortedTitlesByOrder,
  );

  return {
    props: {
      title,
      seo,
      content,
      firmOverviewTabs,
      FirmMembers: sorteredFirmMembers,
    },
  };
};

/** The Firm Overview page component */
const FirmOverview = ({
  title,
  seo,
  content,
  firmOverviewTabs,
  administration,
  FirmMembers,
}) => {
  const { clearBody, subTitle } = getSubTitleFromHTML(content);
  const canonicalUrl = `${PRODUCTION_URL}/firm-overview`;

  const firmOverviewProps = {
    title,
    seo,
    canonicalUrl,
    bodyContent: clearBody,
    subTitle,
    firmOverviewTabs,
    administration,
    FirmMembers,
  };

  return <FirmOverviewPage {...firmOverviewProps} />;
};

export default FirmOverview;
