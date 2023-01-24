import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import SingleSubHeader from 'layouts/SingleSubHeader';
import LocationsBody from 'components/organisms/locations/LocationsBody';
import SideBar from 'components/organisms/locations/LocationsSidebar';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { buildLocationSchema } from 'utils/json-ld-schemas';
import { CURRENT_DOMAIN } from 'utils/constants';
import { BreadcrumbJsonLd } from 'next-seo';

const LocationPage = ({
  seo, currentOffice, posts, linkToPdfMap, attorneysSchemaData,
}) => {
  const canonicalUrl = `${CURRENT_DOMAIN}/${seo.canonicalLink}`;
  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDescription}
        canonicalUrl={canonicalUrl}
        personDataForSchema={attorneysSchemaData}
      />
      <Head>
        <script
          key={currentOffice.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildLocationSchema(seo, currentOffice.mapLink)),
          }}
        />
      </Head>
      <SingleSubHeader
        title={currentOffice.name}
        subtitle={seo.metaDescription}
        offset={0}
        span={8}
      />
      <Container>
        <Row>
          <Col sm={12} lg={9}>
            <LocationsBody
              locationId={currentOffice.id}
              attorneys={currentOffice.attorneys}
              practices={currentOffice.practices}
              map={currentOffice.mapLink}
              title={currentOffice.name}
              linkToPdfMap={linkToPdfMap}
            />
          </Col>
          <Col sm={12} md={3}>
            <SideBar title={currentOffice.name} posts={posts} startingKey={currentOffice.name} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LocationPage;
