import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const PostHead = (props) => {
  const { seo } = props;
  
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.metaDescription} />
      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={seo.canonicalLink} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.metaDescription} />
      <meta property="og:url" content={`${window.location.href}/${seo.canonicalLink}`} />
      <meta property="og:site_name" content="Scarinci Hollenbeck" />
      <meta property="article:publisher" content="https://www.facebook.com/ScarinciHollenbeck/" />
      {(seo.tags !== undefined && seo.tags.length > 0) ? seo.tags.map((t) => <meta key={t.ID || t.term_id} property="article:tag" content={t.name} />) : ''}
      <meta property="article:published_time" content={seo.publishedDate} />
      <meta property="article:modified_time" content={seo.updatedDate} />
      <meta property="og:updated_time" content={seo.updatedDate} />
      <meta property="og:image" content={seo.featuredImg} />
      <meta property="og:image:secure_url" content={`${window.location.href}/${seo.canonicalLink}`} />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="150" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={seo.metaDescription} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:site" content="@S_H_Law" />
      <meta name="twitter:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
      <meta name="twitter:creator" content="@S_H_Law" />
      <script type="application/ld+json">
        {`
          "@context": "https://schema.org", 
          "@type": "BlogPosting",
          "headline": ${seo.title},
          "image": ${seo.featuredImg}, 
          "genre": ${(seo.hasOwnProperty('primaryCategory')) && seo.primaryCategory.title}, 
          "keywords": ${(seo.tags !== undefined && seo.tags.length > 0) && seo.tags.map(tag => tag.name.toString()) }, 
          "publisher": "Scrarinci Hollenbeck, LLC",
          "url": ${window.location.href}/${seo.canonicalLink},
          "datePublished": ${seo.publishedDate},
          "dateCreated": ${seo.updatedDate},
          "dateModified": ${seo.updatedDate},
          "description": ${seo.metaDescription},
          "articleBody": ${seo.postContent},
            "author": {
            "@type": "Person",
            "name": ${seo.author}
          }
        
        `}
      </script>
    </Helmet>
  );
};

PostHead.propTypes = {
  seo: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])),
    PropTypes.arrayOf(PropTypes.object),
  ])),
};

PostHead.defaultProps = {
  seo: {},
};

export default PostHead;
