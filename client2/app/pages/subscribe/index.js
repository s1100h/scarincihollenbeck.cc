import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import Search from '../../components/search';
import LargeSidebar from '../../layouts/large-sidebar';
import TrendingStories from '../../components/trending-stories';
import SubscriptionBody from '../../components/subscription-body';
import { headers } from '../../utils/helpers';

export default function Subscription({slides, posts}){ 
  const seo = {
    title: 'Subscribe To Firm Mailing List | Scarinci Hollenbeck',
    metaDescription: 'Sign up now and get access to Scarinci Hollenbeck attorney\'s articles on cutting edge legal topics, their press releases, and firm announcements.',
    canonical: '/subscribe',
  };
  

  return (
    <>
     <Head>
     <title>{seo.title}</title>
      <meta name="description" content={seo.metaDescription} />
      <link rel="canonical" href={`https://scarincihollenbeck.com/${seo.canonicalLink}`} />
      <script type="application/ld+json">
        {` {
          "@context": "http://schema.org",
          "@type": "WebPage",
          "name": "${seo.title}",
          "description": "${seo.metaDescription}",
          "publisher": {
              "@type": "LegalServices",
              "name": "Scarinci Hollenbeck"
          }`}
      </script>
      </Head>
      <NavBar />
      <LargeSidebar
          body={(<SubscriptionBody />)}
          sidebar={(
            <div>
              <Search />
              <TrendingStories title="Latest From Firm Insights" content={posts} />
            </div>
          )}
        />
      <Footer slides={slides} />
    </>
  )
}

export async function getStaticProps() {
  const sliderResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers });
  const response = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/category/posts/law-firm-insights`, { headers });
  const json = await response.json();

  const { main, latest, archives } = json;

  // filter the first 2 archives posts
  const firstTwoArchives = archives.filter((a, i) => (i <= 1) && a);

  const posts = [...main, ...latest, ...firstTwoArchives];
  const slides = await sliderResponse.json();

  return {
    props: {
      slides,
      posts
    },
  }
}