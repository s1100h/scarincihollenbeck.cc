import { NextSeo } from 'next-seo';
import useSWR from 'swr';
import Footer from 'components/footer';
import SiteLoader from 'components/site-loader';
import ErrorMessage from 'components/error-message';
import PagesSidebar from 'components/pages/sidebar';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebarWithPosts from 'layouts/large-sidebar-with-posts';
import client from 'utils/graphql-client';
import { fetcher } from 'utils/helpers';
import { blogArticlesQuery } from 'queries/home';
import { getPageContents } from 'queries/pages';

export default function Covid19CrisisManagementUnit({
  title,
  content,
  posts,
  seo,
}) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');

  // retrieve external posts from internal api
  const { data: externaCovidPosts, error: externaCovidPostsError } = useSWR(
    '/api/external-covid-feed',
    fetcher,
  );

  if (externaCovidPostsError) return <ErrorMessage />;
  if (!externaCovidPosts) return <SiteLoader />;

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescr}
        canonical="http://scarincihollenbeck.com/covid-19-crisis-management-unit"
      />
      <SingleSubHeader
        title={title}
        subtitle={subTitle}
        image="/images/Legal-Research-1800x400-JPG.jpg"
        height="auto"
      />
      <LargeSidebarWithPosts
        posts={posts}
        postsTitle="COVID-19 Articles"
        content={bodyContent}
        sidebar={<PagesSidebar posts={externaCovidPosts.response} covidPage />}
      />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // 20250
  const covidNewsContent = await client.query(blogArticlesQuery(20250), {});
  const covid19CrisisManagementUnitContent = await client.query(
    getPageContents('covid-19-crisis-management-unit'),
    {},
  );

  return {
    props: {
      title: covid19CrisisManagementUnitContent.data.pages.nodes[0].title,
      content: covid19CrisisManagementUnitContent.data.pages.nodes[0].content,
      seo: covid19CrisisManagementUnitContent.data.pages.nodes[0].seo,
      posts: covidNewsContent.data.category.posts.edges,
    },
    revalidate: 1,
  };
}
