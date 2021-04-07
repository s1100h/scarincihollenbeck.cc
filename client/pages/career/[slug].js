import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SiteLoader from 'components/site-loader';
import SingleSubHeader from 'layouts/single-sub-header';
import BreadCrumbs from 'components/basic-breadcrumbs';
import SingleCareerBody from 'components/singlecareer/body';
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
      />
      <Container>
        <Row>
          <Col sm={12}>
            <SingleCareerBody
              title={career.title}
              position={career.positionDescription}
              contact={career.contact}
            />
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
