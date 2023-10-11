import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import AdminProfile from 'components/pages/AdminProfile';
import { PRODUCTION_URL, SITE_PHONE } from 'utils/constants';
import { concatNameUser } from 'utils/helpers';
import { fetchAPI } from '../../requests/api';
import { administrationPersoneQuery } from '../../requests/graphql-queries';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

const getAdminData = async (uriAdmin) => {
  const {
    administration: { administration, seo, uri },
  } = await fetchAPI(administrationPersoneQuery, {
    variables: {
      id: uriAdmin,
    },
  });

  return {
    profile: {
      name: concatNameUser(administration.name, administration.abbreviation),
      biography: administration.biography,
      profileImage: administration.featuredImage.sourceUrl,
      title: administration.designation,
      contact: {
        email: administration.email,
        phoneNumber: `${SITE_PHONE} ${administration.phoneExtension}`,
        vizibility: administration.vizibility,
        socialMediaLinks: administration.socialMediaLinks,
      },
      offices: administration.location.map(
        ({ id, uri, officeMainInformation }) => ({
          id,
          uri,
          name: officeMainInformation.addressLocality,
        }),
      ),
    },
    seo: {
      canonicalLink: uri,
      metaDescription: seo.metaDesc,
      title: seo.title,
    },
  };
};

/** Set data from API response to page props */
export const getServerSideProps = async ({ res, resolvedUrl }) => {
  res.setHeader(
    'Cache-Control',
    'max-age=0, s-maxage=60, stale-while-revalidate',
  );
  const dataAdmin = await getAdminData(resolvedUrl);

  if (!resolvedUrl) {
    return {
      notFound: true,
    };
  }

  if (!dataAdmin) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      dataAdmin,
    },
  };
};

/** Administration profile component */
const AdministrationProfile = ({ dataAdmin }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    );
  }

  const canonicalUrl = `${PRODUCTION_URL}${dataAdmin.seo.canonicalLink}`;

  const adminProps = {
    seo: dataAdmin.seo,
    profile: dataAdmin.profile,
    canonicalUrl,
  };

  return <AdminProfile {...adminProps} />;
};

export default AdministrationProfile;
