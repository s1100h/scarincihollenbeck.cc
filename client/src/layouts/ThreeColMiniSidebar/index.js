import React from 'react';

const ThreeColMiniSidebar = (props) => {
  const { body, OneSidebar, TwoSidebar} = props;

  return (
  <div className="container mt-3">
    <div className="row">
      {OneSidebar}
      <div className="col-sm-12 col-md-7">
        {body}
      </div>
      <div className="col-sm-12 col-md-4">
        {TwoSidebar}
      </div>
    </div>
  </div>
  )
};

export default ThreeColMiniSidebar;
