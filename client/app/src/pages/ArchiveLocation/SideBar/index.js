/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { sortByKey, addRandomKey } from '../../../utils/helpers';
import OfficeData from './OfficeData';
import OfficeArticles from './OfficeArticles';

const SideBar = (props) => {
  const {
    offices,
    getLocationDirections,
    posts,
    title,
    setNewLocation,
  } = props;

  const officeList = sortByKey(offices, 'title');

  return (
    <div id="location-sidebar">
      {
        officeList.map((o) => (
          <OfficeData
            key={addRandomKey(o.title)}
            setNewLocation={setNewLocation}
            getLocationDirections={getLocationDirections}
            currentOffice={title}
            title={o.title}
            phone={o.phone}
            fax={o.fax}
            shortName={o.shortName}
            address={o.address}
          />
        ))
      }
      <OfficeArticles title={title} posts={posts} />
    </div>
  );
};

SideBar.propTypes = {
  offices: PropTypes.arrayOf(PropTypes.object),
  getLocationDirections: PropTypes.func,
  setNewLocation: PropTypes.func,
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

SideBar.defaultProps = {
  offices: [],
  posts: [],
  title: '',
  getLocationDirections: () => {},
  setNewLocation: () => {},
};

export default SideBar;
