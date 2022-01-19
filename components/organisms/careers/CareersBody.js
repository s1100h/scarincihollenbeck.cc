import dynamic from 'next/dynamic';

const Results = dynamic(() => import('components/organisms/careers/Results'));
const FilterForms = dynamic(() => import('components/organisms/careers/FilterForms'));

const CareersBody = ({
  careers,
  query,
  locations,
  positionTypes,
  setQuery,
  executeSearch,
  setPositionType,
  setLocation,
}) => (
  <div className="mb-5">
    {/* <FilterForms
      locations={locations}
      positionTypes={positionTypes}
      query={query}
      setQuery={setQuery}
      setPositionType={setPositionType}
      setLocation={setLocation}
      executeSearch={executeSearch}
    /> */}
    <Results positions={careers} />
  </div>
);

export default CareersBody;
