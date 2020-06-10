import Head from 'next/head';
import { withRouter } from 'next/router';
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import NavBar from '../../../components/navbar';
import Footer from '../../../components/footer';
import MultiSubHeader from '../../../layouts/multi-sub-header';
import NoHeaderMiniSidebar from '../../../layouts/no-header-mini-sidebar';
import FullWidth from '../../../layouts/full-width';
import ProfileImage from './profile-image';
import InfoCard from './info-card';
import Biography from './biography';
import Matters from './matters';
import TableTab from './table';
import Articles from './articles';
import VideoTab from './video-content';
import BasicContent from './basic-content';
import SidebarContent from './sidebar';
import FeaturedSlider from './featured-slider';
import RelatedArticles from './related-articles';
import { sortByDateKey, urlify, headers, addRandomKey } from '../../../utils/helpers';
import { attorneyHeaderJPG } from '../../../utils/next-gen-images';


function Attorney({slides, bio, router }) {
  const {
    fullName,
    designation,
    profileImage,
    phoneNumber,
    email,
    biography,
    fax,
    clients,
    socialMediaLinks,
    representativeMatters,
    representativeClients,
    relatedPractices,
    additionalInformation,
    education,
    barAdmissions,
    eventPosts,
    newsPosts,
    blogPosts,
    awards,
    presentations,
    publications,
    media,
    videos,
    tabs,
    chair,
    pdf,
    vizibility,
    seo,
  } = bio;

  let ai;
    const ed = {
      title: 'Education',
      content: education,
    };

    const ad = {
      title: 'Bar Admissions',
      content: barAdmissions,
    };

    if (additionalInformation !== undefined && additionalInformation !== false) {
      ai = [ed, ad, ...additionalInformation];
    }

    ai = [ed, ad];

    // combine and sort news articles & events articles
    let newsEventArticles = [];

    if (newsPosts !== undefined && eventPosts !== undefined) {
      newsEventArticles = [...newsPosts, ...eventPosts];
    }

    // sort Nav.Link content
    let filterHeaders;
    let filterBody;

    // filter empty tabs
    if (tabs !== undefined) {
      const { headers, body } = tabs;
      filterHeaders = headers.filter((a) => typeof a !== 'number');
      filterBody = body.filter((a) => a[1] !== '');
    }

    // combine and sort blog articles
    const sortedBlogArticles = sortByDateKey(blogPosts, 'date');


  return (
    <>
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.metaDescription} />
      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={`${router.pathname}/${seo.canonicalLink}`} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:site_name" content="Scarinci Hollenbeck" />
      <meta property="og:type" content="profile" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={`${router.pathname}/${seo.canonicalLink}`} />
      <meta property="og:image" content={seo.featuredImg} />
      <meta property="og:image:secure_url" content={seo.featuredImg} />
      <meta property="og:image:width" content={seo.imgWidth} />
      <meta property="og:image:height" content={seo.imgHeight} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="profile:first_name" content={seo.firstName} />
      <meta property="profile:last_name" content={seo.lastName} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={seo.metaDescription} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:site" content="@S_H_Law" />
      <meta name="twitter:image" content={seo.featuredImg} />
      <meta name="twitter:creator" content="@S_H_Law" />
      <script type="application/ld+json">
        {
        `
        {
          "@context": "http://schema.org",
          "@type": "LegalService",
          "name": "${seo.fullName}",
          "description": "${seo.schemaDescription}",
          "url": "${router.pathname}/${seo.canonicalLink}",
          "image": "${seo.featuredImg}",
          "priceRange": "$$$$",
          "telephone": "${seo.phone}",
          "email": "${seo.email}",
          "hasMap": "${seo.map}",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "${seo.town}",
            "addressRegion": "${seo.state}",
            "postalCode": "${seo.zip}",
            "streetAddress": "${seo.address}"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "${seo.lat}",
            "longitude": "${seo.long}"
          },
          "sameAs": "${seo.socialMedia}",
          "openingHours": "Mo,Tu,We,Th,Fr, 8:00-5:00"
        }
        `
      }
      </script>
    </Head>
    <NavBar />
    <div id="single-attorney">
      <MultiSubHeader        
        image={attorneyHeaderJPG}
        profile={( <ProfileImage image={profileImage} name={fullName} /> )}
        height="auto"
        infoCard={(
          <InfoCard
            fullName={fullName}
            chair={chair}
            designation={designation}
            phoneNumber={phoneNumber}
            fax={fax}
            email={email}
            socialMediaLinks={socialMediaLinks}
            pdf={pdf}
            vizibility={vizibility}
          />
        )}
      />
      <TabContainer className="mb--1" id="nav-tab" defaultActiveKey="biography">
        <Container>
          <Row>
            <Col sm={12}>
              <Nav>
                <Nav.Link eventKey="biography" className="main-tab">Biography</Nav.Link>
                { (representativeMatters) && <Nav.Link eventKey="representative-matters" className="main-tab">Representative Matters</Nav.Link> }
                { (representativeClients) && <Nav.Link eventKey="represntative-clients" className="main-tab">Representative Clients</Nav.Link> }
                { (presentations) && <Nav.Link eventKey="presentations" className="main-tab">Presentations</Nav.Link> }
                { (publications) && <Nav.Link eventKey="publications" className="main-tab">Publications</Nav.Link> }
                { (media) && <Nav.Link eventKey="media" className="main-tab">Media</Nav.Link> }
                { (blogPosts.length > 0) && <Nav.Link eventKey="blogs" className="main-tab">Articles</Nav.Link>}
                { (newsEventArticles.length > 0) && (newsEventArticles !== undefined) && <Nav.Link eventKey="newsevents" className="main-tab">News &amp; Events</Nav.Link> }
                { (videos) && <Nav.Link eventKey="videos" className="main-tab">Videos</Nav.Link> }
                { (tabs) && filterHeaders.map((value) => <Nav.Link key={urlify(value)} eventKey={urlify(value)} className="main-tab">{value}</Nav.Link>) } 
              </Nav>       
            </Col>
            <Col sm={12} md={9} className="mt-4">
              <TabContent>
                <Biography tabTitle="biography" title="Biography" content={biography} />
              </TabContent>              
              {(representativeMatters) && (
                <TabContent>
                   <Matters tabTitle="representative-matters" title="Representative Matters" content={representativeMatters} />
                </TabContent>
              )}
              {(representativeClients) &&  (
                <TabContent>
                  <Matters tabTitle="representative-clients" title="Representative Clients" content={representativeClients} />
                </TabContent>
              )}
              {(presentations) &&  (
                <TabContent>
                  <TableTab tabTitle="presentations" title="Presentations" content={presentations} />
                </TabContent>
              )}
              {(publications) && (
                <TabContent>
                   <TableTab tabTitle="publications" title="Publications" content={publications} />
                </TabContent>
              )}
              {(media) && (
                <TabContent>
                  <TableTab tabTitle="media" title="Media" content={media} />
                </TabContent>
              )}
              {(blogPosts.length > 0) && (
                <TabContent>
                  <Articles tabTitle="blogs" title="Articles" content={sortedBlogArticles} />
                </TabContent>
              )}
              {(newsEventArticles.length > 0) && (newsEventArticles !== undefined) && (
                <TabContent>
                  <Articles tabTitle="newsevents" title="News &amp; Events" content={newsEventArticles} />
                </TabContent>
              )}
              {(videos) && (
                <TabContent>
                  <VideoTab title="Videos" content={videos} tabTitle="videos" />
                </TabContent>
              )}
              {(tabs) &&  (
                <TabContent>
                  {filterBody.map((b) => <BasicContent key={addRandomKey(b[1])} title={b[1]} content={b[2]} tabTitle={urlify(b[1])} />)}
                </TabContent>
              )}
              { (clients) && (clients.length > 0) && <FeaturedSlider content={clients} title="Clients" />}
              { (awards) && (awards.length > 0) && <FeaturedSlider content={awards} title="Awards" />}
              { (newsEventArticles.length > 0) && <RelatedArticles title="News & Events" content={newsEventArticles} /> }
              { (blogPosts) && (blogPosts.length > 0) && <RelatedArticles title="Recent Articles" content={sortedBlogArticles} />} 
            </Col>
            <Col sm={12} md={3} className="mt-4">
              <SidebarContent
                title="Related Practices"
                content={relatedPractices}
                itemKey={0}
              />
              <br />
              <SidebarContent
                title="Additional Information"
                content={ai}
                itemKey={1}
              />
            </Col>     
          </Row>
        </Container>
      </TabContainer>
          
    </div>
    <Footer slides={slides} />
    </>
  )


}

export async function getStaticPaths() {
  const attorneysResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/attorney-search/attorneys`, { headers });
  const attorneys = await attorneysResponse.json();

  return  {
    paths: attorneys.map(attorney => attorney.link) || [],
    fallback: true,
  }
}

export async function getStaticProps({params}) {
  const sliderResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/just-in/posts`, { headers });
  const response = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/individual-attorney/attorney/${params.slug}`, { headers });
  const bio = await response.json();
  const slides = await sliderResponse.json();

  return {
    props: {
      slides,
      bio
    },
  }
}

export default withRouter(Attorney);