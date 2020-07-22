import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { title, subTitle } = props;

  return (
    <div className="jumbotron jumbotron-fluid city-background">
      <div className="container animated fadeInUp fast mt--1 max-width-container">
        <div className="row">
          <div className="col-sm-12 col-md-10 bg-black offset-md-1">
            <div className="p-3">
              <span id="red-block" />
              <h1 className="text-white proxima-bold">{title}</h1>
              <span id="white-border" />
              {
                (subTitle !== null) ? <h2 className="proxima-regular mt-3 mb-5">{subTitle[0].replace(/(<([^>]+)>)/ig, '')}</h2> : ''
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.arrayOf(PropTypes.string),
};

Header.defaultProps = {
  title: '',
  subTitle: [],
};

export default Header;
