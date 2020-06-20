import Head from 'next/head';
import { withRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import CoronaHeader from '../components/frontpage/corona-header';
import ColumnContent from '../components/frontpage/column-content';
import FullWidthContent from '../components/frontpage/full-width-content';
import Footer from '../components/footer';
import{ headers, sortByKey } from '../utils/helpers';


export default function Home({
  seo,
  posts,
  locations,
  corePractices,
  slides
}) {
  
  return(
  <>
    <Head>
      <title>{seo.title}</title>
      <meta charSet="utf-8"/>
      <meta content="width=device-width,initial-scale=1,shrink-to-fit=no" name="viewport"/>
      <meta name="description" content={seo.metaDescription} />
      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://scarincihollenbeck.com/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.metaDescription} />
      <meta property="og:url" content="https://scarincihollenbeck.com/" />
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
            "url": ""https://scarincihollenbeck.com/"",
            "sameAs": [
              "https://www.facebook.com/ScarinciHollenbeck/",
              "https://twitter.com/s_h_law",
              "https://www.linkedin.com/company/scarinci-hollenbeck-llc"
            ],
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://scarincihollenbeck.com/search?q={search_term}",
              "query-input": "required name=search_term"
            }
          }      
          `
        }
      </script> 
    </Head>
    <CoronaHeader />
    <Container>
      <ColumnContent corePractices={corePractices} />
      {/* <FullWidthContent
        sortedPosts={sortByKey(posts, 'date')}
        sortedLocations={sortByKey(locations, 'id')}
      />  */}
    </Container>
    <Footer slides={slides} />
    Stuff..
  </>
)
}

export async function getStaticProps() {
 const [ seo, news, events, locations, corePractices, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/front-page/meta`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/front-page/news`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/front-page/events`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_CACHED_API}/cached/office-locations`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_CACHED_API}/cached/core-practices`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then(data => data.json())
 ]);

 const posts = [...news, ...events];

  return {
    props: {
      seo,
      posts,
      locations,
      corePractices,
      slides
    },
  }
}