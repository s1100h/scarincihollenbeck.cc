import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';

const Content = () => (
  <div className="col-sm-12 col-md-6 border-right">
    <h1 className="text-white mx-5 mt-5 display-32 text--shadow animated fadeInUp fast">Scarinci Hollenbeck Covid-19 Crisis Management Group</h1>
    <p className="lead text-white text--shadow mx-5 animated fadeInUp slow">Scarinci Hollenbeck is 100% operational and ready to assist clients without any business disruption.</p>
    <div className="container ml-4">
      <div className="row">
        <div className="col-sm-12 col-md-6 mb-3">
          <Link to="/firm-news/client-alert/client-alert-covid-19/" className="btn btn-danger w-75 p-2 shadow lift ft-11 animated fadeInUp slow fnt-btn">
            Client Message
            <FontAwesomeIcon icon={faCaretRight} className="text-white ml-2" />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6">
          <Link to="/covid-19-crisis-management-unit/" className="btn btn-danger w-75 p-2 shadow lift ft-11 animated fadeInUp slow fnt-btn">
            Resource Center
            <FontAwesomeIcon icon={faCaretRight} className="text-white ml-2" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);


export default Content;
