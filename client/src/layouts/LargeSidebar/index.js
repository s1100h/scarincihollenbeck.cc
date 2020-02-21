import React from 'react';

const LargeSidebar = (props) => {
  const { body, sidebar } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-8">
          {body}
        </div>
        <div className="col-sm-12 col-md-4">
          {sidebar}
        </div>
      </div>
    </div>
  );
};

export default LargeSidebar;
