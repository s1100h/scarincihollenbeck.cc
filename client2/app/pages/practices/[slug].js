import Head from 'next/head';
import { useRouter } from 'next/router';
import BarLoader from 'react-spinners/BarLoader';
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import SimpleSearch from '../../components/simple-search';
import SubscriptionMessage from '../../components/subscription-message';
import PracticeContent from '../../components/practice/practice-content';
import FeaturedSlider from '../../components/practice/featured-slider';
import RelatedAttorneys from '../../components/practice/related-attorneys';
import RelatedArticlesTab from '../../components/practice/related-articles-tab';
import SidebarContent from '../../components/practice/sidebar-content';
import SingleSubHeader from '../../layouts/single-sub-header';
import FullWidth from '../../layouts/full-width';
import NoHeaderMiniSidebar from '../../layouts/no-header-mini-sidebar';
import { headers, urlify } from '../../utils/helpers';
import { cityBackgroundJPG, cityBackgroundWebp } from '../../utils/next-gen-images';

export default function SinglePractice({ slides, practice, corePractices }){
  const router = useRouter();

  function handleLink(e) {
    router.push(e.target.value);
  }

  return (
    <>
      <NavBar />
      {(practice === undefined) ? (
        <Container>
          <Row id="page-loader-container" className="justify-content-center align-self-center">
            <BarLoader color={"#DB2220"} />
          </Row>
        </Container>
       
      ) : (
        <>
          <Head>
            <title>{practice.seo.title}</title>
            <meta name="description" content={practice.seo.metaDescription} />
            <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <link rel="canonical" href={`https://scarincihollenbeck.com/${practice.seo.canonicalLink}`} />
            <script type="application/ld+json">
              {
              `
              {
                "@context": "http://schema.org",
                "@type": "LegalService",
                "name": "${practice.seo.practiceTitle}",
                "description": "${practice.seo.metaDescription}",
                "url": "https://scarincihollenbeck.com/${practice.seo.canonicalLink}",
                "image": "https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png",
                "telephone": "201-896-4100",
                "email": "info@sh-law.com",
                "hasMap": "https://www.google.com/maps/place/1100+Valley+Brook+Ave,+Lyndhurst,+NJ+07071/@40.8023747,-74.1104934,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2561a06bdb41f:0xb3627d0eda6743c8!8m2!3d40.8023707!4d-74.1083047",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Lyndhurst",
                  "addressRegion": "NJ",
                  "postalCode": "07071",
                  "streetAddress": "1100 Valley Brook Ave., P.O. Box 790"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "40.802374",
                  "longitude": ",-74.1104934"
                },
                "sameAs": [
                  "https://www.facebook.com/ScarinciHollenbeck/",
                  "https://twitter.com/s_h_law?lang=en"
                ],
                "openingHours": "Mo,Tu,We,Th,Fr, 8:00-5:00"
              }
              `
            }
            </script>
            </Head>
            <SingleSubHeader
              image={cityBackgroundJPG}
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
                        {(practice.industryTopics.length > 0) &&  <Nav.Link eventKey="related-updates" className="main-tab">Related Updates</Nav.Link> }                    
                      </Nav>       
                    </Col>
                    <Col sm={12} md={9} className="mt-4">
                     {(practice.content.length > 0) && practice.content.map((item, index) => <TabContent key={item.title}><PracticeContent tabTitle={urlify(item.title)} title={item.title} content={item.content}/></TabContent>)}
                     {(practice.industryTopics.length > 0) && <TabContent><RelatedArticlesTab tabTitle="related-updates" title="Related Updates" content={practice.industryTopics} /></TabContent>}                      
                     {/* Related Articles tab */}
                     {/* Attorney list */}
                     <RelatedAttorneys
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
                          <FeaturedSlider highlightReal={practice.highlightReal} />
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
            </div>
            <Footer slides={slides} />
          </>
        )}     
        </>
      )   
  }

export async function getStaticPaths() {
  const practicesResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/practice-portal/all-links/`, { headers });
  const practicesJson = await practicesResponse.json();

  return  {
    paths: practicesJson.map(practice => `/practices/${practice}`) || [],
    fallback: true,
  }
}

export async function getStaticProps({params}) {
  const sliderResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers });
  const practiceResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-practices/practice/${params.slug}`, { headers });
  const corePracticesResponse = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/core-practices`, { headers });
  const practice = await practiceResponse.json();
  const corePractices = await corePracticesResponse.json();
  const slides = await sliderResponse.json();

  return {
    props: {
      slides,
      practice,
      corePractices
    },
  }
}