import ApolloWrapper from 'layouts/ApolloWrapper';
import CovidPage from 'components/pages/CovidPage';
import { SITE_URL, COVID_POSTS_ID } from 'utils/constants';
import { getCovid19BasedPages } from 'utils/queries';
import { getSubTitleFromHTML } from 'utils/helpers';

/** Fetch page content and map it to page props */
export const getStaticProps = async () => {
  const [response] = await getCovid19BasedPages(
    'government-education-covid-19-response-team',
    COVID_POSTS_ID,
  );
  const { title, content, seo } = response;

  return {
    props: {
      title,
      content,
      seo,
    },
    revalidate: 86400,
  };
};

const GovernmentEducationCovidResponseTeam = ({ title, content, seo }) => {
  const { clearBody, subTitle } = getSubTitleFromHTML(content);
  const canonicalUrl = `${SITE_URL}/government-education-covid-19-response-team`;

  const covidProps = {
    title,
    seo,
    bodyContent: clearBody,
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

export default GovernmentEducationCovidResponseTeam;
