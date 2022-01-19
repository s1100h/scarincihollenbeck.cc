import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/SiteLoader';
import AdminProfile from 'components/pages/AdminProfile';
import {
  SITE_URL, SITE_PHONE, BASE_API_URL, headers,
} from 'utils/constants';

/** Fetch data from WP-REST API */
const getAdministrationContent = async (slug) => {
  const url = `${BASE_API_URL}/wp-json/individual-admin/admin/${slug}`;
  const request = await fetch(url, {
    headers,
  })
    .then((data) => data.json())
    .catch((err) => err);

  return request;
};

/** Set data from API response to page props */
export const getServerSideProps = async ({ params, res }) => {
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=60, stale-while-revalidate');
  const response = await getAdministrationContent(params.slug);

  if (JSON.stringify(response) === '{}') {
    return {
      notFound: true,
    };
  }

  if (Object.keys(response).includes('status') && response.status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      response,
    },
  };
};

/** Administration profile component */
const AdministrationProfile = ({ response }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    );
  }

  const profile = {
    email: response.email,
    vizibility: response.vizibility,
    name: response.name,
    designation: response.Title,
    phoneNumber: `${SITE_PHONE} ${response.phone_extension}`,
    socialMedia: response.social_media_links,
    offices: response.offices,
  };

  const canonicalUrl = `${SITE_URL}/${response.seo.canonicalLink}`;

  const adminProps = {
    response,
    profile,
    canonicalUrl,
  };

  return <AdminProfile {...adminProps} />;
};

export default AdministrationProfile;
