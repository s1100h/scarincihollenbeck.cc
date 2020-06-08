import React from 'react';

const NoHeaderMiniSidebar = (props) => {
  const { body, sidebar } = props;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-9">
          {body}
        </div>
        <div className="col-sm-12 col-md-3">
          {sidebar}
        </div>
      </div>
    </div>
  );
};

export default NoHeaderMiniSidebar;
