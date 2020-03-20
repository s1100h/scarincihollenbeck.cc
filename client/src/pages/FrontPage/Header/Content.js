import React from 'react';

const Content = () => (
  <div className="col-sm-12 col-md-6 border-right">
    <h1 className="text-white mx-5 mt-5 display-32 text--shadow animated fadeInUp fast">Personal attention to you and your business.</h1>
    <p className="lead text-white text--shadow mx-5 animated fadeInUp slow">We serve the niche practice areas most often required by institutions, corporations, entities, and the people who own and control them.</p>
    <div className="container ml-4">
      <div className="row">
        <div className="col-sm-12 col-md-6 mb-3">
          <a href="/attorneys" className="btn btn-danger w-75 p-2 shadow lift ft-11 animated fadeInUp slow fnt-btn">
            Find an attorney
            <i className="fa fa-angle-double-right text-white ml-2" />
          </a>
        </div>
        <div className="col-sm-12 col-md-6">
          <a href="/practices" className="btn btn-danger w-75 p-2 shadow lift ft-11 animated fadeInUp slow fnt-btn">
            Select a practice
            <i className="fa fa-angle-double-right text-white ml-2" />
          </a>
        </div>
      </div>
    </div>
  </div>
);


export default Content;
