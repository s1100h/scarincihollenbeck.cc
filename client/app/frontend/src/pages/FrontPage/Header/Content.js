import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';

const Content = () => (
  <div className="col-sm-12 col-md-6 border-right">
    <h1 className="text-white mx-5 mt-5 display-32 text--shadow animated fadeInUp fast">Personal attention to you and your business.</h1>
    <p className="lead text-white text--shadow mx-5 animated fadeInUp slow">We serve the niche practice areas most often required by institutions, corporations, entities, and the people who own and control them.</p>
    <div className="container ml-4">
      <div className="row">
        <div className="col-sm-12 col-md-6 mb-3">
          <Link to="/attorneys" className="btn btn-danger w-75 p-2 shadow lift ft-11 animated fadeInUp slow fnt-btn">
            Find an attorney
            <FontAwesomeIcon icon={faCaretRight} className="text-white ml-2" />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6">
          <Link to="/practices" className="btn btn-danger w-75 p-2 shadow lift ft-11 animated fadeInUp slow fnt-btn">
            Select a practice
            <FontAwesomeIcon icon={faCaretRight} className="text-white ml-2" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);


export default Content;
