import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BarLoader from 'react-spinners/BarLoader';
import Footer from '../../components/footer';
import SingleSubHeader from '../../layouts/single-sub-header';
import LargeSidebar from '../../layouts/large-sidebar';
import BodyContent from '../../components/locations/body-content';
import SideBar from '../../components/locations/sidebar';
import { headers } from '../../utils/helpers';
import { singleCityBackgroundJPG } from '../../utils/next-gen-images';


export default function Location({ slides, seo, offices, lyndhurst, posts}){
  const router = useRouter();


  return (
    <>
    {(router.isFallback) ? (
      <Container>
        <Row id="page-loader-container" className="justify-content-center align-self-center">
          <BarLoader color={"#DB2220"} />
        </Row>
      </Container>
     
    ) : (
      <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical={`http://scarincihollenbeck.com/${seo.canonicalLink}`}
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
          <Footer slides={slides} />
        </div>
      </>
      )}     
      </>
  )
}


export async function getStaticProps() {
  const [locations, lyndhurst,lyndhurstposts, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_CACHED_API}/cached/office-locations`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-location/office/lyndhurst`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-location/posts/lyndhurst`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then(data => data.json())
  ]);

  return {
    props: {
      offices: locations.offices,
      seo: locations.seo,
      slides,
      lyndhurst,
      posts: lyndhurstposts
    },
  }
}