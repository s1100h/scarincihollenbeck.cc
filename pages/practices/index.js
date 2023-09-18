import { sortByKey } from 'utils/helpers';
import { PRODUCTION_URL, BASE_API_URL, headers } from 'utils/constants';
import { fetchAPI } from 'utils/api';
import { getPracticesQuery, practicePageQuery } from 'utils/graphql-queries';
import PracticesDirectory from 'components/pages/PracticesDirectory';

/** Sanitize the practice data and organized it by core practices, additional practices, etc. */
const sortPracticeCategories = (list) => {
  const core = list.filter((e) => e.category === 'Core Practices');
  const additional = list.filter((e) => e.category === 'Additional Practices');
  const business = list.filter((e) => e.category === 'Business Related Practices');
  return {
    core,
    additional,
    business,
  };
};

/** Fetch the practice page content WP GRAPHQL API */
const practicesPageContent = async () => {
  const data = await fetchAPI(practicePageQuery, {});
  return data?.pageBy;
};

/** Fetch all the practices from WP REST API */
const getAllPractices = async () => {
  try {
    const res = await fetch(`${BASE_API_URL}/wp-json/practice-portal/page/`, { headers });
    const resToJson = await res.json();
    return resToJson?.practices;
  } catch (error) {
    console.error(error);
  }
};

const getPractices = async () => {
  const data = await fetchAPI(getPracticesQuery, {});
  const practicesFiltered = data.practices.nodes
    .filter(({ practicePortalPageContent }) => practicePortalPageContent?.practicePortalCategories?.includes('Core Practices'))
    .map(({
      databaseId, title, uri, practicesIncluded, practicePortalPageContent,
    }) => ({
      databaseId,
      title,
      uri,
      ...practicesIncluded,
      ...practicePortalPageContent,
    }));
  return practicesFiltered;
};
/** Map practice page data to page props */
export const getStaticProps = async () => {
  const allPractices = await getAllPractices();
  const page = await practicesPageContent();
  const results = sortPracticeCategories(allPractices);
  const practices = await getPractices();
  const { core, additional, business } = results;
  const { title, seo, practiceArchives } = page;

  return {
    props: {
      seo,
      title,
      core,
      additional,
      business,
      practices,
      site: {
        title,
        description: practiceArchives?.description,
        bodyContent: practiceArchives?.mainTag,
      },
    },
    revalidate: 86400,
  };
};

/** Practice directory page component */
const PracticesPageDirectory = ({
  core, additional, business, practices, seo, site,
}) => {
  const sortedCorePractices = sortByKey(core, 'title');
  const sortedAdditionalPractices = sortByKey(additional, 'title');
  const sortedBusinessPractices = sortByKey(business, 'title');
  const canonicalUrl = `${PRODUCTION_URL}/practices`;

  const practicesPageProps = {
    site,
    seo,
    canonicalUrl,
    sortedCorePractices,
    sortedAdditionalPractices,
    sortedBusinessPractices,
    practices,
  };

  return <PracticesDirectory {...practicesPageProps} />;
};

export default PracticesPageDirectory;
