import React from 'react';
import PropTypes from 'prop-types';


function FilterKeyword(props) {
  const { userInput, handleChange } = props;

  return (
    <form className="form-inline filter w-40">
      <label htmlFor="searchForAttorney" className="w-100">
        <input type="text" id="searchForAttorney" className="w-100" value={userInput} placeholder="Search by keyword..." onChange={handleChange} />
        <span className="sr-only">Search For Attorney</span>
      </label>
    </form>
  );
}

FilterKeyword.propTypes = {
  userInput: PropTypes.string,
  handleChange: PropTypes.func,
};

FilterKeyword.defaultProps = {
  userInput: '',
  handleChange: () => {},
};

export default FilterKeyword;
