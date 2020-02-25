import React from 'react';
import PropTypes from 'prop-types';

const About = loadable(() => import('./About'));
const Practices = loadable(() => import('./Practices'));
const Categories = loadable(() => import('./Categories'));

const ColumnContent = (props) => {
  const { onCategorySelection, corePractices } = props;

  return (
    <div className="row">
      <div className="col-sm-12 px-0">
        <div className="line-header"><h3>ABOUT OUR FIRM</h3></div>
      </div>
      <div className="col-sm-12 col-md-4 mt-5 border-right">
        <About />
      </div>
      <div className="col-sm-12 col-md-4 mt-5 border-right">
        <Practices corePractices={corePractices} />
      </div>
      <div className="col-sm-12 col-md-4 mt-5">
        <Categories onCategorySelection={onCategorySelection} />
      </div>
    </div>
  );
};

ColumnContent.propTypes = {
  onCategorySelection: PropTypes.func,
  corePractices: PropTypes.arrayOf(PropTypes.object),
};

ColumnContent.defaultProps = {
  onCategorySelection: () => {},
  corePractices: [],
};

export default ColumnContent;
