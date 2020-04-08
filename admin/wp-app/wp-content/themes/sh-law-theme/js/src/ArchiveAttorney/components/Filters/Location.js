import React from 'react';
import PropTypes from 'prop-types';

const Location = (props) => {
  const { locations, onSelect } = props;
  return (
    <li className="dropdown nav-item list-inline-item mr-4 filter">
      <span data-toggle="dropdown" id="locationDropDown" className="dropdown-toggle btn btn-light my-1">
          Filter by location
        <i className="ml-5 mt-1 fas fa-caret-down" />
      </span>
      <div className="dropdown-menu w-100" aria-labelledby="locationDropDown">
        { locations.map(l => <button type="button" name="location" className="dropdown-item btn btn-link" key={l.ID} onClick={e => onSelect(e, l.title)}>{l.title}</button>) }
      </div>
    </li>
  );
};

Location.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func,
};

Location.defaultProps = {
  locations: [],
  onSelect: () => {},
};

export default Location;
