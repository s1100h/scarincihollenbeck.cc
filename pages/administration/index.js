import { useRouter } from 'next/router';
import AdministrationPage from 'components/pages/AdminDirectory';
import { BASE_API_URL, SITE_URL, headers } from 'utils/constants';
import { fetchAPI } from 'utils/api';
import { administrationPageQuery } from 'utils/graphql-queries';

/** Fetch page data from WP GRAPHQL API */
const archivesPageContent = async () => {
  const data = await fetchAPI(administrationPageQuery, {});
  return data?.pageBy;
};

/** Fetch administration data from WP REST API */
const getAdministration = async () => {
  try {
    const res = await fetch(`${BASE_API_URL}/wp-json/admin-search/admin`, { headers });
    const resToJson = await res.json();
    return resToJson?.admins;
  } catch (error) {
    console.error(error);
  }
};

/** Set data from API response to page props */
export async function getStaticProps() {
  const admins = await getAdministration();
  const page = await archivesPageContent();
  const { title, seo, administrationArchive } = page;

  return {
    props: {
      seo,
      site: {
        title,
        description: administrationArchive.description,
      },
      admins,
    },
    revalidate: 86400,
  };
}

/** Administration directory page component */
const Administration = ({ admins, seo, site }) => {
  const router = useRouter();
  const canonicalUrl = `${SITE_URL}${router.asPath}`;
  const adminProps = {
    admins,
    seo,
    canonicalUrl,
    site,
  };
  return <AdministrationPage {...adminProps} />;
};

export default Administration;
