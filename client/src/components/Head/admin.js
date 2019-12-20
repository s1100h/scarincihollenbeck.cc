import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const AdminHead = (props) => {
  const { seo } = props;
  console.log(seo.addressLocality);

  return <Helmet>
    <title>{seo.title}</title>
    <meta name="description" content={seo.metaDescription}/>
    <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
    <link rel="canonical" href={`${window.location.origin}/${seo.canonicalLink}`}/>
    <meta property="og:title" content={seo.title} />
    <meta property="og:site_name" content="Scarinci Hollenbeck" />
    <meta property="og:type" content="profile"/>
    <meta property="og:locale" content="en_US"/>
    <meta property="og:url" content={`${window.location.origin}/${seo.canonicalLink}`}/>
    <meta property="og:image" content={seo.featuredImg} />
    <meta property="og:image:secure_url" content={seo.featuredImg}/>
    <meta property="og:image:width" content={seo.imgWidth}/>
    <meta property="og:image:height" content={seo.imgHeight}/>
    <meta property="og:image:type" content="image/jpg"/>
    <meta property="profile:first_name" content={seo.firstName}/>
    <meta property="profile:last_name" content={seo.lastName}/>
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
          "@context": "http://www.schema.org",
          "@type": "Person",
          "@id": ${window.location.origin}/${seo.canonicalLink},
          "name": ${seo.name},
          "alternateName": ${seo.title},
          "nationality": "American",
          "Description": ${seo.metaDescription},
        "disambiguatingDescription": ${seo.metaDescription},
        "jobTitle": ${seo.jobPosition},
        "worksFor": [
          {
            "@type": "Organization",
            "name": "Scarinci Hollenbeck, LLC",
            "sameAs": [
              "https://twitter.com/S_H_Law",
              "https://www.facebook.com/ScarinciHollenbeck/",
              "https://www.linkedin.com/company/scarinci-hollenbeck-llc/",
            ]
          }
        ],
        "url": ${window.location.origin}/${seo.canonicalLink},
        "image": ${seo.featuredImg},
        "address": {
          "@type": "PostalAddress",
          "addressLocality": ${seo.addressLocality},
          "addressRegion": "NJ",
          "addressCountry": "United States"
        }
      }
        `
      }
    </script>
  </Helmet>
};

AdminHead.propTypes = {
  seo: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string)
  ])),
};

AdminHead.defaultProps = {
  seo: {},
};

export default AdminHead ;
