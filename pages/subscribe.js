import { NextSeo } from 'next-seo';
import SingleSubHeader from 'layouts/single-sub-header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SimpleSearch from 'components/simple-search';
import SubscriptionBody from 'components/subscription-body';
import CommonSidebarLinks from 'components/common-sidebar-links';
import { SITE_URL } from 'utils/constants';

export default function SubscriptionPage() {
  const canonicalUrl = `${SITE_URL}/subscribe`;

  return (
    <>
      <NextSeo
        title="Subscribe To Firm Mailing List | Scarinci Hollenbeck"
        description="Sign up now and get access to Scarinci Hollenbeck attorney's articles on cutting edge legal topics, their press releases, and firm announcements."
        canonical={canonicalUrl}
      />
      <SingleSubHeader
        title="Firm Mailing List"
        subtitle="Sign up now and get access to Scarinci Hollenbeck attorney's articles on cutting edge legal topics, their press releases, and firm announcements."
        span={7}
        offset={0}
      />
      <Container>
        <Row>
          <Col sm={12} md={9}>
            <SubscriptionBody />
          </Col>
          <Col sm={12} md={3} style={{ marginTop: '-1.5em' }}>
            <SimpleSearch />
            <CommonSidebarLinks />
          </Col>
        </Row>
      </Container>
    </>
  );
}
