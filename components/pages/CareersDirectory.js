import dynamic from 'next/dynamic';
import FullWidth from 'layouts/FullWidth';
import SubHeader from 'layouts/SubHeader/SubHeader';
import CareersBody from 'components/organisms/careers/CareersBody';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';

const CareersEqualOpportunity = dynamic(() => import('components/atoms/Article'));

const CareersPage = ({
  careers, query, locations, positionTypes, setQuery, executeSearch, setPositionType, setLocation, seo, site, canonicalUrl,
}) => (
  <>
    <BasicSiteHead title={seo.title} metaDescription={seo.metaDescription} canonicalUrl={canonicalUrl} />
    <SubHeader title={site.title} subtitle={site.description} offset={3} span={7} />
    <FullWidth>
      {careers && <CareersBody careers={careers} positionTypes={positionTypes} locations={locations} query={query} setQuery={setQuery} setLocation={setLocation} setPositionType={setPositionType} executeSearch={executeSearch} />}
      <CareersEqualOpportunity title="Equal Employment Opportunity" contentBody={site.bodyContent} />
    </FullWidth>
  </>
);

export default CareersPage;
