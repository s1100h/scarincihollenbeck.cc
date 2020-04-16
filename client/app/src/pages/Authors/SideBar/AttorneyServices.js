import React from 'react';
import PropType from 'prop-types';

const AttorneyServices = (props) => {
  const { bio, practices } = props;
  return (
    <div className="w-100 mt-5">
      <div className="sidebar-title">
        {bio.map((b) => b.name)}
        {' '}
        Services
      </div>
      <div className="off-white p-3">
        {
          (practices) ? practices.map((p) => (
            <div key={p.title} className="mb-3">
              <a href={p.link} className="top-article">
                <p className="proxima-bold">{p.title}</p>
              </a>
            </div>
          )) : ''
        }
      </div>
    </div>
  );
};

AttorneyServices.propTypes = {
  practices: PropType.arrayOf(PropType.object),
  bio: PropType.arrayOf(PropType.object),
};

AttorneyServices.defaultProps = {
  practices: [],
  bio: [],
};

export default AttorneyServices;
