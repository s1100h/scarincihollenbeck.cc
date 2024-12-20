import CareerProfile from 'components/pages/CareerPage';
import { PRODUCTION_URL, BASE_API_URL, headers } from 'utils/constants';

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
  if (careersContent.status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      career: careersContent,
      canonicalUrl: `${PRODUCTION_URL}${params.slug}`,
    },
  };
}

/** Single career post component */
const Career = ({ career, canonicalUrl }) => {
  const careerProps = {
    career,
    canonicalUrl,
  };
  return <CareerProfile {...careerProps} />;
};

export default Career;
