import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

const PageHeader = (props) => {
  const { seo } = props;

  return <Helmet>
    <title>{seo.title}</title>
    <meta name="description" content={seo.metaDescription}/>
    <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
    <link rel="canonical" href={seo.canonicalLink} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={seo.title} />
    <meta property="og:description" content={seo.metaDescription} />
    <meta property="og:url" content={seo.canonicalLink} />
    <meta property="og:site_name" content={seo.title} />
    <meta property="article:publisher" content="https://www.facebook.com/ScarinciHollenbeck/" />
    <meta property="og:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
    <meta property="og:image:secure_url" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
    <meta property="og:image:width" content="750" />
    <meta property="og:image:height" content="350" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content={seo.metaDescription} />
    <meta name="twitter:title" content={seo.title} />
    <meta name="twitter:site" content="@S_H_Law" />
    <meta name="twitter:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
    <meta name="twitter:creator" content="@S_H_Law" />
  </Helmet>
};

PageHead.propTypes = {
  seo: PropTypes.arrayOf(PropTypes.object),
};

PageHead.defaultProps = {
  seo: [],
};

export default PageHead;
