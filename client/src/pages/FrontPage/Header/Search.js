import React from 'react';
import PropTypes from 'prop-types';
import ShDiamond from '../../../images/sh-mini-diamond.png';

const Search = (props) => {
  const { searchTerm, onChange } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    const formatUrl = (str) => str.toLowerCase().replace(/\s/g, '+');
    window.location = `/s?=${formatUrl(searchTerm)}`;
  };

  return (
    <div className="col-sm-12 col-md-6">
      <img src={ShDiamond} alt="scarinci hollenbeck diamond" className="mt-3 p-2 animated fadeInUp slow mx-auto d-block" />
      <h2 className="text-white text-center display-32 text--shadow animated fadeInUp slow">How can we help?</h2>
      <form className="animated fadeInUp slow mx-3 mt-5 mb-5" onChange={onChange}>
        <span className="screen-reader-text">Search for:</span>
        <input name="s" type="search" aria-labelledby="searchbutton" placeholder="What are you searching for.." defaultValue={searchTerm} className="form-control mw-100 p-2 mx-auto d-block" />
        <button type="button" onClick={(e) => onSubmit(e)} id="searchbutton" className="btn btn-danger mt-3 mx-auto d-block btn-lg animated fadeInUp slow fnt-btn">
          Search
          <i className="fa fa-angle-double-right text-white ml-2 animated fadeInUp slow" />
        </button>
      </form>
    </div>
  );
};

Search.propTypes = {
  searchTerm: PropTypes.string,
  onChange: PropTypes.func,
};

Search.defaultProps = {
  searchTerm: '',
  onChange: () => {},
};

export default Search;
