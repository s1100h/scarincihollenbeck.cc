/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Header = (props) => {
  const { offices } = props;

  return (
    <div className="jumbotron jumbotron-fluid city-background">
      <div className="container animated fadeInUp fast mt--1 max-width-container">
        <div className="row">
          <div className="col-sm-12 col-md-10 bg-black offset-md-1">
            <div className="p-3">
              <span id="red-block" />
              <h1 className="text-white proxima-bold">Scarinci Hollenbeck Office Locations</h1>
              <span id="white-border" />
              <h2 className="proxima-regular mt-3 mb-5">
                To best serve our clients, Scarinci Hollenbeck has
                {' '}
                {offices.length.toString()}
                {' '}
                offices strategically located around the New York/New Jersey Metropolitan area,
                as well as Washington D.C. and San Francisco, CA, with our head quarters in Lyndhurst, NJ.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  offices: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  offices: [],
};

export default Header;
