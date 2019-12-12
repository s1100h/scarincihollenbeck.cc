import React from 'react';
import PropTypes from 'prop-types';
import AboutFirm from './AboutFirm';
import AboutDiversity from './AboutDiversity';
import './index.scss';

const Sidebar = (props) => {
  const {
    relatedPages,
    searchTerm,
    onChange,
  } = props;

  return (
    <div className="mt-4">
      <form role="search" method="GET" action={process.env.API_URL}>
        <label htmlFor="searchSite" className="w-100">
          <input name="s" type="search" id="searchSite" value={searchTerm} placeholder="What are you looking for..." onChange={onChange} className="form-control p-2" />
          <span className="sr-only">Search For Attorney</span>
        </label>
      </form>
      <AboutDiversity relatedPages={relatedPages} />
      <AboutFirm />
    </div>
  );
};


Sidebar.propTypes = {
  relatedPages: PropTypes.arrayOf(PropTypes.string),
  searchTerm: PropTypes.string,
  onChange: PropTypes.func,
};

Sidebar.defaultProps = {
  relatedPages: [],
  searchTerm: '',
  onChange: () => {},
};

export default Sidebar;
