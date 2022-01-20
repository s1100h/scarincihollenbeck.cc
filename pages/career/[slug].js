import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import CareerProfile from 'components/pages/CareerPage';
import { SITE_URL, BASE_API_URL, headers } from 'utils/constants';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

/** Fetch career post data from WP REST API */
const getCareersContent = async (slug) => {
  const url = `${BASE_API_URL}/wp-json/individual-career/career/${slug}`;
  const request = await fetch(url, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  return request;
};

/** Set career post data to props */
export async function getServerSideProps({ params }) {
  const request = await getCareersContent(params.slug);
  if (request.status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      career: request,
    },
  };
}

/** Single career post component */
const Career = ({ career }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <SiteLoader />;
  }

  const canonicalUrl = `${SITE_URL}/${career.uri}`;

  const careerProps = {
    career,
    canonicalUrl,
  };
  return <CareerProfile {...careerProps} />;
};

export default Career;
