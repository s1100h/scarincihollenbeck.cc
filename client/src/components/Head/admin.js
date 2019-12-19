import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const AdminHead = (props) => {
  const { seo } = props;

  return <Helmet>
    <title>{seo.title}</title>
    <meta name="description" content={seo.metaDescription}/>
    <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
    <link rel="canonical" href={`${window.location.origin}/${seo.canonicalLink}`}/>
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="profile" />
    <meta property="og:title" content={seo.title} />
    <meta property="og:description" content={seo.metaDescription} />
    <meta property="og:url" content={`${window.location.origin}/${seo.canonicalLink}`}/>
    <meta property="og:first_name" content={seo.firstName} />
    <meta property="og:last_name" content={seo.lastName} />
    <meta property="og:site_name" content="Scarinci Hollenbeck" />
    <meta property="og:image" content={seo.featuredImg} />
    <meta property="og:image:secure_url" content={`${window.location.origin}/${seo.canonicalLink}`} />
    <meta property="og:image:width" content={seo.imgWidth} />
    <meta property="og:image:height" content={seo.imgHeight} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content={seo.metaDescription} />
    <meta name="twitter:title" content={seo.title} />
    <meta name="twitter:site" content="@S_H_Law" />
    <meta name="twitter:image" content={seo.featuredImg} />
    <meta name="twitter:creator" content="@S_H_Law" />
  </Helmet>
};

AdminHead.propTypes = {
  seo: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])),
};

AdminHead.defaultProps = {
  seo: {},
};

export default AdminHead ;
