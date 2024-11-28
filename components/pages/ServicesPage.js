import ServicesContent from 'components/organisms/services/ServicesContent';
import ServicesIndustries from 'components/organisms/services/ServicesIndustries';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import React from 'react';
import { createOverviewLinks } from 'utils/helpers';

const ServicesPage = ({
  title,
  content,
  industries,
  practices,
  seo,
  canonicalUrl,
}) => (
  <>
    <BasicSiteHead
      title={seo?.title}
      metaDescription={seo?.metaDesc}
      canonicalUrl={canonicalUrl}
    />
    <SubHeaderDefault
      title={title}
      subtitle={content?.description}
      industries={industries}
      customClass="sub-header sub-header--slider"
    />
    <ServicesContent
      practices={createOverviewLinks(practices, true)}
      industries={industries}
    />
    <ServicesIndustries industries={industries} />
  </>
);

export default ServicesPage;
