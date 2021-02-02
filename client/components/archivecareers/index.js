import CareersFilterForms from './filter-forms';
import Results from './results';

export default function ArchiveCareers({
  careers,
  query,
  locations,
  positionTypes,
  setQuery,
  executeSearch,
  setPositionType,
  setLocation,
}) {
  return (
    <div className="mb-5">
      <CareersFilterForms
        locations={locations}
        positionTypes={positionTypes}
        query={query}
        setQuery={setQuery}
        setPositionType={setPositionType}
        setLocation={setLocation}
        executeSearch={executeSearch}
      />
      <Results positions={careers} />
    </div>
  );
}
