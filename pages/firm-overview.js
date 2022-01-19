import FirmOverviewPage from 'components/pages/FirmOverview';
import { SITE_URL } from 'utils/constants';
import { fetchAPI } from 'utils/api';
import { firmOverviewQuery, attorneysAndAdminsQuery } from 'utils/graphql-queries';

/** Fetch the firm overview page content WP GRAPHQL API */
export async function getFirmOverviewContent() {
  const data = await fetchAPI(firmOverviewQuery);

  return data?.pageBy;
}

/** Fetch the attorneys and administration data WP GRAPHQL API */
export async function getAttorneyAndAdmins() {
  const data = await fetchAPI(attorneysAndAdminsQuery);
  return data;
}

/** Map the fetched data to the page props */
export const getStaticProps = async () => {
  const pageRequest = await getFirmOverviewContent();
  const attorneyAdminRequest = await getAttorneyAndAdmins();

  const {
    title, seo, content, firmOverviewTabs,
  } = pageRequest;
  const { attorneyProfiles, administrations } = attorneyAdminRequest;

  return {
    props: {
      title,
      seo,
      content,
      firmOverviewTabs,
      attorneys: attorneyProfiles?.edges,
      administration: administrations?.edges,
    },
  };
};

/** The Firm Overview page component */
const FirmOverview = ({
  title, seo, content, firmOverviewTabs, attorneys, administration,
}) => {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');
  const canonicalUrl = `${SITE_URL}/firm-overview`;

  const firmOverviewProps = {
    title,
    seo,
    canonicalUrl,
    bodyContent,
    subTitle,
    firmOverviewTabs,
    attorneys,
    administration,
  };

  return <FirmOverviewPage {...firmOverviewProps} />;
};

export default FirmOverview;
