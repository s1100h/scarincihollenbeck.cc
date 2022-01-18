import { Container, Row, Col } from 'react-bootstrap';
import SingleSubHeader from 'layouts/SingleSubHeader';
import SingleCareerBody from 'components/organisms/career/body';
import SubscriptionMessage from 'components/molecules/subscription/SubscriptionMessage';
import CommonSidebarLinks from 'components/molecules/CommonSidebarLinks';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { CURRENT_DOMAIN, SITE_TITLE } from 'utils/constants';

export default function CareerProfile({ career }) {
  const { seo } = career;
  const title = `${seo.title} | Career at ${SITE_TITLE}`;
  const canonicalUrl = `${CURRENT_DOMAIN}/${seo.canonicalLink}`;

  return (
    <>
      <BasicSiteHead
        title={title}
        metaDescription={seo.metaDescription}
        canonicalUrl={canonicalUrl}
      />
      <SingleSubHeader title={career.title} subtitle={seo.metaDescription} offset={0} span={8} />
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
            <SubscriptionMessage />
            <CommonSidebarLinks />
          </Col>
        </Row>
      </Container>
    </>
  );
}
