/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
import React from 'react';
import PropTypes from 'prop-types';
import { sortByKey } from '../../../utils/helpers';
import FilterForms from './FilterForms';
import Results from './Results';
import './index.scss';

const CareerSection = (props) => {
  const {
    positions,
    keyword,
    filterTerm,
    location,
    type,
    selectOption,
    setUrlHash,
    clearFilter,
  } = props;

  const sortPositions = sortByKey(positions, 'title');
  const locations = positions.map(p => p.positionLocation);
  const positionType = positions.map(p => p.positionType);


  // add location filter to sortPostions
  const filterLocation = (position) => {
    if (location) {
      return position.positionLocation.indexOf(location) >= 0;
    } else {
      return position;
    }
  };

  // add type filter to sortPosition
  const filterType = (position) => {
    if (type) {
      return position.positionType.indexOf(type) >= 0;
    } else {
      return position;
    }
  };

  // add keyword filter to sortPostions
  const filterKeyword = (position) => {
    if (keyword) {
      if (position.title.indexOf(keyword) >= 0) {
        return position;
      } else if (position.positionDescription.indexOf(keyword.trim()) >= 0) {
        return position;
      } else if (position.positionLocation.indexOf(keyword) >= 0) {
        return position;
      } else if (position.positionType.indexOf(keyword) >= 0) {
        return position;
      }
    } else {
      return position;
    }
  };

  const p = sortPositions
    .filter(filterKeyword)
    .filter(filterLocation)
    .filter(filterType);

  return (
    <div className="mb-5">
      <FilterForms
        locations={locations}
        positionType={positionType}
        keyword={keyword}
        location={location}
        type={type}
        selectOption={selectOption}
        filterTerm={filterTerm}
        clearFilter={clearFilter}
      />
      <Results positions={p} setUrlHash={setUrlHash} />
    </div>
  );
};

CareerSection.propTypes = {
  keyword: PropTypes.string,
  location: PropTypes.string,
  type: PropTypes.string,
  positions: PropTypes.arrayOf(PropTypes.object),
  filterTerm: PropTypes.func,
  selectOption: PropTypes.func,
  setUrlHash: PropTypes.func,
  clearFilter: PropTypes.func,
};

CareerSection.defaultProps = {
  keyword: '',
  location: '',
  type: '',
  positions: [],
  filterTerm: () => {},
  selectOption: () => {},
  setUrlHash: () => {},
  clearFilter: () => {},
};

export default CareerSection;
