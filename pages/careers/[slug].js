import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import CareerProfile from 'components/pages/CareerPage';
import { PRODUCTION_URL, BASE_API_URL, headers } from 'utils/constants';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

/** Fetch career post data from WP REST API */
const getCareersContent = async (slug) => {
  const url = `${BASE_API_URL}/wp-json/individual-career/career/${slug}`;
  try {
    const res = await fetch(url, { headers });

    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

/** Set career post data to props */
export async function getServerSideProps({ params }) {
  const careersContent = await getCareersContent(params.slug);

  if (!careersContent) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      career: careersContent,
    },
  };
}

/** Single career post component */
const Career = ({ career }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <SiteLoader />;
  }

  const canonicalUrl = `${PRODUCTION_URL}${router.asPath}`;

  const careerProps = {
    career,
    canonicalUrl,
  };
  return <CareerProfile {...careerProps} />;
};

export default Career;
