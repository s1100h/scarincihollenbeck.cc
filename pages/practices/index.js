import { sortByKey } from 'utils/helpers';
import { PRODUCTION_URL } from 'utils/constants';
import { fetchAPI } from 'utils/api';
import { getPracticesQuery, practicePageQuery } from 'utils/graphql-queries';
import PracticesDirectory from 'components/pages/PracticesDirectory';

/** Fetch the practice page content WP GRAPHQL API */
const practicesPageContent = async () => {
  const data = await fetchAPI(practicePageQuery, {});
  return data?.page;
};

const getPractices = async () => {
  const data = await fetchAPI(getPracticesQuery, {});
  return data.practices.nodes
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
};
/** Map practice page data to page props */
export const getStaticProps = async () => {
  const page = await practicesPageContent();
  const practices = await getPractices();
  const {
    title, seo, practiceArchives, featuredImage,
  } = page;

  return {
    props: {
      seo,
      title,
      practices: sortByKey(practices, 'title'),
      subheaderOverlay: featuredImage?.node?.sourceUrl,
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
  practices, subheaderOverlay, seo, site,
}) => {
  const sortedCorePractices = practices;
  const canonicalUrl = `${PRODUCTION_URL}/practices`;
  const practicesPageProps = {
    site,
    seo,
    canonicalUrl,
    sortedCorePractices,
    subheaderOverlay,
    practices,
  };

  return <PracticesDirectory {...practicesPageProps} />;
};

export default PracticesPageDirectory;
