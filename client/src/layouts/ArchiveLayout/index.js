import React from 'react';
import './index.scss';


const ArchiveLayout = (props) => {
  const { header, body, sidebar } = props;

  return(
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-18">
          {header}
        </div>
        <div className="col-sm-12 col-md-8">
          {body}
        </div>
        <div className="col-sm-12 col-md-4">
          {sidebar}
        </div>
      </div>
    </div>
  )
};

export default ArchiveLayout;
