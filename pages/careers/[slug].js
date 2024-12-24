import CareerProfile from 'components/pages/CareerPage';
import { fetchAPI } from 'requests/api';
import { careerPageQuery } from 'requests/graphql-queries';
import { PRODUCTION_URL } from 'utils/constants';
import empty from 'is-empty';

/** Fetch career post data from WP REST API */
const getCareerPageContent = async (slug) => {
  const data = await fetchAPI(careerPageQuery, {
    variables: { slug },
  });

  if (data.career?.status !== 'publish') {
    return null;
  }

  return data?.career;
};

/** Set career post data to props */
export async function getServerSideProps({ params }) {
  const careersContent = await getCareerPageContent(params.slug);

  if (empty(careersContent)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      career: careersContent,
      canonicalUrl: `${PRODUCTION_URL}/careers/${params.slug}`,
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
