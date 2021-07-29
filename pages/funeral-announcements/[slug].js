import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PagesBody from 'components/pages/body';
import SingleSubHeader from 'layouts/single-sub-header';
import SimpleSearch from 'components/simple-search';
import SubscriptionMessage from 'components/subscription-message';
import SidebarContent from 'components/singlepractice/sidebar';
import SiteLoader from 'components/site-loader';
import { headers } from 'utils/helpers';

const slugs = [
  '/funeral-announcements/passing-attorney-harvey-r-poe',
  '/funeral-announcements/passing-attorney-david-a-einhorn'
];

export default function FuneralAnnouncement({
  title,
  content,
  seo,
}) {

  const router = useRouter();
  if (router.isFallback) {
    return <SiteLoader />;
  }
  
  let extractSubTitle = "";
  let subTitle = "";
  let bodyContent ="";

  if(content) {
    extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
    subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
    bodyContent = content.replace(subTitle, '');
  }



  const firmLibrary = [
    {
      id: '9TZ8Zz7xy95BVp',
      title: 'Firm News',
      slug: '/library?category=firm-news',
    },
    {
      id: 'RMtQjkqW3jAVvC',
      title: 'Firm Events',
      slug: '/library?category=firm-events',
    },
    {
      id: 'KNDpxvUhdm73hf',
      title: 'Firm Insights',
      slug: '/library?category=firm-insights',
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

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical="http://scarincihollenbeck.com/passing-attorney-harvey-r-poe"
      />
      <SingleSubHeader
        title={title}
        subtitle={subTitle}
        offset={0}
        span={8}
      />
      <Container>
        <Row>
          <Col sm={12} md={9}>
            <PagesBody content={bodyContent} />
          </Col>
          <Col sm={12} md={3} style={{ marginTop: '-1.5em' }}>
            <SimpleSearch />
            <hr />
            <SubscriptionMessage />
            <hr />
            <SidebarContent
              title="Firm Library"
              content={firmLibrary}
              tabKey={2}
            />
            <hr />
            <SidebarContent title="Firm Pages" content={firmPages} tabKey={2} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: slugs.map(slug => slug),
    fallback: true,
  };
}


export async function getStaticProps({ params }) {
  const request = await fetch(
    `https://wp.scarincihollenbeck.com/wp-json/single-page/page/${params.slug}`,
    { headers },
  ).then((data) => data.json());

  const { title, content, seo } = request;

  return {
    props: {
      title,
      content,
      seo,
    },
    revalidate: 1,
  };
}
