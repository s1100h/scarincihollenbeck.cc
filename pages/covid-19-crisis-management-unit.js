import CovidPage from 'components/pages/CovidPage';
import ApolloWrapper from 'layouts/ApolloWrapper';
import { SITE_URL, COVID_POSTS_ID } from 'utils/constants';
import { getCovid19BasedPages } from 'utils/queries';

/** Fetch the page data to page props */
export async function getStaticProps() {
  const [response] = await getCovid19BasedPages('covid-19-crisis-management-unit', COVID_POSTS_ID);
  const { title, content, seo } = response;

  return {
    props: {
      title,
      content,
      seo,
    },
    revalidate: 86400,
  };
}

/** COVID-19 Crisis Management Unit page component */
const Covid19CrisisManagementUnit = ({ title, content, seo }) => {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');
  const canonicalUrl = `${SITE_URL}/covid-19-crisis-management-unit`;

  const covidProps = {
    title,
    seo,
    bodyContent,
    canonicalUrl,
    subTitle,
    contentId: COVID_POSTS_ID,
  };

  return (
    <ApolloWrapper>
      <CovidPage {...covidProps} />
    </ApolloWrapper>
  );
};

export default Covid19CrisisManagementUnit;
