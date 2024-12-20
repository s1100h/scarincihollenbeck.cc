import { Container, Row, Col } from 'react-bootstrap';
import SingleCareerBody from 'components/organisms/career/CareerBody';
import Subscription from 'components/molecules/subscription/Subscription';
import CommonSidebarLinks from 'components/molecules/CommonSidebarLinks';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { SITE_TITLE } from 'utils/constants';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import SubHeaderBgImage from '../../public/images/contact-tiles-2.webp';

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
      <SubHeaderDefault
        title={career.title}
        subtitle={seo.metaDescription}
        backgroundImage={SubHeaderBgImage}
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
