import React from 'react';
import PropTypes from 'prop-types';

function FilterLetter(props) {
  const { alphabet, letterClick } = props;

  return (
    <div className="col-sm-12 col-md-10 mt-2">
      <ul className="list-inline ml-4 ">
        {alphabet.map((val) => (
          <li
            onClick={letterClick}
            onKeyDown={letterClick}
            key={val}
            role="presentation"
            className="text-bg text-white proxima-bold list-inline-item cursor-pointer"
          >
            <h4>{val}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

FilterLetter.propTypes = {
  alphabet: PropTypes.arrayOf(PropTypes.string),
  letterClick: PropTypes.func,
};

FilterLetter.defaultProps = {
  alphabet: [],
  letterClick: () => {},
};

export default FilterLetter;
