import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';
import AdministrationProfile from 'components/pages/AdminProfile';
import { SITE_URL } from 'utils/constants';
import { getAdministrationContent } from 'utils/queries';

export default function AdministrationProfilePage({ response }) {
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
    phoneNumber: `201-896-4100 ${response.phone_extension}`,
    socialMedia: response.social_media_links,
    offices: response.offices,
  };

  const canonicalUrl = `${SITE_URL}/${response.seo.canonicalLink}`;

  const adminProps = {
    response,
    profile,
    canonicalUrl,
  };

  return <AdministrationProfile {...adminProps} />;
}

export async function getServerSideProps({ params, res }) {
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
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=60, stale-while-revalidate');
  return {
    props: {
      response,
    },
    // revalidate: 86400,
  };
}
