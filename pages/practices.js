import { sortByKey, headers } from 'utils/helpers';
import { SITE_URL, BASE_API_URL } from 'utils/constants';
import { practicesPageContent } from 'utils/api';
import PracticesDirectory from 'components/pages/PracticesDirectory';

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

export default function Practices({
  core, additional, business, seo, site,
}) {
  const sortedCorePractices = sortByKey(core, 'title');
  const sortedAdditionalPractices = sortByKey(additional, 'title');
  const sortedBusinessPractices = sortByKey(business, 'title');
  const canonicalUrl = `${SITE_URL}/practices`;

  const practicesPageProps = {
    site,
    seo,
    canonicalUrl,
    sortedCorePractices,
    sortedAdditionalPractices,
    sortedBusinessPractices,
  };

  return <PracticesDirectory {...practicesPageProps} />;
}

export async function getStaticProps() {
  const request = await fetch(`${BASE_API_URL}/wp-json/practice-portal/page/`, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  const results = sortPracticeCategories(request.practices);
  const page = await practicesPageContent();
  const { core, additional, business } = results;
  const { title, seo, practiceArchives } = page;

  return {
    props: {
      seo,
      title,
      core,
      additional,
      business,
      site: {
        title,
        description: practiceArchives?.description,
        bodyContent: practiceArchives?.mainTag,
      },
    },
    revalidate: 86400,
  };
}
