import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BarLoader from 'react-spinners/BarLoader';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebar from 'layouts/large-sidebar';
import BodyContent from 'components/locations/body-content';
import SideBar from 'components/locations/sidebar';
import { headers } from 'utils/helpers';

function buildMainLocationSchema() {
  return {
    "@context": "http://schema.org",
    "@type":"WebSite",
    "@id":"https://scarincihollenbeck.com/#website",
    "url":"https://scarincihollenbeck.com/",
    "name":"Scarinci Hollenbeck",
    "description":"Scarinci Hollenbeck is an alternative to a National 250 law firm. With offices in New Jersey, New York City, and the District of Columbia, we serve the niche practice areas most often required by institutions, corporations, entities, and the people who own and control them.",
    "publisher":{
       "@id":"https://scarincihollenbeck.com/#organization"
    },
    "potentialAction":[
       {
          "@type":"SearchAction",
          "target":"https://scarincihollenbeck.com/search?q={search_term_string}&page=1",
          "query-input":"required name=search_term_string"
       }
    ],
    "inLanguage":"en-US"
 }
}

export default function Location({
  seo, offices, lyndhurst, posts,
}) {
  const router = useRouter();

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
            title={seo.title}
            description={seo.metaDescription}
            canonical={`http://scarincihollenbeck.com/${seo.canonicalLink}`}
          />
          <Head>
            <script
              key="ScarinciHollenbeck"
              type='application/ld+json'
              dangerouslySetInnerHTML={{ __html: JSON.stringify(buildMainLocationSchema()) }}
            />
          </Head> 
          <div id="location">
            <SingleSubHeader
              title="Office Locations"
              subtitle={`To best serve our clients, Scarinci Hollenbeck has ${offices.length.toString()} offices strategically located around the New York/New Jersey Metropolitan area, as well as Washington D.C., with our head quarters in Lyndhurst, NJ.`}
              image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Skyscrapers-up-1800x400-JPG.jpg"
            />
            <LargeSidebar
              body={(
                <BodyContent
                  attorneys={lyndhurst.attorneys}
                  practices={lyndhurst.practices}
                  map={lyndhurst.mapLink}
                  title={lyndhurst.name}
                />
            )}
              sidebar={(
                <SideBar
                  title={lyndhurst.name}
                  posts={posts}
                  offices={offices}
                  startingKey="lyndhurst"
                />
            )}
            />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}


export async function getServerSideProps() {
  const [locations, lyndhurst, lyndhurstposts] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/location-portal/offices`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-location/office/lyndhurst`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-location/posts/lyndhurst`, { headers }).then((data) => data.json())
  ]);

  return {
    props: {
      offices: locations.offices,
      seo: locations.seo,
      lyndhurst,
      posts: lyndhurstposts,
    },
  };
}
