import React from 'react';
import PropTypes from 'prop-types';

const Letter = (props) => {
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
};

Letter.propTypes = {
  alphabet: PropTypes.arrayOf(PropTypes.string),
  letterClick: PropTypes.func,
};

Letter.defaultProps = {
  alphabet: [],
  letterClick: () => {},
};

export default Letter;
