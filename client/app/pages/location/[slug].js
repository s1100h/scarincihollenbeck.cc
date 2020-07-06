import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo, LocalBusinessJsonLd } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BarLoader from 'react-spinners/BarLoader';
import Footer from '../../components/footer';
import SingleSubHeader from '../../layouts/single-sub-header';
import LargeSidebar from '../../layouts/large-sidebar';
import BodyContent from '../../components/locations/body-content';
import SideBar from '../../components/locations/sidebar';
import { headers, urlify } from '../../utils/helpers';
import { singleCityBackgroundJPG } from '../../utils/next-gen-images';


export default function Location({
  slides, seo, offices, currentOffice, posts,
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
          <LocalBusinessJsonLd
            type="LegalService"
            id="https://scarincihollenbeck.com"
            name={seo.title}
            description={seo.metaDescription}
            url={`http://scarincihollenbeck.com/${seo.canonicalLink}`}
            telephone={seo.telephone}
            address={{
              streetAddress: seo.streetAddress,
              addressLocality: seo.addressLocality,
              addressRegion: seo.addressRegion,
              postalCode: seo.postalCode,
              addressCountry: seo.addressCountry,
            }}
            geo={{
              latitude: seo.latitude,
              longitude: seo.longitude,
            }}
            images={[seo.image]}
            openingHours={[{
              opens: '08:00',
              closes: '18:00',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
              ]
            }]}
          />
          <div id="location">
            <SingleSubHeader
              title="Office Locations"
              subtitle={`To best serve our clients, Scarinci Hollenbeck has ${offices.length.toString()} offices strategically located around the New York/New Jersey Metropolitan area, as well as Washington D.C., with our head quarters in Lyndhurst, NJ.`}
              image={singleCityBackgroundJPG}
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

export async function getServerSideProps({ params }) {
  const [locations, currentOffice, currentOfficePosts, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_CACHED_API}/cached/office-locations`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-location/office/${params.slug}`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-location/posts/${params.slug}`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then((data) => data.json()),
  ]);

  return {
    props: {
      offices: locations.offices,
      seo: currentOffice.seo,
      slides,
      currentOffice,
      posts: currentOfficePosts,
    },
  };
}
