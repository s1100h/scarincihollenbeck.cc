import React from 'react';
import PropType from 'prop-types';

function AttorneyServices(props) {
  const { bio, practices } = props;
  return (
    <div className="w-100 mt-5">
      <div className="sidebar-title">
        {bio.map((b) => b.name)}
        {' '}
        Services
      </div>
      <div className="off-white p-3">
        <ul className="pl-0 pt-2 pb-1 pr-1 sidebar-content-page">
        {
          (practices) && practices.map((p) => (
            <li key={p.title}>
              <a href={p.link} className="proxima-bold">
                {p.title}
              </a>
            </li>
          ))
        }
        </ul>
      </div>
    </div>
  );
}

AttorneyServices.propTypes = {
  practices: PropType.arrayOf(PropType.object),
  bio: PropType.arrayOf(PropType.object),
};

AttorneyServices.defaultProps = {
  practices: [],
  bio: [],
};

export default AttorneyServices;
