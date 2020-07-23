import React, { useState, useEffect } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SimpleSearch from '../components/SimpleSearch';
import SubscriptionMessage from '../components/SubscriptionMessage';
import PracticeContent from '../components/practice/PracticeContent';
import FeaturedSlider from '../components/practice/FeaturedSlider';
import RelatedAttorneys from '../components/practice/RelatedAttorneys';
import RelatedArticlesTab from '../components/practice/RelatedArticlesTab';
import SidebarContent from '../components/practice/SidebarContent';
import SingleSubHeader from '../layouts/SingleSubHeader';
import { headers, urlify } from '../utils/helpers';

export default function SinglePractice() {
  const [ practice, setPractice ] = useState({});
  const [ corePractices, setCorePractices ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [practice, corePractices] = await Promise.all([
        fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-practices/practice/commercial-real-estate`, { headers }).then((data) => data.json()),
        fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/core-practices/list`, { headers }).then((data) => data.json()),
        fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then((data) => data.json()),
      ]);

      setPractice(practice);
      setCorePractices(corePractices);
    };

    fetchData();
  }, []);
  

  function handleLink(e) {
    router.push(e.target.value);
  }

  return (
    <>
      {(Object.keys(practice).length === 0) ? (
        <Container>
          <Row id="page-loader-container" className="justify-content-center align-self-center">
            <BarLoader color="#DB2220" />
          </Row>
        </Container>

      ) : (
        <>
          <SingleSubHeader
              image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/City-Night-Background-1800x400-JPG.jpg"
              title={practice.title}
              subtitle={practice.description}
          />
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
                      title="Practice Chair"
                      members={practice.attorneyList}
                      chair={practice.chair}
                      handleLink={handleLink}
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
                    <SimpleSearch />
                    <SubscriptionMessage />
                    <SidebarContent title="Core Practices" content={corePractices} tabKey={0} />
                    <SidebarContent title="Related Sub-Practices" content={practice.practiceList} tabKey={1} />
                  </Col>
                </Row>
              </Container>
            </TabContainer>
        </>
      )}     
    </>
  );
}
