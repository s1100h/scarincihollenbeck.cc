import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

function LocationHead(props){
  const { seo } = props;

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.metaDescription} />
      <link rel="canonical" href={`${window.location.origin}/${seo.canonicalLink}`} />
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
        "url": "${window.location.origin}/${seo.canonicalLink}",
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
    </Helmet>
  );
};

LocationHead.propTypes = {
  seo: PropTypes.objectOf(PropTypes.string),
};

LocationHead.defaultProps = {
  seo: {},
};

export default LocationHead;
