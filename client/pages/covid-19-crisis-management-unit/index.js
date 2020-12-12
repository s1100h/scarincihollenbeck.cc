import { NextSeo } from 'next-seo';
import useSWR from 'swr';
import Footer from 'components/footer';
import Sidebar from 'components/pages/sidebar';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebarWithPosts from 'layouts/large-sidebar-with-posts';
import { headers, fetcher } from 'utils/helpers';

export default function Covid19CrisisManagementUnit({
  title,
  content,
  internalCovidPosts,
  seo,
}) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');

  // retrieve external posts from internal api
  const { data: externaCovidPosts } = useSWR(
    '/api/external-covid-feed',
    fetcher,
  );

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical={`http://scarincihollenbeck.com/${seo.canonicalLink}`}
      />
      <SingleSubHeader
        title={title}
        subtitle={subTitle}
        image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Legal-Research-1800x400-JPG.jpg"
        height="auto"
      />
      <LargeSidebarWithPosts
        posts={internalCovidPosts}
        postsTitle="COVID-19 Articles"
        content={bodyContent}
        sidebar={(
          <Sidebar
            posts={
              externaCovidPosts !== undefined ? externaCovidPosts.response : []
            }
            covidPage
          />
        )}
      />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const [aJson, internalCovidPosts] = await Promise.all([
    fetch(
      `${process.env.REACT_APP_WP_BACKEND}/wp-json/single-page/page/covid-19-crisis-management-unit`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      `${process.env.REACT_APP_WP_BACKEND}/wp-json/wp/v2/posts?categories=20250&per_page=100`,
      { headers },
    ).then((data) => data.json()),
  ]);

  const { title, content, seo } = aJson;

  return {
    props: {
      title,
      content,
      internalCovidPosts,
      seo,
    },
  };
}
