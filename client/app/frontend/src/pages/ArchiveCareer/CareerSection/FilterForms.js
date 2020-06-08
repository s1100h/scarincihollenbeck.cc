/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

function FilterForms(props) {
  const {
    locations,
    positionType,
    keyword,
    filterTerm,
    location,
    type,
    selectOption,
    clearFilter,
  } = props;

  const removeDuplicates = (list) => list.filter((v, i) => list.indexOf(v) === i);

  const locs = removeDuplicates(locations);
  const typs = removeDuplicates(positionType);

  return (
    <div className="bckground-gray border">
      <div className="pt-3 pr-3 pl-3 mb-0 row">
        <div className="col-sm-12 col-md-4 filter">
          <label htmlFor="keyword" className="w-100">
            <input type="text" id="keyword" placeholder="Keyword" onChange={filterTerm} value={keyword} className="w-100" />
            <span className="sr-only">Keyword</span>
          </label>
        </div>
        <div className="col-sm-12 col-md-3 filter">
          <form className="d-block">
            <label htmlFor="locForm" className="w-100">
              <select name="location" id="locForm" value={location} onChange={selectOption} className="p-25 w-100">
                <option name="location" value="location">Locations</option>
                {
                    locs.map((loc) => <option name="location" key={loc} value={loc}>{loc}</option>)
                }
              </select>
              <span className="sr-only">Location</span>
            </label>
          </form>
        </div>
        <div className="col-sm-12 col-md-3 filter">
          <form className="d-block">
            <label htmlFor="typeForm" className="w-100">
              <span className="sr-only">Position Type</span>
              <select name="type" id="typeForm" value={type} onChange={selectOption} className="p-25 w-100">
                <option name="type" value="Position Type">Position Type</option>
                {
                    typs.map((typ) => <option name="type" key={typ} value={typ}>{typ}</option>)
                }
              </select>
            </label>
          </form>
        </div>
        <div className="col-sm-12 col-md-2 filter">
          <button type="button" className="m-1 btn btn-danger float-right" onClick={() => clearFilter()}>Clear Filters</button>
        </div>
      </div>
    </div>
  );
}

FilterForms.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string),
  positionType: PropTypes.arrayOf(PropTypes.string),
  keyword: PropTypes.string,
  location: PropTypes.string,
  type: PropTypes.string,
  filterTerm: PropTypes.func,
  selectOption: PropTypes.func,
  clearFilter: PropTypes.func,
};

FilterForms.defaultProps = {
  locations: [],
  positionType: [],
  keyword: '',
  location: '',
  type: '',
  filterTerm: () => {},
  selectOption: () => {},
  clearFilter: () => {},
};


export default FilterForms;
