import Head from 'next/head';
import { withRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import CoronaHeader from '../components/FrontPage/corona-header';
import ColumnContent from '../components/FrontPage/column-content';
import FullWidthContent from '../components/FrontPage/full-width-content';
import{ headers, sortByKey } from '../utils/helpers';


function Home({
  slides,
  seo,
  posts,
  locations,
  corePractices,
  router
}) {

  const sortedLocations = sortByKey(locations, 'id');
  const sortedPosts = sortByKey(posts, 'date');
  
  return(
  <>
    <Head>
      <title>{seo.title}</title>
      <meta charSet="utf-8"/>
      <meta content="width=device-width,initial-scale=1,shrink-to-fit=no" name="viewport"/>
      <meta name="description" content={seo.metaDescription} />
      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={router.pathname} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.metaDescription} />
      <meta property="og:url" content={router.pathname} />
      <meta property="og:site_name" content="Scarinci Hollenbeck" />
      <meta property="og:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
      <meta property="og:image:secure_url" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
      <meta property="og:image:width" content="750" />
      <meta property="og:image:height" content="350" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={seo.metaDescription} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:site" content="@S_H_Law" />
      <meta name="twitter:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
      <meta name="twitter:creator" content="@S_H_Law" />
      <meta name="msvalidate.01" content="D568BE2730F6C27E33061E84F8DE58B1" />
      <meta name="google-site-verification" content="googlee1788c62f584220b" /> 
      <script type="application/ld+json">
        {
          `
          {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "name": "Scarinci Hollenbeck",
            "url": "${router.pathname}",
            "sameAs": [
              "https://www.facebook.com/ScarinciHollenbeck/",
              "https://twitter.com/s_h_law",
              "https://www.linkedin.com/company/scarinci-hollenbeck-llc"
            ],
            "potentialAction": {
              "@type": "SearchAction",
              "target": "${router.pathname}/s?={search_term}",
              "query-input": "required name=search_term"
            }
          }      
          `
        }
      </script> 
    </Head>
    <NavBar />
    <CoronaHeader />
    <Container>
      <ColumnContent corePractices={corePractices} />
      <FullWidthContent
        sortedPosts={sortedPosts}
        sortedLocations={sortedLocations}
      /> 
    </Container>
    <Footer
      slides={slides}      
    />
  </>
)
}

export async function getStaticProps() {
  const sliderResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/just-in/posts`, { headers });
  const seoResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/front-page/meta`, { headers });
  const newsResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/front-page/news`, { headers });
  const eventsResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/front-page/events`, { headers });
  const officeResponse = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/office-locations`, { headers });
  const practicesResponse = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/core-practices`, { headers });
  const seo = await seoResponse.json();
  const news = await newsResponse.json();
  const events = await eventsResponse.json();
  const officeJson = await officeResponse.json();
  const corePractices = await practicesResponse.json();
  const slides = await sliderResponse.json();
  const posts = [...news, ...events];
  const locations = officeJson.offices;


  return {
    props: {
      slides,
      seo,
      posts,
      locations,
      corePractices
    },
  }
}

export default withRouter(Home)