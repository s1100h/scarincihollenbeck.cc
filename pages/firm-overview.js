import FirmOverviewPage from 'components/pages/FirmOverview';
import { firmOverViewTitles, SITE_URL } from 'utils/constants';
import { fetchAPI } from 'utils/api';
import { firmOverviewQuery, attorneysAndAdminsQuery } from 'utils/graphql-queries';
import { SectionTitleContext } from 'contexts/SectionTitleContext';
import { useContext, useEffect } from 'react';

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
export const getServerSideProps = async () => {
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
  const { titles, setTitles } = useContext(SectionTitleContext);
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');
  const canonicalUrl = `${SITE_URL}/firm-overview`;

  /** set section titles to context provider */
  useEffect(() => {
    if (!titles || !titles?.every((title) => title?.name === 'Consul')) {
      const orderedTitles = firmOverViewTitles.sort((a, b) => (a.order > b.order ? 1 : -1));
      setTitles(orderedTitles);
    }
  }, []);

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
