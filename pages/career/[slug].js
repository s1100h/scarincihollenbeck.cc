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
import CommonSidebarLinks from 'components/common-sidebar-links';
import { headers } from 'utils/helpers';

export default function CareerPost({ career }) {
  const router = useRouter();

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
            <CommonSidebarLinks />
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

  const fullCareetList = res.careers.map((c) => `/career${c.slug}`);

  return {
    paths: fullCareetList || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const [careerJson] = await Promise.all([
    fetch(`https://wp.scarincihollenbeck.com/wp-json/individual-career/career/${params.slug}`, {
      headers,
    }).then((data) => data.json()),
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
