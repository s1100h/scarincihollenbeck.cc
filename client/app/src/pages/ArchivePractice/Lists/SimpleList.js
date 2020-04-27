import React from 'react';
import PropTypes from 'prop-types';

function SimpleList(props) {
  const { list } = props;
  return (
    <div className="mt-5">
      <ul className="blue-title column-list">
        {list.map((v) => <li key={v.ID}><a href={v.slug} className="blue-title proxima-bold">{v.title}</a></li>)}
      </ul>
    </div>
  );
}


SimpleList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

SimpleList.defaultProps = {
  list: [],
};

export default SimpleList;
