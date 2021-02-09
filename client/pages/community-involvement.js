import { NextSeo } from 'next-seo';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SimpleSearch from 'components/simple-search';
import SubscriptionMessage from 'components/subscription-message';
import SinglePracticeContent from 'components/singlepractice/content';
import SidebarContent from 'components/singlepractice/sidebar';
import CarouselsLatestNews from 'components/carousels/latest-news';
import SingleSubHeader from 'layouts/single-sub-header';
import { headers } from 'utils/helpers';
import { firmResources } from 'utils/common-lists';
import tabStyle from 'styles/BigButtonTabs.module.css';
import lineHeaderStyles from 'styles/LineHeader.module.css';

export default function CommunityInvolvement({ page }) {
  const relatedPages = [
    {
      id: 'SjveurE7BK1R1l2',
      title: 'Diversity Group',
      slug: '/diversity-group',
    },
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
  ];

  return (
    <>
      <NextSeo
        title={page.seo.title}
        description={page.seo.metaDesc}
        canonical="http://scarincihollenbeck.com/community-involvement"
      />
      <SingleSubHeader
        image="/images/City-Night-Background-1800x400-JPG.jpg"
        title={page.title}
        subtitle={page.description}
        height="400px"
      />
      <TabContainer
        className="mb-0"
        id="nav-tab"
        defaultActiveKey={page.tabs[0].title}
      >
        <Container>
          <Row>
            <Col sm={12}>
              <Nav>
                {page.tabs.length > 0
                  && page.tabs.map((tab) => (
                    <Nav.Link
                      eventKey={tab.title}
                      key={tab.title}
                      className={tabStyle.tab}
                    >
                      {tab.title}
                    </Nav.Link>
                  ))}
              </Nav>
            </Col>
            <Col sm={12} md={8}>
              {page.tabs.length > 0
                && page.tabs.map((tab) => (
                  <TabContent key={tab.title}>
                    <SinglePracticeContent
                      tabTitle={tab.title}
                      title={tab.title}
                      content={tab.content}
                    />
                  </TabContent>
                ))}
              <>
                <div className={lineHeaderStyles.lineHeader}>
                  <h3>Recent from the firm</h3>
                </div>
                <div className="my-5">
                  <CarouselsLatestNews slides={page.attorneysMentioned} />
                </div>
              </>
            </Col>
            <Col sm={12} md={3}>
              <SimpleSearch />
              <SubscriptionMessage />
              <SidebarContent
                title="Diversity"
                content={relatedPages}
                tabKey={2}
              />
              <SidebarContent
                title="Firm Resources"
                content={firmResources}
                tabKey={1}
              />
            </Col>
          </Row>
        </Container>
      </TabContainer>
    </>
  );
}

export async function getStaticProps() {
  const [restResponse] = await Promise.all([
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/firm-page/page/community-involvement',
      { headers },
    ).then((data) => data.json()),
  ]);

  return {
    props: {
      page: restResponse,
    },
    revalidate: 1,
  };
}
