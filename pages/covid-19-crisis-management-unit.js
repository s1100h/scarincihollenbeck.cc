import CovidPage from 'components/pages/CovidPage';
import ApolloWrapper from 'layouts/ApolloWrapper';
import { fetchAPI } from 'utils/api';
import { PRODUCTION_URL, COVID_POSTS_ID } from 'utils/constants';
import { covid19CrisisManagement } from 'utils/graphql-queries';

const covid19CrisisManagementPageContent = async () => {
  const data = await fetchAPI(covid19CrisisManagement, {});
  return data?.page;
};

/** Fetch the page data to page props */
export async function getStaticProps() {
  const {
    title,
    seo,
    COVID19CrisisManagement: {
      article, banner, listLinks, subtitle,
    },
  } = await covid19CrisisManagementPageContent();

  return {
    props: {
      title,
      subtitle,
      article,
      banner,
      listLinks,
      seo,
    },
    revalidate: 86400,
  };
}

/** COVID-19 Crisis Management Unit page component */
const Covid19CrisisManagementUnit = ({
  title,
  subtitle,
  article,
  banner,
  listLinks,
  seo,
}) => {
  const canonicalUrl = `${PRODUCTION_URL}/covid-19-crisis-management-unit`;

  const covidProps = {
    title,
    subTitle: subtitle,
    seo,
    bodyContent: {
      article,
      banner,
      listLinks,
    },
    canonicalUrl,
    contentId: COVID_POSTS_ID,
  };

  return (
    <ApolloWrapper>
      <CovidPage {...covidProps} />
    </ApolloWrapper>
  );
};

export default Covid19CrisisManagementUnit;
