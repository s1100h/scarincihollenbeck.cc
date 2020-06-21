import Head from 'next/head';
import { withRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import Body from '../../components/pages/body';
import Sidebar from '../../components/pages/sidebar';
import SingleSubHeader from '../../layouts/single-sub-header';
import LargeSidebar from '../../layouts/large-sidebar';
import AttorneyCard from '../../components/attorney-card';
import { headers } from '../../utils/helpers';
import { blogHeaderJPG } from '../../utils/next-gen-images';


export default function Covid19CrisisManagementUnit({slides, title, content, posts, covidPosts, seo }){
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = (extractSubTitle !== null) ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.metaDescription} />
        <link rel="canonical" href={`https://scarincihollenbeck.com/${seo.canonicalLink}`} />
        <script type="application/ld+json">
          {` {
                "@context": "http://schema.org",
                "@type": "LegalService",
                "name": "${seo.practiceTitle}",
                "description": "${seo.metaDescription}",
                "url": "https://scarincihollenbeck.com/${seo.canonicalLink}",
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
              }`}
        </script>
        </Head>
        <SingleSubHeader
          title={title}
          subtitle={subTitle}         
          image={blogHeaderJPG}
          height="auto"
        />
        <LargeSidebar
          body={(
            <Body
              content={bodyContent}
              posts={covidPosts}
              articleTitle="COVID-19 Articles"
            />
          )}
          sidebar={(
            <Sidebar
              posts={posts}
              covidPage={true}
            />
          )}
        />
        <Footer slides={slides} />
      </>
  )
}

export async function getStaticProps() {
  const [aJson, posts, covidPosts, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/single-page/page/covid-19-crisis-management-unit`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_FEED_API}/covid-19-news`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/wp/v2/posts?categories=20250&per_page=100`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then(data => data.json())
  ]);

  const { title, content, seo } = aJson;

  return {
    props: {
      slides,
      title,
      content,
      posts,
      covidPosts,
      seo
    },
  }
}