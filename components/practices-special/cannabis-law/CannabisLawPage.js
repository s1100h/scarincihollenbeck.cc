import { useEffect, useState } from 'react';
import BasicSiteHead from '../../shared/head/BasicSiteHead';
import SubHeader from '../../../layouts/SubHeader/SubHeader';
import PhotoBlock from '../../organisms/cannabis-law/PhotoBlock';

const CannabisLawPage = ({ practice, canonicalUrl, attorneysSchemaData }) => {
  const [subtitlePractice, setSubtitlePractice] = useState();

  const mockObjPhoto = {
    first: {
      url: '/images/skyscraper2.png',
      caption: 'test first',
      alt: 'test first',
    },
    last: {
      url: '/images/skyscraper2.png',
      caption: 'test last',
      alt: 'test last',
    },
  };
  useEffect(() => {
    setSubtitlePractice(practice.description);
  }, [practice.description]);

  return (
    <>
      <BasicSiteHead title={practice.seo.title} metaDescription={practice.seo.metaDescription} canonicalUrl={canonicalUrl} personDataForSchema={attorneysSchemaData} />
      <SubHeader title={practice.title} subtitle={subtitlePractice} />
      <PhotoBlock photoBlockData={mockObjPhoto} />
    </>
  );
};

export default CannabisLawPage;
