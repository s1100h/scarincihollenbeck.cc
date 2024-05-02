import { useRouter } from 'next/router';
import AdministrationPage from 'components/pages/AdminDirectory';
import {
  administrationTitles,
  PRODUCTION_URL,
  SITE_PHONE,
} from 'utils/constants';
import { fetchAPI } from 'requests/api';
import { administrationPageQuery, adminsQuery } from 'requests/graphql-queries';
import { sortAttorneysByCategory, sortByKey } from 'utils/helpers';

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
  const sortedAdminsByOrder = sortByKey(admins, 'order');
  const sortedTitlesByOrder = sortByKey(administrationTitles, 'order');
  const sorteredAdmins = sortAttorneysByCategory(
    sortedAdminsByOrder,
    sortedTitlesByOrder,
  );

  return {
    props: {
      seo,
      site: {
        title,
        description: administrationArchive.description,
      },
      admins: sorteredAdmins,
      orderedTitles: sortedTitlesByOrder,
    },
    revalidate: 86400,
  };
}

/** Administration directory page component */
const Administration = ({
  admins, seo, site, orderedTitles,
}) => {
  const router = useRouter();
  const canonicalUrl = `${PRODUCTION_URL}${router.asPath}`;

  const adminProps = {
    admins,
    seo,
    canonicalUrl,
    site,
  };
  return <AdministrationPage {...adminProps} />;
};

export default Administration;
