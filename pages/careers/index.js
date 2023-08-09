import { useRouter } from 'next/router';
import CareersPage from 'components/pages/CareersDirectory';
import { PRODUCTION_URL } from 'utils/constants';
import { fetchAPI } from 'utils/api';
import { careersPageQuery, careersQuery } from 'utils/graphql-queries';

/** return careers page content  */
const careersPageContent = async () => {
  const data = await fetchAPI(careersPageQuery, {});
  return data?.pageBy;
};

const getCareerList = async () => {
  const careers = await fetchAPI(careersQuery);
  return careers.careers.nodes;
};

const sanitizeCareers = (careerArr) => {
  const restructured = careerArr.map(({ databaseId, slug, careerFields }) => ({
    databaseId,
    slug,
    ...careerFields,
  }));

  return restructured.reduce((result, career) => {
    const { positionType } = career;
    const lowercasePositionType = positionType?.toLowerCase();

    if (!result[lowercasePositionType]) {
      result[lowercasePositionType] = [];
    }

    result[lowercasePositionType].push(career);
    return result;
  }, {});
};

export const getStaticProps = async () => {
  const careerList = await getCareerList();
  const page = await careersPageContent();
  const { seo, title, careersPage } = page;

  return {
    props: {
      seo,
      site: {
        title,
        description: careersPage.description,
        bodyContent: careersPage.equalEmploymentOpportunityContent,
      },
      careerList: sanitizeCareers(careerList),
    },
    revalidate: 86400,
  };
};

/** The careers page directory component */
const CareersDirectory = ({ careerList, seo, site }) => {
  const router = useRouter();
  const canonicalUrl = `${PRODUCTION_URL}${router.asPath}`;

  const careerProps = {
    seo,
    site,
    canonicalUrl,
    careers: careerList,
  };

  return <CareersPage {...careerProps} />;
};

export default CareersDirectory;
