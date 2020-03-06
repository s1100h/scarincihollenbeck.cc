import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const PageHead = (props) => {
  const { seo } = props;

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.metaDescription} />
      <link rel="canonical" href={`${window.location.origin}/${seo.canonicalLink}`} />
      <script type="application/ld+json">
        {` {
          "@context": "http://schema.org",
          "@type": "WebPage",
          "name": ${seo.title},
          "description": {${seo.metaDescription},
          "publisher": {
              "@type": "LegalServices",
              "name": "Scarinci Hollenbeck"
          }`}
      </script>
    </Helmet>
  );
};

PageHead.propTypes = {
  seo: PropTypes.objectOf(PropTypes.string),
};

PageHead.defaultProps = {
  seo: {},
};

export default PageHead;
