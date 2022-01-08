import dynamic from 'next/dynamic';
import FullWidth from 'layouts/FullWidth';
import SingleSubHeader from 'layouts/SingleSubHeader';
import Body from 'components/organisms/careers/body';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';

const CareersEqualOpportunity = dynamic(() => import('components/organisms/careers/equal-opportunity'));

export default function CareersPage({
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
}) {
  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDescription}
        canonicalUrl={canonicalUrl}
      />
      <SingleSubHeader title={site.title} subtitle={site.description} offset={3} span={7} />
      <FullWidth>
        {careers && (
          <Body
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
}
