import React from 'react';
import loadable from '@loadable/component';
import PropTypes from 'prop-types';

const About = loadable(() => import(/* webpackChunkName="About Component", webpackMode="lazy */ './About'));
const Practices = loadable(() => import(/* webpackChunkName="Practices Component", webpackMode="lazy */ './Practices'));
const Categories = loadable(() => import(/* webpackChunkName="Categproes Component", webpackMode="lazy */ './Categories'));

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
