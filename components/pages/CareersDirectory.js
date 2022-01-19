import dynamic from 'next/dynamic';
import FullWidth from 'layouts/FullWidth';
import SingleSubHeader from 'layouts/SingleSubHeader';
import CareersBody from 'components/organisms/careers/Body';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';

const CareersEqualOpportunity = dynamic(() => import('components/organisms/careers/EqualOpportunity'));

const CareersPage = ({
  careers,
  query,
  locations,
  positionTypes,
  setQuery,
  executeSearch,
  setPositionType,
  setLocation,
  seo,
  site,
  canonicalUrl,
}) => (
  <>
    <BasicSiteHead
      title={seo.title}
      metaDescription={seo.metaDescription}
      canonicalUrl={canonicalUrl}
    />
    <SingleSubHeader title={site.title} subtitle={site.description} offset={3} span={7} />
    <FullWidth>
      {careers && (
        <CareersBody
          careers={careers}
          positionTypes={positionTypes}
          locations={locations}
          query={query}
          setQuery={setQuery}
          setLocation={setLocation}
          setPositionType={setPositionType}
          executeSearch={executeSearch}
        />
      )}
      <CareersEqualOpportunity content={site.bodyContent} />
    </FullWidth>
  </>
);

export default CareersPage;
