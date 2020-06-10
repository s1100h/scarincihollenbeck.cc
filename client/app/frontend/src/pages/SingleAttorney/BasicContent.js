import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from '../../utils/helpers';

function BasicContent(props) {
  const { tabTitle, title, content } = props;

  return (
    <div className={(currentTab === tabTitle) ? 'tab-pane active' : 'tab-pane'} id={tabTitle} role="tabpanel" aria-labelledby={`nav-${tabTitle}-tab`}>
      <h4 className="bg-light-gray">{title}</h4>
      <div className="container article-container">
        <div className="row">
          <div id={`nav-${tabTitle}-tab`} dangerouslySetInnerHTML={createMarkup(content)} />
        </div>
      </div>
    </div>
  );
}

BasicContent.propTypes = {
  currentTab: PropTypes.string,
  tabTitle: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

BasicContent.defaultProps = {
  currentTab: '',
  tabTitle: '',
  title: '',
  content: '',
};

export default BasicContent;
