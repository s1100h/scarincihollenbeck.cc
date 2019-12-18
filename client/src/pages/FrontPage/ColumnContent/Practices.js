import React from 'react';
import PropTypes from 'prop-types';

const Practices = (props) => {
  const { corePractices } = props;

  return (
    <div>
      <h5 className="red-title">Core Practices</h5>
        <hr />
        <ul className="ml-4">
          { corePractices.map(p => <li key={p.name}><a href={p.link}>{p.name}</a></li>) }
        </ul>
        <a href={`/practices`} className="red-title proxima-bold">
          <u>
            All Practices &gt;&gt;
          </u>
        </a>
      </div>
    )
};

Practices.propTypes = { 
 corePractices: PropTypes.arrayOf(PropTypes.object),
};

Practices.defaultProps = {
  corePractices: [],
};

export default Practices;
