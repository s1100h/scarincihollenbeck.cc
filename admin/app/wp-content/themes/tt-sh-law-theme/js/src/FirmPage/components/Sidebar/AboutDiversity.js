import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const AboutDiversity = (props) => {
  const { relatedPages } = props;

  return (
    <div className="w-100 mt-3">
      <div className="sidebar-title">
        Scarinci Hollenbeck Diversity
      </div>
      <div className="off-white">
        <ul className="pl-0 pb-1 pr-1 no-dots sidebar-content">
          {
          relatedPages.map(val => (
            <li key={val}>
              <a href={`${window.location.origin}/${val}`} className="text-capitalize small-excerpt">
                {val.replace(/-/g, ' ')}
              </a>
            </li>
          ))
          }
        </ul>
      </div>
    </div>
  );
};

AboutDiversity.propTypes = {
  relatedPages: PropTypes.arrayOf(PropTypes.string),
};

AboutDiversity.defaultProps = {
  relatedPages: [],
};

export default AboutDiversity;
