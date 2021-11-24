import CovidPage from 'components/pages/covid-pages';
import { SITE_URL, BASE_API_URL } from 'utils/constants';
import { getCovid19BasedPages } from 'utils/queries';

export default function GovernmentEducationCovidResponseTeam({ title, content, seo }) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');
  const canonicalUrl = `${SITE_URL}/government-education-covid-19-response-team`;
  const archiveUrl = `${BASE_API_URL}/wp-json/wp/v2/posts/?categories=20250`;

  const covidProps = {
    title,
    seo,
    bodyContent,
    canonicalUrl,
    subTitle,
    archiveUrl,
  };

  return <CovidPage {...covidProps} />;
}

export async function getStaticProps() {
  const [request] = await getCovid19BasedPages('government-education-covid-19-response-team', 20250);
  const { title, content, seo } = request;

  return {
    props: {
      title,
      content,
      seo,
    },
    revalidate: 60 * 60 * 24,
  };
}
