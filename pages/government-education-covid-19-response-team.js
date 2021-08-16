import { NextSeo } from 'next-seo';
import SingleSubHeader from 'layouts/single-sub-header';
import SimpleSearch from 'components/simple-search';
import SubscriptionMessage from 'components/subscription-message';
import SidebarContent from 'components/singlepractice/sidebar';
import LargeSidebarWithPosts from 'layouts/large-sidebar-with-posts';
import { headers } from 'utils/helpers';

export default function GovernmentEducationCovidResponseTeam({
  title,
  content,
  internalCovidPosts,
  seo,
}) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');
  const firmLibrary = [
    {
      id: '9TZ8Zz7xy95BVp',
      title: 'Firm News',
      slug: 'library/category/firm-news',
    },
    {
      id: 'RMtQjkqW3jAVvC',
      title: 'Firm Events',
      slug: 'library/category/firm-events',
    },
    {
      id: 'KNDpxvUhdm73hf',
      title: 'Firm Insights',
      slug: 'library/category/law-firm-insights',
    },
  ];

  const firmPages = [
    {
      id: 'WF7jMpVJP3PTnuP',
      title: 'Pro Bono',
      slug: 'pro-bono',
    },
    {
      id: 'vehm0rQb7cpMH92',
      title: 'Women Lead',
      slug: 'women-lead',
    },
    {
      id: 'SjveurE3BK1R1l2',
      title: 'Community Involvement',
      slug: 'community-involvement',
    },
    {
      id: 'SjveurE7BK1R1l2',
      title: 'Diversity Group',
      slug: 'diversity-group',
    },
  ];

  const sidebar = (
    <>
      <SimpleSearch />
      <hr />
      <SubscriptionMessage />
      <hr />
      <SidebarContent title="Firm Library" content={firmLibrary} tabKey={2} />
      <hr />
      <SidebarContent title="Firm Pages" content={firmPages} tabKey={2} />
    </>
  );

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
        span={8}
        offset={0}
      />
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
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/single-page/page/government-education-covid-19-response-team',
      { headers },
    ).then((data) => data.json()),
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/wp/v2/posts?categories=20250&per_page=100',
      { headers },
    ).then((data) => data.json()),
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
