import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BarLoader from 'react-spinners/BarLoader';
import Error from 'pages/_error';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebar from 'layouts/large-sidebar';
import BodyContent from 'components/locations/body-content';
import SideBar from 'components/locations/sidebar';
import { headers, urlify } from 'utils/helpers';

function buildLocationSchema(location, map) {
  return {
    "@context" : "http://schema.org",
    "@type" : "LocalBusiness",
    "name" : "Scarinci Hollebneck",
    "url" : "https://scarincihollenbeck.com",
    "logo": "https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png",
    "image": location.image,
    "address": {
        "@type" : "PostalAddress",
        "streetAddress": location.streetAddress,
        "addressLocality": location.addressLocality,
        "addressRegion": location.addressRegion,
        "postalCode": location.postalCode,
        "addressCountry": location.addressCountry,
        "telephone" : location.telephone
        },
    "openingHours": ["Mo-Fr 08:00-18:00"],
    "hasmap" : map,
    "geo" : {
      "@type" : "GeoCoordinates",
      "latitude" : location.latitude,
      "longitude" : location.longitude
    },
    "priceRange" : "$$$$",
    "sameAs" : [ "https://www.facebook.com/ScarinciHollenbeck/",
        "https://www.linkedin.com/company/scarinci-hollenbeck-llc",
        "https://twitter.com/s_h_law"]
      
  }
}

export default function Location({
  slides, seo, offices, currentOffice, posts,
}) {
    const router = useRouter();

    if (currentOffice.status === 404) {
      return <Error statusCode={404} />;
    }

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
              key={currentOffice.name}
              type='application/ld+json'
              dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLocationSchema(seo, currentOffice.mapLink)) }}
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
                  attorneys={currentOffice.attorneys}
                  practices={currentOffice.practices}
                  map={currentOffice.mapLink}
                  title={currentOffice.name}
                />
            )}
              sidebar={(
                <SideBar
                  title={currentOffice.name}
                  posts={posts}
                  offices={offices}
                  startingKey={urlify(currentOffice.name)}
                />
            )}
            />
            <Footer slides={slides} />
          </div>
        </>
      )}
    </>
  );
}

export async function getServerSideProps({ params, res }) {
  const [locations, currentOffice, currentOfficePosts, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/location-portal/offices`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-location/office/${params.slug}`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-location/posts/${params.slug}`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then((data) => data.json()),
  ]);

  if(currentOffice.status === 404 && res) {
    res.statusCode = 404;
  }

  return {
    props: {
      offices: locations.offices || {},
      seo: currentOffice.seo || {},
      slides,
      currentOffice,
      posts: currentOfficePosts,
    },
  };
}
