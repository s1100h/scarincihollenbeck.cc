import React from 'react';
import './index.scss';


const MiniSidebar = (props) => {
  const { body, sidebar, header } = props;

  return (
  <div className="container mt-3">
    <div className="row">
      <div className="col-sm-12">
        {header}              
      </div>
      <div className="col-sm-12 col-md-9">
        {body}
      </div>
      <div className="col-sm-12 col-md-3">
        {sidebar}
      </div>
    </div>
  </div>
  )
};

export default MiniSidebar;
