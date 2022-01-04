import SingleSubHeader from 'layouts/SingleSubHeader';
import { Container, Row, Col } from 'react-bootstrap';
import SubscriptionBody from 'components/molecules/subscription/subscription-body';
import CommonSidebarLinks from 'components/molecules/common-sidebar-links';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import sidebarStyles from 'styles/Sidebar.module.css';

export default function SubscriptionPage({ site, seo }) {
  const { title, metaDescription, canonicalUrl } = seo;
  return (
    <>
      <BasicSiteHead title={title} metaDescription={metaDescription} canonicalUrl={canonicalUrl} />
      <SingleSubHeader title={site.title} subtitle={site.description} span={7} offset={0} />
      <Container>
        <Row>
          <Col sm={12} lg={9}>
            <SubscriptionBody />
          </Col>
          <Col sm={12} lg={3} className={sidebarStyles.container}>
            <CommonSidebarLinks />
          </Col>
        </Row>
      </Container>
    </>
  );
}
