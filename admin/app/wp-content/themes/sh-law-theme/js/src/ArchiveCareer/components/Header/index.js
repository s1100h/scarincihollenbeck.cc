/* eslint-disable max-len */
import React from 'react';
import './index.scss';

const Header = () => (
  <div className="jumbotron jumbotron-fluid city-background">
    <div className="container animated fadeInUp fast mt--1 max-width-container">
      <div className="row">
        <div className="col-sm-12 col-md-8 bg-black offset-md-2">
          <div className="p-3">
            <span id="red-block" />
            <h1 className="text-white proxima-bold">Careers & Available Positions</h1>
            <span id="white-border" />
            <h2 className="proxima-regular mt-3 mb-5">
            Our commitment to diversity and equal opportunity enables Scarinci Hollenbeck to
            recruit, retain, and promote the best attorneys.
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default Header;
