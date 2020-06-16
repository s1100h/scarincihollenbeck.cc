import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BarLoader from 'react-spinners/BarLoader';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import SingleSubHeader from '../../layouts/single-sub-header';
import LargeSidebar from '../../layouts/large-sidebar';
import BodyContent from '../../components/locations/body-content';
import SideBar from '../../components/locations/sidebar';
import { headers } from '../../utils/helpers';
import { singleCityBackgroundJPG } from '../../utils/next-gen-images';


export default function Location({ slides, seo, offices, lyndhurst, posts, router}){


  return (
    <>
    <NavBar />
    {(offices === undefined && lyndhurst === undefined && posts === undefined) ? (
      <Container>
        <Row id="page-loader-container" className="justify-content-center align-self-center">
          <BarLoader color={"#DB2220"} />
        </Row>
      </Container>
     
    ) : (
      <>
        <Head>
          <title>{seo.title}</title>
          <meta name="description" content={seo.metaDescription} />
          <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <link rel="canonical" href={`https://scarincihollenbeck.com/${seo.canonicalLink}`} />     
        </Head>
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


export async function getStaticProps({params}) {
  const sliderResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers });  
  const locationResponse = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/office-locations`, { headers });  
  const lyndhurstOfficeResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-location/office/lyndhurst`, { headers });  
  const lyndhurstPostResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-location/posts/lyndhurst`, { headers });
  const slides = await sliderResponse.json();
  const locations = await locationResponse.json();
  const lyndhurst = await lyndhurstOfficeResponse.json();
  const lyndhurstposts = await lyndhurstPostResponse.json();

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