import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import Body from 'components/pages/body';
import Sidebar from 'components/pages/sidebar';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebar from 'layouts/large-sidebar';
import { headers } from 'utils/helpers';

export default function Covid19CrisisManagementUnit({
  slides, title, content, posts, covidPosts, seo,
}) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = (extractSubTitle !== null) ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');

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
      <LargeSidebar
        body={(
          <Body
            content={bodyContent}
            posts={covidPosts}
            articleTitle="COVID-19 Articles"
          />
          )}
        sidebar={(
          <Sidebar
            posts={posts}
            covidPage
          />
          )}
      />
      <Footer slides={slides} />
    </>
  );
}

export async function getServerSideProps() {
  const [aJson, posts, covidPosts, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/single-page/page/covid-19-crisis-management-unit`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_FEED_API}/covid-19-news`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/wp/v2/posts?categories=20250&per_page=100`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then((data) => data.json()),
  ]);

  const { title, content, seo } = aJson;

  return {
    props: {
      slides,
      title,
      content,
      posts,
      covidPosts,
      seo,
    },
  };
}
