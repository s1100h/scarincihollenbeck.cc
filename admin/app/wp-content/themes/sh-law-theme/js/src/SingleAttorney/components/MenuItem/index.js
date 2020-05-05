import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';


const MenuItem = (props) => {
  const {currentTab, tabTitle, tabClick, title } = props;
  return (
    <h3
      className={(currentTab === tabTitle) ? 'active' : ''}
      id="nav-home-tab"
      data-toggle="tab"
      onClick={() => tabClick(tabTitle)}
      href={`#${tabTitle}`}
      role="tab"
      aria-controls="nav-home"
      aria-selected
      aria-hidden
    >
      {title}
    </h3>              
  );
};

MenuItem.propTypes = {
  currentTab: PropTypes.string,
  tabTitle: PropTypes.string,
  tabClick: PropTypes.func,
  title: PropTypes.string,
};

MenuItem.defaultType = {
  currentTab: '',
  tabTitle: '',
  tabClick: () => {},
  title: '',
};

export default MenuItem; 
