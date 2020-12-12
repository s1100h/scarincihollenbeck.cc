import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import Body from 'components/pages/body';
import Sidebar from 'components/pages/sidebar';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebar from 'layouts/large-sidebar';
import client from 'utils/graphql-client';
import { blogArticlesQuery } from 'queries/home';
import { getPageContents } from 'queries/pages';

export default function Awards({
  title,
  content,
  posts,
  seo,
}) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');

  console.log(posts);

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescr}
        canonical="http://scarincihollenbeck.com/awards"
      />
      <SingleSubHeader
        title={title}
        subtitle={subTitle}
        image="/images/Legal-Research-1800x400-JPG.jpg"
        height="auto"
      />
      <LargeSidebar
        body={<Body content={bodyContent} />}
        sidebar={<Sidebar posts={posts} covidPage={false} />}
      />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const firmNewsContent = await client.query(blogArticlesQuery(98), {});
  const firmEventsContent = await client.query(blogArticlesQuery(99), {});
  const firmInsightsContent = await client.query(blogArticlesQuery(599), {});
  const awardsPageContent = await client.query(getPageContents('awards'), {});

  const posts = [].concat(
    firmNewsContent.data.category.posts.edges,
    firmEventsContent.data.category.posts.edges,
    firmInsightsContent.data.category.posts.edges,
  );

  return {
    props: {
      title: awardsPageContent.data.pages.nodes[0].title,
      content: awardsPageContent.data.pages.nodes[0].content,
      seo: awardsPageContent.data.pages.nodes[0].seo,
      posts,
    },
    revalidate: 1,
  };
}
