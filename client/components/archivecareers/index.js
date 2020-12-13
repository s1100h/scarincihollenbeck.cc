import { sortByKey } from '../../utils/helpers';
import CareersFilterForms from './filter-forms';
import Results from './results';

export default function CareerIndex({
  careers,
  keyword,
  filterTerm,
  location,
  type,
  selectOption,
  career,
  clearFilter,
}) {
  const sortPositions = sortByKey(careers, 'title');
  const locations = careers.map((p) => p.positionLocation);
  const positionType = careers.map((p) => p.positionType);

  // add location filter to sortPostions
  function filterLocation(position) {
    if (location) {
      return position.positionLocation.indexOf(location) >= 0;
    }
    return position;
  }

  // add type filter to sortPosition
  function filterType(position) {
    if (type) {
      return position.positionType.indexOf(type) >= 0;
    }
    return position;
  }

  // add keyword filter to sortPostions
  function filterKeyword(position) {
    if (keyword) {
      if (position.title.indexOf(keyword) >= 0) {
        return position;
      }
      if (position.positionDescription.indexOf(keyword.trim()) >= 0) {
        return position;
      }
      if (position.positionLocation.indexOf(keyword) >= 0) {
        return position;
      }
      if (position.positionType.indexOf(keyword) >= 0) {
        return position;
      }
    } else {
      return position;
    }

    return true;
  }

  const p = sortPositions
    .filter(filterKeyword)
    .filter(filterLocation)
    .filter(filterType);

  return (
    <div className="mb-5" id="career-section">
      <CareersFilterForms
        locations={locations}
        positionType={positionType}
        keyword={keyword}
        location={location}
        type={type}
        selectOption={selectOption}
        filterTerm={filterTerm}
        clearFilter={clearFilter}
      />
      <Results positions={p} career={career} />
    </div>
  );
}
