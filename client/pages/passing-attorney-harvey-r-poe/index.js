import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import PagesBody from 'components/pages/body';
import PagesSidebar from 'components/pages/sidebar';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebar from 'layouts/large-sidebar';
import client from 'utils/graphql-client';
import { getPageContents } from 'queries/pages';
import { fetchFirmPosts } from 'utils/fetch-firm-posts';

export default function PassingAttorneyHarveyRPoe({
  title,
  content,
  posts,
  seo,
}) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescr}
        canonical="http://scarincihollenbeck.com/passing-attorney-harvey-r-poe"
      />
      <SingleSubHeader
        title={title}
        subtitle={subTitle}
        image="/images/Legal-Research-1800x400-JPG.jpg"
        height="auto"
      />
      <LargeSidebar
        body={<PagesBody content={bodyContent} />}
        sidebar={<PagesSidebar posts={posts} covidPage={false} />}
      />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const harveyPoeContent = await client.query(
    getPageContents('passing-attorney-harvey-r-poe'),
    {},
  );
  const posts = await fetchFirmPosts();

  return {
    props: {
      title: harveyPoeContent.data.pages.nodes[0].title,
      content: harveyPoeContent.data.pages.nodes[0].content,
      seo: harveyPoeContent.data.pages.nodes[0].seo,
      posts,
    },
    revalidate: 1,
  };
}
