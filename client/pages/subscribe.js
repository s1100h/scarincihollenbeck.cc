import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubscriptionBody from 'components/subscription-body';

export default function SubscriptionPage() {
  return (
    <>
      <NextSeo
        title="Subscribe To Firm Mailing List | Scarinci Hollenbeck"
        description="Sign up now and get access to Scarinci Hollenbeck attorney's articles on cutting edge legal topics, their press releases, and firm announcements."
        canonical="http://scarincihollenbeck.com/subscribe"
      />
      <Container>
        <Row>
          <Col sm={12}>
            <SubscriptionBody />
          </Col>
        </Row>
      </Container>
    </>
  );
}
