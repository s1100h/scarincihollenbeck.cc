import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const LocationHead = (props) => {
  const { seo } = props;
  console.log(seo);
  return <Helmet>
    <title>{seo.title}</title>
    <meta name="description" content={seo.metaDescription}/>
    <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
    <link rel="canonical" href={`${window.location.origin}/${seo.canonicalLink}`}/>
    {/** https://jsonld.com/local-business/ -- Local Businesss */}
  </Helmet>
};

LocationHead.propTypes = {
  seo: PropTypes.objectOf(PropTypes.string),
};

LocationHead.defaultProps = {
  seo: {},
};

export default LocationHead;
