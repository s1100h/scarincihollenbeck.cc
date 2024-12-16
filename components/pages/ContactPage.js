import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import React from 'react';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';

const ContactPage = ({
  seo,
  title,
  description,
  officeLocations,
  featuredImage,
  canonicalUrl,
}) => (
  <>
    <BasicSiteHead
      title={seo.title}
      metaDescription={seo.metaDesc}
      canonicalUrl={canonicalUrl}
    />
    <SubHeaderDefault
      title={title}
      subtitle={description}
      backgroundImage={featuredImage}
      locations={officeLocations}
      isLocationTabs
    />
  </>
);

export default ContactPage;
