import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const PracticeHead = (props) => {
  const { seo } = props;
  console.log(seo);

  return <Helmet>
    <title>{seo.title}</title>
    <meta name="description" content={seo.metaDescription}/>
    <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
    <link rel="canonical" href={`${window.location.origin}/${seo.canonicalLink}`}/>
    <script type="application/ld+json">
      {
        `
        {
          "@context": "http://schema.org",
          "@type": "LegalService",
          "name": ${seo.practiceTitle},
          "description": ${seo.metaDescription},
          "url": ${window.location.origin}/${seo.canonicalLink},
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
        }
        `
      }
    </script>
  </Helmet>
};

PracticeHead.propTypes = {
  seo: PropTypes.objectOf(PropTypes.string),
};

PracticeHead.defaultProps = {
  seo: {},
};

export default PracticeHead;
