import { NextSeo } from 'next-seo';
import SingleSubHeader from 'layouts/single-sub-header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SimpleSearch from 'components/simple-search';
import SidebarContent from 'components/singlepractice/sidebar';
import SubscriptionBody from 'components/subscription-body';

export default function SubscriptionPage() {
  const firmLibrary = [
    {
      id: '9TZ8Zz7xy95BVp',
      title: 'Firm News',
      slug: '/library/category/firm-news',
    },
    {
      id: 'RMtQjkqW3jAVvC',
      title: 'Firm Events',
      slug: '/library/category/firm-events',
    },
    {
      id: 'KNDpxvUhdm73hf',
      title: 'Firm Insights',
      slug: '/library/category/law-firm-insights',
    },
  ];

  const firmPages = [
    {
      id: 'WF7jMpVJP3PTnuP',
      title: 'Pro Bono',
      slug: '/pro-bono',
    },
    {
      id: 'vehm0rQb7cpMH92',
      title: 'Women Lead',
      slug: '/women-lead',
    },
    {
      id: 'SjveurE3BK1R1l2',
      title: 'Community Involvement',
      slug: '/community-involvement',
    },
    {
      id: 'SjveurE7BK1R1l2',
      title: 'Diversity Group',
      slug: '/diversity-group',
    },
  ];

  return (
    <>
      <NextSeo
        title="Subscribe To Firm Mailing List | Scarinci Hollenbeck"
        description="Sign up now and get access to Scarinci Hollenbeck attorney's articles on cutting edge legal topics, their press releases, and firm announcements."
        canonical="http://scarincihollenbeck.com/subscribe"
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
            <hr />
            <SidebarContent
              title="Firm Library"
              content={firmLibrary}
              tabKey={2}
            />
            <hr />
            <SidebarContent title="Firm Pages" content={firmPages} tabKey={2} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
