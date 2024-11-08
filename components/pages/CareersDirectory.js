import dynamic from 'next/dynamic';
import FullWidth from 'layouts/FullWidth';
import SubHeader from 'layouts/SubHeader/SubHeader';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import CareersResults from '../organisms/careers/CareersResults';

const CareersEqualOpportunity = dynamic(() => import('components/atoms/Article'));

const CareersPage = ({
  careers, seo, site, canonicalUrl,
}) => (
  <>
    <BasicSiteHead
      title={seo.title}
      metaDescription={seo.metaDesc}
      canonicalUrl={canonicalUrl}
    />
    <SubHeader
      title={site.title}
      subtitle={site.description}
      offset={3}
      span={7}
    />
    <FullWidth>
      {careers && <CareersResults positions={careers} />}
      <CareersEqualOpportunity
        title="Equal Employment Opportunity"
        contentBody={site.bodyContent}
      />
    </FullWidth>
  </>
);

export default CareersPage;
