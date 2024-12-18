import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import dynamic from 'next/dynamic';
import React from 'react';
import { FIRM_PAGES } from 'utils/constants';

const Memorials = dynamic(() => import('components/organisms/memorials/Memorials'));

const MemorialsPage = ({
  seo,
  title,
  description,
  image,
  memorials,
  canonicalUrl,
}) => (
  <>
    <BasicSiteHead
      title={seo?.title}
      metaDescription={seo?.metaDesc}
      canonicalUrl={canonicalUrl}
    />
    <SubHeaderDefault
      backgroundImage={image?.sourceUrl}
      title={title}
      subtitle={description}
      menu={FIRM_PAGES}
    />

    <Memorials memorials={memorials} />
  </>
);

export default MemorialsPage;
