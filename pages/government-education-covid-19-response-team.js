import { NextSeo } from 'next-seo';
import SingleSubHeader from 'layouts/single-sub-header';
import SimpleSearch from 'components/simple-search';
import SubscriptionMessage from 'components/subscription-message';
import CommonSidebarLinks from 'components/common-sidebar-links';
import LargeSidebarWithPosts from 'layouts/large-sidebar-with-posts';
import { SITE_URL } from 'utils/constants';
import { getCovid19BasedPages } from 'utils/queries';

export default function GovernmentEducationCovidResponseTeam({
  title,
  content,
  internalCovidPosts,
  seo,
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
  const [request, posts] = await getCovid19BasedPages(
    'government-education-covid-19-response-team',
    20250,
  );
  const { title, content, seo } = request;

  const internalCovidPosts = posts.map((post) => ({
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
