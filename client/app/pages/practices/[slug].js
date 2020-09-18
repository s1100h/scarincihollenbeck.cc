import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import BarLoader from 'react-spinners/BarLoader';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Error from 'pages/_error';
import Footer from 'components/footer';
import SimpleSearch from 'components/simple-search';
import SubscriptionMessage from 'components/subscription-message';
import PracticeContent from 'components/practice/practice-content';
import CovidResourceBox from 'components/practice/covid-resource-box';
import FeaturedSlider from 'components/practice/featured-slider';
import RelatedAttorneys from 'components/practice/related-attorneys';
import RelatedArticlesTab from 'components/practice/related-articles-tab';
import SidebarContent from 'components/practice/sidebar-content';
import SingleSubHeader from 'layouts/single-sub-header';
import { headers, urlify } from 'utils/helpers';

export default function SinglePractice({ practice, corePractices }) {
  const router = useRouter();

  if (practice.status === 404) {
    return <Error statusCode={404} />;
  }

  function handleLink(e) {
    router.push(e.target.value);
  }

  return (
    <>
      {(router.isFallback) ? (
        <Container>
          <Row id="page-loader-container" className="justify-content-center align-self-center">
            <BarLoader color="#DB2220" />
          </Row>
        </Container>
      ) : (
        <>
          <NextSeo
            title={practice.seo.title}
            description={practice.seo.metaDescription}
            canonical={`http://scarincihollenbeck.com/${practice.seo.canonicalLink}`}
          />
          <SingleSubHeader
            image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/City-Night-Background-1800x400-JPG.jpg"
            title={practice.title}
            subtitle={practice.description}
          />
          <div id="single-practice">
            <TabContainer className="mb--1" id="nav-tab" defaultActiveKey={urlify(practice.content[0].title)}>
              <Container>
                <Row>
                  <Col sm={12}>
                    <Nav>
                      {(practice.content.length > 0) && practice.content.map((item) => <Nav.Link eventKey={urlify(item.title)} key={item.title} className="main-tab">{item.title}</Nav.Link>)}
                      {(practice.industryTopics.length > 0) && <Nav.Link eventKey="related-updates" className="main-tab">Related Updates</Nav.Link> }
                    </Nav>
                  </Col>
                  <Col sm={12} md={9} className="mt-4">
                    {(practice.content.length > 0) && practice.content.map((item, index) => <TabContent key={item.title}><PracticeContent tabTitle={urlify(item.title)} title={item.title} content={item.content} /></TabContent>)}
                    {(practice.industryTopics.length > 0) && <TabContent><RelatedArticlesTab tabTitle="related-updates" title="Related Updates" content={practice.industryTopics} /></TabContent>}
                    {/* Related Articles tab */}
                    {/* Attorney list */}
                    <RelatedAttorneys
                      members={practice.attorneyList}
                      chair={practice.chair}
                      handleLink={handleLink}
                      title="Chair"
                    />
                    {/** Awards */}
                    {(practice.highlightReal.length > 0) && (
                      <>
                        <div className="line-header">
                          <h3>Represenative Clients</h3>
                        </div>
                        <FeaturedSlider content={practice.highlightReal} />
                      </>
                    )}
                    {/** Recent Blog Articles */}
                    {(practice.industryTopics.length > 0) && (
                      <div className="w-100 d-block">
                        <div className="line-header">
                          <h3>Latest News & Articles</h3>
                        </div>
                        <FeaturedSlider content={practice.industryTopics} />
                      </div>
                    )}
                  </Col>
                  <Col sm={12} md={3}>
                    {(router.query.slug === 'education-law') && (
                      <>
                        <CovidResourceBox
                          title="COVID-19 Response Team"
                          link="/government-education-covid-19-response-team"
                          message="Learn more about the Government & Education Law Practice's COVID-19 focused response team."
                        />
                      </>
                    )}
                    {(router.query.slug === 'crisis-risk-management') && (
                      <>
                        <CovidResourceBox
                          title="COVID-19 Crisis Management Unit"
                          link="/covid-19-crisis-management-unit"
                          message="Learn more about the Crisis & Risk Management Law Practice's COVID-19 Strategic Response Unit."
                        />
                      </>
                    )}
                    <SimpleSearch />
                    <SubscriptionMessage />
                    <SidebarContent title="Core Practices" content={corePractices} tabKey={2} />
                    <SidebarContent title="Related Sub-Practices" content={practice.practiceList} tabKey={1} />
                  </Col>
                </Row>
              </Container>
            </TabContainer>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export async function getServerSideProps({ params, res }) {
  const [practice, corePractices] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-practices/practice/${params.slug}`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/core-practices/list`, { headers }).then((data) => data.json())
  ]);
  
  if(practice.status === 404 && res) {
    res.statusCode = 404;
  }

  return {
    props: {
      practice,
      corePractices,
    }
  };
}
