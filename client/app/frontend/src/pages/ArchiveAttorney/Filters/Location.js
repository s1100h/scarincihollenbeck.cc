import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import PropTypes from 'prop-types';

function FilterLocation(props) {
  const { locations, onSelect } = props;
  return (
    <li className="dropdown nav-item list-inline-item mr-4 filter">
      <span data-toggle="dropdown" id="locationDropDown" className="dropdown-toggle btn btn-light my-1">
        Filter by location
        <FontAwesomeIcon icon={faCaretDown} className="ml-5 mt-1" />
      </span>
      <div className="dropdown-menu w-100" aria-labelledby="locationDropDown">
        { locations.map((l) => <button type="button" name="location" className="dropdown-item btn btn-link" key={l.id} onClick={(e) => onSelect(e, l.title)}>{l.title}</button>) }
      </div>
    </li>
  );
}

FilterLocation.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func,
};

FilterLocation.defaultProps = {
  locations: [],
  onSelect: () => {},
};

export default FilterLocation;
