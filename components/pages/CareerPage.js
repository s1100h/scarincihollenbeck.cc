import { Container, Row, Col } from 'react-bootstrap';
import SingleSubHeader from 'layouts/single-sub-header';
import SingleCareerBody from 'components/organisms/career/body';
import SubscriptionMessage from 'components/molecules/subscription/subscription-message';
import CommonSidebarLinks from 'components/molecules/common-sidebar-links';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { CURRENT_DOMAIN } from 'utils/constants';

export default function CareerProfile({ career }) {
  const { seo } = career;
  const title = `${seo.title} | Career at Scarinci Hollenbeck`;
  const canonicalUrl = `${CURRENT_DOMAIN}/${seo.canonicalLink}`;

  return (
    <>
      <BasicSiteHead
        title={title}
        metaDescription={seo.metaDescription}
        canonicalUrl={canonicalUrl}
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
            <SubscriptionMessage />
            <CommonSidebarLinks />
          </Col>
        </Row>
      </Container>
    </>
  );
}
