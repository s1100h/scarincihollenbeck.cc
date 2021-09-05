import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleSubHeader from 'layouts/single-sub-header';
import SingleCareerBody from 'components/pages/career/body';
import SimpleSearch from 'components/shared/simple-search';
import SubscriptionMessage from 'components/shared/subscription-message';
import CommonSidebarLinks from 'components/shared/common-sidebar-links';
import SiteLoader from 'components/shared/site-loader';
import { SITE_URL } from 'utils/constants';
import { getCareersPaths, getCareersContent } from 'utils/queries';

export default function CareerPost({ career }) {
  const router = useRouter();

  if (router.isFallback) {
    return <SiteLoader />;
  }

  const canonicalUrl = `${SITE_URL}/${career.uri}`;
  return (
    <>
      <NextSeo
        title={career.seo.title}
        description={career.seo.metaDesc}
        canonical={canonicalUrl}
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
  const paths = await getCareersPaths();

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const request = await getCareersContent(params.slug);

  if (request === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      career: request,
    },
    revalidate: 1,
  };
}
