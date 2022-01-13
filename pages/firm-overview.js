import FirmOverviewPage from 'components/pages/FirmOverview';
import { SITE_URL, BASE_API_URL } from 'utils/constants';
import { getFirmOverviewContent, getAttorneyAndAdmins } from 'utils/api';

export default function FirmOverview({
  title,
  seo,
  content,
  firmOverviewTabs,
  attorneys,
  administration,
}) {
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
}

export async function getStaticProps() {
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
}
