import React, { useState, useEffect } from 'react'; 
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BarLoader from 'react-spinners/BarLoader';
import MultiSubHeader from '../layouts/MultiSubHeader';
import NoHeaderMiniSidebar from '../layouts/NoHeaderMiniSidebar';
import FullWidth from '../layouts/FullWidth';
import ProfileImage from '../components/singleattorney/ProfileImage';
import InfoCard from '../components/singleattorney/InfoCard';
import Biography from '../components/singleattorney/Biography';
import Matters from '../components/singleattorney/Matters';
import TableTab from '../components/singleattorney/Table';
import Articles from '../components/singleattorney/Articles';
import VideoTab from '../components/singleattorney/VideoContent';
import BasicContent from '../components/singleattorney/BasicContent';
import SidebarContent from '../components/singleattorney/Sidebar';
import FeaturedSlider from '../components/singleattorney/FeaturedSlider';
import RelatedArticles from '../components/singleattorney/RelatedArticles';
import { sortByDateKey, urlify, headers, addRandomKey } from '../utils/helpers';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

export default function Attorney() {
  const [bio, setBio ] = useState({});
  let newsEventArticles = [];
  let filterHeaders;
  let filterBody;

  useEffect(() => {
    const fetchData = async () => {
      let previewId;

      if(process.env.NODE_ENV === 'production') {
        const url = window.location.search;
        
        if(url.indexOf('preview_id=') > -1) {
          previewId = url.split('preview_id=').pop().split('&')[0];
        }

        if(url.indexOf('p=') > -1) {
          previewId = url.split('p=').pop().split('&')[0];
        }        
      }

      if(process.env.NODE_ENV === 'development') {
        previewId = 37190;
      } 

      const [bio] = await Promise.all([
        fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/preview-attorney/attorney/${previewId}`, { headers }).then((data) => data.json())
      ]);
  
      setBio(bio);
    };

    fetchData();
  }, []);  

  if (bio !== undefined) {
    if (bio.newsPosts !== undefined && bio.eventPosts !== undefined) {
      newsEventArticles = [...bio.newsPosts, ...bio.eventPosts];
    }

    // filter empty tabs
    if (bio.tabs !== undefined) {
      const { headers, body } = bio.tabs;
      filterHeaders = headers.filter((a) => typeof a !== 'number');
      filterBody = body.filter((a) => a[1] !== '');
    }
  }

  return (
    <>
      {(Object.keys(bio).length === 0) ? (
          <Container>
            <Row id="page-loader-container" className="justify-content-center align-self-center">
              <BarLoader color="#DB2220" />
            </Row>
          </Container>
        ) : (
          <>
          <MultiSubHeader
            image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Columns-1800x400-JPG.jpg"
            profile={(<ProfileImage image={bio.profileImage} name={bio.fullName} />)}
            height="auto"
            infoCard={(
              <InfoCard
                fullName={bio.fullName}
                chair={bio.chair}
                designation={bio.designation}
                phoneNumber={bio.phoneNumber}
                fax={bio.fax}
                email={bio.email}
                socialMediaLinks={bio.socialMediaLinks}
                pdf={bio.pdf}
                vizibility={bio.vizibility}
              />
              )}
          />
          <TabContainer className="mb--1" id="nav-tab" defaultActiveKey="biography">
            <Container>
              <Row>
                <Col sm={12}>
                  <Nav>
                    <Nav.Link eventKey="biography" className="main-tab">Biography</Nav.Link>
                    { (bio.representativeMatters) && <Nav.Link eventKey="representative-matters" className="main-tab">Representative Matters</Nav.Link> }
                    { (bio.representativeClients) && <Nav.Link eventKey="represntative-clients" className="main-tab">Representative Clients</Nav.Link> }
                    { (bio.presentations) && <Nav.Link eventKey="presentations" className="main-tab">Presentations</Nav.Link> }
                    { (bio.publications) && <Nav.Link eventKey="publications" className="main-tab">Publications</Nav.Link> }
                    { (bio.media) && <Nav.Link eventKey="media" className="main-tab">Media</Nav.Link> }
                    { (bio.blogPosts.length) && <Nav.Link eventKey="blogs" className="main-tab">Articles</Nav.Link>}
                    { (newsEventArticles.length > 0) && (newsEventArticles !== undefined) && <Nav.Link eventKey="newsevents" className="main-tab">News &amp; Events</Nav.Link> }
                    { (bio.videos) && <Nav.Link eventKey="videos" className="main-tab">Videos</Nav.Link> }
                    { (bio.tabs) && filterHeaders.map((value) => <Nav.Link key={urlify(value)} eventKey={urlify(value)} className="main-tab">{value}</Nav.Link>) }
                  </Nav>
                </Col>
                <Col sm={12} md={9} className="mt-4">
                  <TabContent>
                    <Biography tabTitle="biography" title="Biography" content={bio.biography} />
                  </TabContent>
                  {(bio.representativeMatters) && (
                  <TabContent>
                    <Matters tabTitle="representative-matters" title="Representative Matters" content={bio.representativeMatters} />
                    </TabContent>
                  )}
                  {(bio.representativeClients) && (
                  <TabContent>
                    <Matters tabTitle="representative-clients" title="Representative Clients" content={bio.representativeClients} />
                    </TabContent>
                  )}
                  {(bio.presentations) && (
                  <TabContent>
                    <TableTab tabTitle="presentations" title="Presentations" content={bio.presentations} />
                    </TabContent>
                  )}
                  {(bio.publications) && (
                  <TabContent>
                    <TableTab tabTitle="publications" title="Publications" content={bio.publications} />
                    </TabContent>
                  )}
                  {(bio.media) && (
                  <TabContent>
                    <TableTab tabTitle="media" title="Media" content={bio.media} />
                    </TabContent>
                  )}
                  {(bio.blogPosts.length > 0) && (
                  <TabContent>
                    <Articles tabTitle="blogs" title="Articles" content={sortByDateKey(bio.blogPosts, 'date')} />
                    </TabContent>
                  )}
                  {(newsEventArticles.length > 0) && (newsEventArticles !== undefined) && (
                  <TabContent>
                    <Articles tabTitle="newsevents" title="News &amp; Events" content={newsEventArticles} />
                    </TabContent>
                  )}
                  {(bio.videos) && (
                  <TabContent>
                    <VideoTab title="Videos" content={bio.videos} tabTitle="videos" />
                    </TabContent>
                  )}
                  {(bio.tabs) && (
                  <TabContent>
                    {filterBody.map((b) => <BasicContent key={addRandomKey(b[1])} title={b[1]} content={b[2]} tabTitle={urlify(b[1])} />)}
                    </TabContent>
                  )}
                  { (bio.clients) && (bio.clients.length > 0) && <FeaturedSlider content={bio.clients} title="Clients" />}
                  { (bio.awards) && (bio.awards.length > 0) && <FeaturedSlider content={bio.awards} title="Awards" />}
                  { (newsEventArticles.length > 0) && <RelatedArticles title="News & Events" content={newsEventArticles} /> }
                  { (bio.blogPosts) && (bio.blogPosts.length > 0) && <RelatedArticles title="Recent Articles" content={sortByDateKey(bio.blogPosts, 'date')} />}
                </Col>
                <Col sm={12} md={3} className="mt-4">
                  <SidebarContent
                    title="Related Practices"
                    content={bio.relatedPractices}
                    itemKey={0}
                  />
                  <br />
                  <SidebarContent
                    title="Additional Information"
                    content={bio.sidebar}
                    itemKey={1}
                  />
                </Col>
              </Row>
            </Container>
          </TabContainer>
          </>
        )}       
    </>      
  );
}