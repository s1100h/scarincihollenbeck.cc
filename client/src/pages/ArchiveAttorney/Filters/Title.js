import React from 'react';
import { FaCaretDown } from "react-icons/fa";
import PropTypes from 'prop-types';

const Title = (props) => {
  const { designation, onSelect } = props;

  return (
    <li className="dropdown w3_megamenu-fw nav-item list-inline-item filter">
      <span data-toggle="dropdown" id="titleDropDown" className="dropdown-toggle btn btn-light my-1">
          Filter by title
        <FaCaretDown className="ml-5 mt-1" />
      </span>
      <div className="dropdown-menu" aria-labelledby="titleDropDown">
        { designation.map((d) => <button type="button" name="designation" className="dropdown-item btn btn-link" key={d.ID} onClick={(e) => onSelect(e, d.title)}>{d.title}</button>) }
      </div>
    </li>
  );
};

Title.propTypes = {
  designation: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func,
};


Title.defaultProps = {
  designation: [],
  onSelect: () => {},
};

export default Title;
