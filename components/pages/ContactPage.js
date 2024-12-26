import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import React from 'react';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import dynamic from 'next/dynamic';
import ContactBlock from 'components/organisms/contact-us/ContactBlock';

const AllOfficeLocations = dynamic(() => import('components/organisms/home/AllOfficeLocations'));

const ContactPage = ({
  seo,
  title,
  description,
  officeLocations,
  mapLocations,
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
    <ContactBlock />
    <AllOfficeLocations offices={mapLocations} />
  </>
);

export default ContactPage;
