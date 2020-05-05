import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from '../../../utils/helpers';
import './index.scss';

const AboutAuthor = (props) => {
  const { bio } = props;

  return (
    <div className="w-100 mt-5">
      <div className="sidebar-title">
        About
        {' '}
        {bio.map(b => b.name)}
      </div>
      <div className="off-white">
        {
          bio.map(b => (
            <span className="py-2 mx-3 d-block" key={b.name}>
              <img src={b.image} alt={b.name} className="img-thumbnail" />
              <p className="mt-1 mb-0">
                <a href={`mailto:${b.email}`} className="red-title proxima-bold">{b.email}</a>
              </p>
              <p className="my-0">
                {b.phone}
              </p>              
              <div dangerouslySetInnerHTML={createMarkup(b.bioContent)} className="mt-2" />
              <a href={b.link} className="red-title proxima-bold mt-2">Full Bio &gt;&gt;</a>
            </span>
          ))
        }
      </div>
    </div>
  );
};

AboutAuthor.propTypes = {
  bio: PropTypes.arrayOf(PropTypes.object),
};

AboutAuthor.defaultProps = {
  bio: [],
};

export default AboutAuthor;
