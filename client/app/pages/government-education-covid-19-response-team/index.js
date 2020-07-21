
import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import Sidebar from 'components/pages/sidebar';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebarWithPosts from 'layouts/large-sidebar-with-posts';
import { headers } from 'utils/helpers';

export default function GovernmentEducationCovidResponseTeam({
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
      <LargeSidebarWithPosts
        posts={covidPosts}
        postsTitle="Government & Education COVID-19 Articles"
        content={bodyContent}
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
  const [covidPosts, page, posts, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/wp/v2/posts?categories=22896&per_page=100`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/single-page/page/government-education-covid-19-response-team`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_FEED_API}/covid-19-news`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then((data) => data.json()),
  ]);
  const { title, content, seo } = page;

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
