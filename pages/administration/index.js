import { useRouter } from 'next/router';
import AdministrationPage from 'components/pages/AdminDirectory';
import { administrationTitles, PRODUCTION_URL, SITE_PHONE } from 'utils/constants';
import { fetchAPI } from 'utils/api';
import { administrationPageQuery, adminsQuery } from 'utils/graphql-queries';
import { useContext, useEffect } from 'react';
import { AttorneysContext } from 'contexts/AttorneysContext';

/** Fetch page data from WP GRAPHQL API */
const archivesPageContent = async () => {
  const data = await fetchAPI(administrationPageQuery, {});
  return data?.pageBy;
};

/** Fetch administration data from WP REST API */
const getAdministration = async () => {
  const data = await fetchAPI(adminsQuery);
  return data?.administrations.nodes.map((admin) => {
    admin.administration.featuredImage = admin.administration.featuredImage.sourceUrl;
    admin.administration.phone = `${SITE_PHONE} ${admin.administration.phoneExtension}`;
    admin.administration.location_array = admin.administration.location;
    return {
      uri: admin.uri,
      title: admin.title,
      id: admin.databaseId,
      ...admin.administration,
    };
  });
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
  const { adminsTitles, setAdminsTitles } = useContext(AttorneysContext);
  const router = useRouter();
  const canonicalUrl = `${PRODUCTION_URL}${router.asPath}`;

  useEffect(() => {
    if (!adminsTitles) {
      const orderedTitles = administrationTitles.sort((a, b) => (a.order > b.order ? 1 : -1));
      setAdminsTitles(orderedTitles);
    }
  }, [adminsTitles]);

  const adminProps = {
    admins,
    seo,
    canonicalUrl,
    site,
  };
  return <AdministrationPage {...adminProps} />;
};

export default Administration;
