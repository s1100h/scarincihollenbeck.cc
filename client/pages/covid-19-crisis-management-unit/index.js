import { NextSeo } from 'next-seo';
import useSWR from 'swr';
import Footer from 'components/footer';
import SiteLoader from 'components/site-loader';
import ErrorMessage from 'components/error-message';
import PagesSidebar from 'components/pages/sidebar';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebarWithPosts from 'layouts/large-sidebar-with-posts';
import { fetcher, headers } from 'utils/helpers';

export default function Covid19CrisisManagementUnit({
  title, content, internalCovidPosts, seo,
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
        posts={internalCovidPosts}
        postsTitle="COVID-19 Articles"
        content={bodyContent}
        sidebar={<PagesSidebar posts={externaCovidPosts.response} covidPage />}
      />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const [requestResponse, internalCovidPosts] = await Promise.all([
    fetch('https://wp.scarincihollenbeck.com/wp-json/single-page/page/covid-19-crisis-management-unit', { headers }).then((data) => data.json()),
    fetch('https://wp.scarincihollenbeck.com/wp-json/wp/v2/posts?categories=20250&per_page=100', { headers }).then((data) => data.json()),
  ]);

  const { title, content, seo } = requestResponse;

  return {
    props: {
      title,
      content,
      internalCovidPosts,
      seo,
    },
    revalidate: 1,
  };
}
