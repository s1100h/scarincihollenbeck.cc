import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import Sidebar from 'components/pages/sidebar';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebarWithPosts from 'layouts/large-sidebar-with-posts';
import { headers } from 'utils/helpers';

export default function Covid19CrisisManagementUnit({
  title, content, posts, seo, covidPosts
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
        postsTitle="COVID-19 Articles"
        content={bodyContent}
        sidebar={(
          <Sidebar
            posts={posts}
            covidPage
          />
          )}
      />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const [aJson, posts, externalPosts] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/single-page/page/covid-19-crisis-management-unit`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/wp/v2/posts?categories=20250&per_page=100`, { headers }).then((data) => data.json()),
    fetch('/api/external-void-article-feed').then((data) => data.json())
  ]);

  const { title, content, seo } = aJson;

  console.log(externalPosts);

  return {
    props: {
      title,
      content,
      posts,
      seo,
      covidPosts: externalPosts.data || []
    },
  };
}
