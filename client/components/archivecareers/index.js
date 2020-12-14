import { sortByKey } from '../../utils/helpers';
import CareersFilterForms from './filter-forms';
import Results from './results';

export default function CareerIndex({
  careers,
  query,
  locations,
  positionType,
  setQuery,
  executeSearch
}) {
  return (
    <div className="mb-5">
      <CareersFilterForms
        locations={locations}
        positionType={positionType}
        query={query}
        setQuery={setQuery}
        executeSearch={executeSearch}
      />
      <Results positions={careers} />
    </div>
  );
}
