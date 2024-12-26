import dynamic from 'next/dynamic';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import CareersResults from 'components/organisms/careers/CareersResults';

const CareersInfo = dynamic(() => import('components/organisms/careers/CareersInfo'));

const CareersPage = ({
  careers, seo, site, canonicalUrl,
}) => (
  <>
    <BasicSiteHead
      title={seo.title}
      metaDescription={seo.metaDesc}
      canonicalUrl={canonicalUrl}
    />
    <SubHeaderDefault
      title={site.title}
      subtitle={site.description}
      backgroundImage={site.image}
      isSubscription
    />

    <CareersResults positions={careers} />
    <CareersInfo
      title="Scarinci Hollenbeck is an Equal Opportunity Employer."
      subtitle="Equal Employment Opportunity"
      description={site.bodyContent}
      focusedCards={site?.focusedCards}
    />
  </>
);

export default CareersPage;
