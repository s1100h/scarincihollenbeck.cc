import React from 'react';

const FullWidth = (props) => {
  const { children } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FullWidth;
