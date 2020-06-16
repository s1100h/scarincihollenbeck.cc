import Head from 'next/head';
import { withRouter } from 'next/router';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import SingleSubHeader from '../../layouts/single-sub-header';
import { headers } from '../../utils/helpers';
import { singleCityBackgroundJPG } from '../../utils/next-gen-images';


function Location({ slides, seo, offices, router}){

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.metaDescription} />
        <link rel="canonical" href={`${router.pathname}/${seo.canonicalLink}`} />
        <script type="application/ld+json">
          { ` {
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "${seo.title}",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "${seo.streetAddress}",
            "addressLocality": "${seo.addressLocality}",
            "addressRegion": "${seo.addressRegion}",
            "postalCode": "${seo.postalCode}"
          },
          "image": "${seo.image}",
          "email": "info@sh-law.com",
          "telephone": "${seo.telephone}",
          "url": "${router.pathname}/${seo.canonicalLink}",
          "paymentAccepted": [ "check", "credit card", "invoice" ],
          "openingHours": "Mo,Tu,We,Th,Fr 08:00-06:00",
          "openingHoursSpecification": [ {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:00",
            "closes": "06:00"
          } ],
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "${seo.latitude}",
            "longitude": "${seo.longitude}"
          },
          "priceRange":"$$$$$"
        }
  
    ` }
        </script>
      </Head>
      <NavBar />
      <div id="location">
        <SingleSubHeader
          title="Office Locations"
          subtitle={`To best serve our clients, Scarinci Hollenbeck has ${offices.length.toString()} offices strategically located around the New York/New Jersey Metropolitan area, as well as Washington D.C., with our head quarters in Lyndhurst, NJ.`}
          image={singleCityBackgroundJPG}
        />
      </div>
      
      <Footer slides={slides} />
    </>
  )
}


export async function getStaticProps({params}) {
  const sliderResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers });
  const slides = await sliderResponse.json();
  const locationResponse = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/office-locations`, { headers });
  const locations = await locationResponse.json();
  console.log('locations');
  console.log(locations); 
  

  return {
    props: {
      offices: locations.offices,
      seo: locations.seo,
      slides
    },
  }
}

export default withRouter(Location)
