import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import BarLoader from 'react-spinners/BarLoader';
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from 'components/footer';
import SimpleSearch from 'components/simple-search';
import SubscriptionMessage from 'components/subscription-message';
import PracticeContent from 'components/practice/practice-content';
import FeaturedSlider from 'components/practice/featured-slider';
import RelatedAttorneys from 'components/practice/related-attorneys';
import RelatedArticlesTab from 'components/practice/related-articles-tab';
import SidebarContent from 'components/practice/sidebar-content';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import NoHeaderMiniSidebar from 'layouts/no-header-mini-sidebar';
import { headers, urlify, makeTitle } from 'utils/helpers';

export default function WomenLead({
  slides, attorneysMentioned, title, description, tabs, members, chair, relatedPages, seo,
}) {
  const router = useRouter();

  const fullRelatedPages = relatedPages.map((page) => ({
    title: makeTitle(page),
    slug: page,
  }));

  const firmResources = [
    {
      title: 'Firm News',
      slug: '/category/firm-news',
    },
    {
      title: 'Firm Events',
      slug: '/category/firm-events',
    },
    {
      title: 'Firm Insights',
      slug: '/category/firm-insights',
    },
  ];

  function handleLink(e) {
    router.push(e.target.value);
  }

  return (
    <>
      <NextSeo
        title={seo.title || 'Law Firm Community Involvement | Scarinci Hollenbeck'}
        description={seo.metaDescription || 'Community involvement is a key principle of Scarinci Hollenbeck’s workplace culture.'}
        canonical={`http://scarincihollenbeck.com/${seo.canonicalLink}`}
      />
      <SingleSubHeader
        image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/City-Night-Background-1800x400-JPG.jpg"
        title={title}
        subtitle={description}
      />
      <div id="single-practice">
        <TabContainer className="mb--1" id="nav-tab" defaultActiveKey={urlify(tabs[0].title)}>
          <Container>
            <Row>
              <Col sm={12}>
                <Nav>
                  {(tabs.length > 0) && tabs.map((tab) => <Nav.Link eventKey={urlify(tab.title)} key={tab.title} className="main-tab">{tab.title}</Nav.Link>)}
                </Nav>
              </Col>
              <Col sm={12} md={9} className="mt-4">
                {(tabs.length > 0) && tabs.map((tab, index) => <TabContent key={tab.title}><PracticeContent tabTitle={urlify(tab.title)} title={tab.title} content={tab.content} /></TabContent>)}
                {/** Recent Blog Articles */}
                {(attorneysMentioned.length > 0) && (
                <div className="w-100 d-block">
                  <div className="line-header">
                    <h3>Latest From {title}</h3>
                  </div>
                  <FeaturedSlider content={attorneysMentioned} />
                </div>
                )}
              </Col>
              <Col sm={12} md={3}>
                <SimpleSearch />
                <SubscriptionMessage />
                <SidebarContent title="Diversity" content={fullRelatedPages} tabKey={0} />
                <SidebarContent title="Firm Resources" content={firmResources} tabKey={1} />
              </Col>
            </Row>
          </Container>
        </TabContainer>
      </div>
      <Footer slides={slides} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const [page, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/firm-page/page/community-involvement`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then((data) => data.json()),
  ]);

  const {
    attorneysMentioned, title, description, tabs, relatedPages, seo,
  } = page;

  return {
    props: {
      slides,
      attorneysMentioned,
      title,
      description,
      tabs,
      relatedPages,
      seo,
    },
  };
}
