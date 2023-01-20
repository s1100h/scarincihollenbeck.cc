import { Container, Row, Col } from 'react-bootstrap';
import SingleSubHeader from 'layouts/SingleSubHeader';
import LocationsBody from 'components/organisms/locations/LocationsBody';
import SideBar from 'components/organisms/locations/LocationsSidebar';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { CURRENT_DOMAIN } from 'utils/constants';
import { BreadcrumbJsonLd, SocialProfileJsonLd } from 'next-seo';

const names = ['teest1', 'teest'];
const LocationPage = ({
  seo, currentOffice, posts, linkToPdfMap,
}) => {
  const canonicalUrl = `${CURRENT_DOMAIN}/${seo.canonicalLink}`;

  return (
    <>
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'location',
            item: '/location',
          },
          {
            position: 2,
            name: 'attorneys',
            item: '/attorneys',
          },
          {
            position: 3,
            name: 'Lester Aron',
            item: 'attorneys/lester-aron',
          },
        ]}
      />
      {/* eslint-disable-next-line array-callback-return */}
      {names.map((name) => (
        <SocialProfileJsonLd type="Person" name={name} url="http://www.your-site.com" />
      ))}

      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDescription}
        canonicalUrl={canonicalUrl}
      />

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
