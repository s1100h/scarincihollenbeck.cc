import { sortByKey } from 'utils/helpers';
import { PRODUCTION_URL } from 'utils/constants';
import PracticesDirectory from 'components/pages/PracticesDirectory';
import { getPractices } from 'requests/getPractices';
import { fetchAPI } from '../../requests/api';
import { practicePageQuery } from '../../requests/graphql-queries';

/** Fetch the practice page content WP GRAPHQL API */
const practicesPageContent = async () => {
  const data = await fetchAPI(practicePageQuery, {});
  return data?.page;
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
  const canonicalUrl = `${PRODUCTION_URL}/practices`;
  const practicesPageProps = {
    site,
    seo,
    canonicalUrl,
    subheaderOverlay,
    practices,
  };

  return <PracticesDirectory {...practicesPageProps} />;
};

export default PracticesPageDirectory;
