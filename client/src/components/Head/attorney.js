import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const AttorneyHead = (props) => {
  const { seo } = props;

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.metaDescription} />
      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={`${window.location.origin}/${seo.canonicalLink}`} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:site_name" content="Scarinci Hollenbeck" />
      <meta property="og:type" content="profile" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={`${window.location.origin}/${seo.canonicalLink}`} />
      <meta property="og:image" content={seo.featuredImg} />
      <meta property="og:image:secure_url" content={seo.featuredImg} />
      <meta property="og:image:width" content={seo.imgWidth} />
      <meta property="og:image:height" content={seo.imgHeight} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="profile:first_name" content={seo.firstName} />
      <meta property="profile:last_name" content={seo.lastName} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={seo.metaDescription} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:site" content="@S_H_Law" />
      <meta name="twitter:image" content={seo.featuredImg} />
      <meta name="twitter:creator" content="@S_H_Law" />
      <script type="application/ld+json">
        {
        `
        {
          "@context": "http://schema.org",
          "@type": "LegalService",
          "name": ${seo.fullName},
          "description": ${seo.schemaDescription},
          "url": ${window.location.origin}/${seo.canonicalLink},
          "image": ${seo.featuredImg},
          "priceRange": "$$$$",
          "telephone": ${seo.phone},
          "email": ${seo.email},
          "hasMap": ${seo.map},
          "address": {
            "@type": "PostalAddress",
            "addressLocality": ${seo.town},
            "addressRegion": ${seo.state},
            "postalCode": ${seo.zip},
            "streetAddress": ${seo.address}
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": ${seo.lat},
            "longitude": ${seo.long}
          },
          "sameAs": ${seo.socialMedia},
          "openingHours": "Mo,Tu,We,Th,Fr, 8:00-5:00"
        }
        `
      }
      </script>
    </Helmet>
  );
};

AttorneyHead.propTypes = {
  seo: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string)
  ])),
};

AttorneyHead.defaultProps = {
  seo: {},
};

export default AttorneyHead;
