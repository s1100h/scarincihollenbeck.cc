import ServicesContent from 'components/organisms/services/ServicesContent';
import ServicesIndustries from 'components/organisms/services/ServicesIndustries';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import SubHeaderIndustriesSlider from 'layouts/SubHeader/SubHeaderIndustriesSlider';
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
      RightContentComponent={SubHeaderIndustriesSlider}
      rightContentProps={{
        slides: industries,
      }}
    />
    <ServicesContent
      practices={createOverviewLinks(practices, true)}
      industries={industries}
    />
    <ServicesIndustries industries={industries} />
  </>
);

export default ServicesPage;
