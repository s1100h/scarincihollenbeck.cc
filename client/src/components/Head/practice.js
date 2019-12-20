import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const PracticeHead = (props) => {
  const { seo } = props;

  return <Helmet>
    <title>{seo.title}</title>
    <meta name="description" content={seo.metaDescription}/>
    <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
    <link rel="canonical" href={`${window.location.origin}/${seo.canonicalLink}`}/>
    {/** https://jurisdigital.com/tools/schema-generator/ -- Legal Service */}
  </Helmet>
};

PracticeHead.propTypes = {
  seo: PropTypes.objectOf(PropTypes.string),
};

PracticeHead.defaultProps = {
  seo: {},
};

export default PracticeHead;
