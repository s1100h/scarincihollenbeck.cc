import FullWidth from 'layouts/FullWidth';
import SingleSubHeader from 'layouts/SingleSubHeader';
import Body from 'components/organisms/careers/body';
import CareersEqualOpportunity from 'components/organisms/careers/equal-opportunity';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';

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
