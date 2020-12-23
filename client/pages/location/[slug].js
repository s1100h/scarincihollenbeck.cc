import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebar from 'layouts/large-sidebar';
import BodyContent from 'components/locations/body';
import SideBar from 'components/locations/sidebar';
import client from 'utils/graphql-client';
import { allLocations, getLocationByName } from 'queries/locations';
import { headers } from 'utils/helpers';

function buildLocationSchema(location) {
  return {
    '@context': 'http://schema.org',
    '@type': 'LocalBusiness',
    name: 'Scarinci Hollebneck',
    url: 'https://scarincihollenbeck.com',
    logo:
      '/images/no-image-found-diamond.png',
    image: location.image,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.streetAddress,
      addressLocality: location.addressLocality,
      addressRegion: location.addressRegion,
      postalCode: location.postalCode,
      addressCountry: location.addressCountry,
      telephone: location.telephone,
    },
    openingHours: ['Mo-Fr 08:00-18:00'],
    hasmap: location.mapLink,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.latitude,
      longitude: location.longitude,
    },
    priceRange: '$$$$',
    sameAs: [
      'https://www.facebook.com/ScarinciHollenbeck/',
      'https://www.linkedin.com/company/scarinci-hollenbeck-llc',
      'https://twitter.com/s_h_law',
    ],
  };
}

export default function SingleLocation({
  offices, location, attorneys,
}) {
  console.log({
    offices, location, attorneys,
  });

  return (
    <>
      <NextSeo
        title={location.seo.title}
        description={location.seo.metaDesc}
        canonical={`http://scarincihollenbeck.com/${location.uri}`}
      />
      <Head>
        <script
          key={location.title}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildLocationSchema(location.officeMainInformation),
            ),
          }}
        />
      </Head>
      <SingleSubHeader
        title="Office Locations"
        subtitle={`To best serve our clients, Scarinci Hollenbeck has ${offices.length.toString()} offices strategically located around the New York/New Jersey Metropolitan area, as well as Washington D.C., with our head quarters in Lyndhurst, NJ.`}
        image="/images/Skyscrapers-up-1800x400-JPG.jpg"
      />
      {/* {router.isFallback ? (
        <Container>
          <Row
            id="page-loader-container"
            className="justify-content-center align-self-center"
          >
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
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(
                  buildLocationSchema(seo, currentOffice.mapLink),
                ),
              }}
            />
          </Head>
          <div id="location">

            <LargeSidebar
              body={(
                <BodyContent
                  attorneys={attorneys}
                  practices={currentOffice.practices}
                  map={location.officeMainInformation.mapLink}
                  title={location.title}
                />
              )}
              sidebar={(
                <SideBar
                  title={location.title}
                  posts={posts}
                  offices={offices}
                  startingKey={urlify(currentOffice.name)}
                />
              )}
            />
            <Footer />
          </div>
        </>
      )} */}
    </>
  );
}

export async function getStaticPaths() {
  const res = await client.query(allLocations, {});

  return {
    paths: res.data.officeLocations.nodes.map((a) => a.uri) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // get location content
  const locationContent = await client.query(
    getLocationByName(params.slug),
    {},
  );

  // get a list of all offices
  const allOfficeLocations = await client.query(allLocations, {});

  // get all attorneys
  const [attorneys] = await Promise.all([
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/attorney-search/attorneys',
      { headers },
    ).then((data) => data.json()),
  ]);

  // filter attorney by location
  const attorneysByLocation = attorneys.filter((a) => a.location.toLowerCase().replace(' ', '-').replace('.', '').indexOf(params.slug) > -1);

  if (locationContent.data.officeLocations.nodes.length <= 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      location: locationContent.data.officeLocations.nodes[0],
      offices: allOfficeLocations.data.officeLocations.nodes,
      attorneys: attorneysByLocation,
    },
    revalidate: 1,
  };
}
