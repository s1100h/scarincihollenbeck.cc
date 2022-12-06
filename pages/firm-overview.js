import FirmOverviewPage from 'components/pages/FirmOverview';
import { firmOverViewTitles, SITE_PHONE, SITE_URL } from 'utils/constants';
import { fetchAPI } from 'utils/api';
import { firmOverviewQuery } from 'utils/graphql-queries';
import { AttorneysContext } from 'contexts/AttorneysContext';
import { useContext, useEffect } from 'react';
import { getSubTitleFromHTML } from 'utils/helpers';

/** Fetch the firm overview page content WP GRAPHQL API */
export async function getFirmOverviewContent() {
  const data = await fetchAPI(firmOverviewQuery);

  return data?.pageBy;
}

const sanitizeMembers = (members) => members.map((member) => ({
  title: member.title,
  uri: member.slug,
  better_featured_image:
      member.attorneyMainInformation?.profileImage?.sourceUrl
      || member.administration?.featuredImage?.sourceUrl,
  phone:
      member.attorneyMainInformation?.phoneNumber
      || `${SITE_PHONE} #${member.administration?.phoneExtension}`,
  email: member.attorneyMainInformation?.email || member.administration?.email,
  designation:
      (member.attorneyMainInformation?.designation !== 'Firm Managing Partner'
        ? member.attorneyChairCoChair
        : member.attorneyMainInformation.designation) || member.administration?.title,
}));

export const getServerSideProps = async () => {
  const pageRequest = await getFirmOverviewContent();

  const {
    title, seo, content, firmOverviewTabs,
  } = pageRequest;
  const { firmChairsCochairs, directors, firmLeaders } = firmOverviewTabs;

  return {
    props: {
      title,
      seo,
      content,
      firmOverviewTabs,
      FirmMembers: [
        ...sanitizeMembers(firmLeaders),
        ...sanitizeMembers(firmChairsCochairs),
        ...sanitizeMembers(directors),
      ],
    },
  };
};

/** The Firm Overview page component */
const FirmOverview = ({
  title,
  seo,
  content,
  firmOverviewTabs,
  attorneys,
  administration,
  FirmMembers,
}) => {
  const { firmOverviewTitles, setFirmOverviewTitles } = useContext(AttorneysContext);
  const { clearBody, subTitle } = getSubTitleFromHTML(content);
  const canonicalUrl = `${SITE_URL}/firm-overview`;

  /** set section titles to context provider */
  useEffect(() => {
    if (!firmOverviewTitles) {
      const orderedTitles = firmOverViewTitles.sort((a, b) => (a.order > b.order ? 1 : -1));
      setFirmOverviewTitles(orderedTitles);
    }
  }, [firmOverviewTitles]);

  const firmOverviewProps = {
    title,
    seo,
    canonicalUrl,
    bodyContent: clearBody,
    subTitle,
    firmOverviewTabs,
    attorneys,
    administration,
    FirmMembers,
  };

  return <FirmOverviewPage {...firmOverviewProps} />;
};

export default FirmOverview;
