import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import PagesBody from 'components/pages/body';
import PagesSidebar from 'components/pages/sidebar';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebar from 'layouts/large-sidebar';
import client from 'utils/graphql-client';
import { getPageContents } from 'queries/pages';
import { fetchFirmPosts } from 'utils/fetch-firm-posts';

export default function PrivacyPolicy({
  title, content, posts, seo,
}) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescr}
        canonical="http://scarincihollenbeck.com/privacy-policy"
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
  const privacyPolicyContent = await client.query(getPageContents('privacy-policy'), {});
  const posts = await fetchFirmPosts();

  return {
    props: {
      title: privacyPolicyContent.data.pages.nodes[0].title,
      content: privacyPolicyContent.data.pages.nodes[0].content,
      seo: privacyPolicyContent.data.pages.nodes[0].seo,
      posts,
    },
    revalidate: 1,
  };
}
