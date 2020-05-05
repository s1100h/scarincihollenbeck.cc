import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup, addRandomKey, urlify } from '../../../utils/helpers';
import './index.scss';

const Matters = (props) => {
  const {
    currentTab,
    content,
    title,
    tabTitle,
  } = props;

  return (
    <div className={(currentTab === tabTitle) ? 'tab-pane active' : 'tab-pane'} id={tabTitle} role="tabpanel" aria-labelledby="nav-matter-tab">
      <h4 className="bg-light-gray">{title}</h4>
      {
        content.map((m, i) => (
          <span key={addRandomKey(m.title)} className="mb-4 d-block" id="nav-matter-tab">
            {
              (m.title) ? (
                <a href={`#${urlify(m.title)}`} className="sidebar-title" data-toggle="collapse">
                  {m.title}
                  <i className="text-white fas float-right mt-1" />
                </a>
              ) : ''
            }
            <div id={`${urlify(m.title)}`} className={(i === 0) ? 'collapse show' : 'collapse'}>
              <div className="off-white matters px-2 py-3" dangerouslySetInnerHTML={createMarkup(m.content)} />
            </div>
          </span>
        ))
      }
    </div>

  );
};

Matters.propTypes = {
  currentTab: PropTypes.string,
  tabTitle: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

Matters.defaultProps = {
  currentTab: '',
  tabTitle: '',
  content: [],
  title: '',
};

export default Matters;
