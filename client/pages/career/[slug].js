import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SiteLoader from 'components/site-loader';
import SingleSubHeader from 'layouts/single-sub-header';
import SingleCareerBody from 'components/singlecareer/body';
import SimpleSearch from 'components/simple-search';
import SubscriptionMessage from 'components/subscription-message';
import SidebarContent from 'components/singlepractice/sidebar';
import { headers } from 'utils/helpers';

export default function CareerPost({ career }) {
  const router = useRouter();
  const firmLibrary = [
    {
      id: '9TZ8Zz7xy95BVp',
      title: 'Firm News',
      slug: 'library?category=firm-news',
    },
    {
      id: 'RMtQjkqW3jAVvC',
      title: 'Firm Events',
      slug: 'library?category=firm-events',
    },
    {
      id: 'KNDpxvUhdm73hf',
      title: 'Firm Insights',
      slug: 'library?category=firm-insights',
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
      id: 'p4mdVc653adf98fbn',
      title: 'Diversity Group',
      slug: 'diversity-group',
    },
  ];

  if (router.isFallback) {
    return <SiteLoader />;
  }

  return (
    <>
      <NextSeo
        title={career.seo.title}
        description={career.seo.metaDesc}
        canonical={`http://scarincihollenbeck.com${career.uri}`}
      />
      <SingleSubHeader
        image="/images/Legal-Research-1800x400-JPG.jpg"
        title={career.title}
        subtitle=" Our commitment to diversity and equal opportunity enables Scarinci Hollenbeck to recruit, retain, and promote the best attorneys."
        offset={0}
        span={8}
      />
      <Container>
        <Row>
          <Col sm={12} md={9} className="mt-3">
            <SingleCareerBody
              title={career.title}
              position={career.positionDescription}
              contact={career.contact}
            />
          </Col>
          <Col sm={12} md={3}>
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
  const [res] = await Promise.all([
    fetch('https://wp.scarincihollenbeck.com/wp-json/career-portal/careers', {
      headers,
    }).then((data) => data.json()),
  ]);

  return {
    paths: res.careers.map((c) => `/career${c.slug}`) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const [careerJson] = await Promise.all([
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/individual-career/career/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
  ]);

  if (careerJson.status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      career: careerJson,
    },
    revalidate: 1,
  };
}
