import { NextSeo } from 'next-seo';
import SimpleSearch from 'components/simple-search';
import SubscriptionMessage from 'components/subscription-message';
import CommonSidebarLinks from 'components/common-sidebar-links';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebarWithPosts from 'layouts/large-sidebar-with-posts';
import { headers } from 'utils/helpers';
import { BASE_API_URL, SITE_URL } from 'utils/constants';

export default function Covid19CrisisManagementUnit({
  title, content, internalCovidPosts, seo,
}) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');
  const canonicalUrl = `${SITE_URL}/covid-19-crisis-management-unit`;

  const sidebar = (
    <>
      <SimpleSearch />
      <hr />
      <SubscriptionMessage />
      <CommonSidebarLinks />
    </>
  );

  return (
    <>
      <NextSeo title={seo.title} description={seo.metaDescr} canonical={canonicalUrl} />
      <SingleSubHeader title={title} subtitle={subTitle} span={8} offset={0} />
      <LargeSidebarWithPosts
        posts={internalCovidPosts}
        postsTitle="COVID-19 Articles"
        content={bodyContent}
        sidebar={sidebar}
      />
    </>
  );
}

export async function getStaticProps() {
  const [requestResponse, cPosts] = await Promise.all([
    fetch(`${BASE_API_URL}/wp-json/single-page/page/covid-19-crisis-management-unit`, {
      headers,
    }).then((data) => data.json()),
    fetch(`${BASE_API_URL}/wp-json/wp/v2/posts?categories=20250&per_page=100`, {
      headers,
    }).then((data) => data.json()),
  ]);

  const { title, content, seo } = requestResponse;
  const internalCovidPosts = cPosts.map((post) => ({
    isoDate: post.date,
    title: post.title.rendered,
    link: post.link,
    source: 'Scarinci Hollenbeck',
  }));

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
