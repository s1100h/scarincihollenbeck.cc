import { Container, Row, Col } from 'react-bootstrap';
import SubHeader from 'layouts/SubHeader/SubHeader';
import SingleCareerBody from 'components/organisms/career/CareerBody';
import Subscription from 'components/molecules/subscription/Subscription';
import CommonSidebarLinks from 'components/molecules/CommonSidebarLinks';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { SITE_TITLE } from 'utils/constants';

const CareerProfile = ({ career, canonicalUrl }) => {
  const { seo } = career;
  const title = `${seo.title} | Career at ${SITE_TITLE}`;

  return (
    <>
      <BasicSiteHead
        title={title}
        metaDescription={seo.metaDescription}
        canonicalUrl={canonicalUrl}
      />
      <SubHeader
        title={career.title}
        subtitle={seo.metaDescription}
        offset={0}
        span={8}
      />
      <Container>
        <Row>
          <Col sm={12} lg={9} className="mt-3">
            <SingleCareerBody
              title={career.title}
              position={career.positionDescription}
              contact={career.contact}
            />
          </Col>
          <Col sm={12} lg={3}>
            <Subscription />
            <CommonSidebarLinks />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CareerProfile;
