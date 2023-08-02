import dynamic from 'next/dynamic';
import FullWidth from 'layouts/FullWidth';
import SingleSubHeader from 'layouts/SingleSubHeader';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import CareersResults from '../organisms/careers/CareersResults';

const CareersEqualOpportunity = dynamic(() => import('components/atoms/Article'));

const CareersPage = ({
  careers, seo, site, canonicalUrl,
}) => (
  <>
    <BasicSiteHead title={seo.title} metaDescription={seo.metaDescription} canonicalUrl={canonicalUrl} />
    <SingleSubHeader title={site.title} subtitle={site.description} offset={3} span={7} />
    <FullWidth>
      {careers && (
        <div className="mb-5">
          <CareersResults positions={careers} />
        </div>
      )}
      <CareersEqualOpportunity title="Equal Employment Opportunity" contentBody={site.bodyContent} />
    </FullWidth>
  </>
);

export default CareersPage;
