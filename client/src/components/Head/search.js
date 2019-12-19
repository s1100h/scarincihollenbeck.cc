import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const ArchiveHead = (props) => {
  const { seo } = props;

  return <Helmet>
    <title>{seo.title}</title>
    <meta name="description" content={seo.metaDescription}/>
    <meta name="robots" content="noindex,follow"/>
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="object" />
    <meta property="og:title" content={seo.title} />
    <meta property="og:url" content={`${window.location.href}`}/>
    <meta property="og:site_name" content="Scarinci Hollenbeck" />
    <meta property="og:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
    <meta property="og:image:secure_url" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
    <meta property="og:image:width" content="750" />
    <meta property="og:image:height" content="350" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={seo.title} />
    <meta name="twitter:site" content="@S_H_Law" />
    <meta name="twitter:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
    <meta name="twitter:creator" content="@S_H_Law" />
  </Helmet>
};

ArchiveHead.propTypes = {
  seo: PropTypes.objectOf(PropTypes.string),
};

ArchiveHead.defaultProps = {
  seo: {},
};

export default ArchiveHead;
