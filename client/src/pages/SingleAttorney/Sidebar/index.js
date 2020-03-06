import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus, FaMinus } from "react-icons/fa";
import { createMarkup, addRandomKey, urlify } from '../../../utils/helpers';
import './index.scss';


const SidebarContent = (props) => {
  const { title, content, show, setSideBarTab, currentSidebarTab } = props;

  console.log(content);

  return (
    <div>
      <a href={`#${urlify(title)}`} onClick={(e) => setSideBarTab(title)} className="sidebar-title" data-toggle="collapse">
        {title}
        {(title === currentSidebarTab || show) ? <FaMinus className="float-right" /> : <FaPlus className="float-right" /> }
      </a>
      <div id={`${urlify(title)}`} className={(show) ? 'collapse show' : 'collapse'}>
        <div className="off-white">
          <ul className="pl-0 py-3 pr-1 no-dots sidebar-content">
            {
              content.map((v) => (
                <li key={`${addRandomKey('sbc')}`} className="mb-2">
                  {
                    (v.link) ? <a href={v.link} className="link-style small-excerpt">{v.title}</a> : <strong>{v.title}</strong>
                  }
                  {
                    (v.content) ? <div dangerouslySetInnerHTML={createMarkup(v.content)} /> : ''
                  }
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

SidebarContent.propTypes = {
  title: PropTypes.string,
  currentSidebarTab: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object),
  show: PropTypes.bool,
  setSideBarTab: PropTypes.func,
};

SidebarContent.defaultProps = {
  title: '',
  currentSidebarTab: '',
  content: [],
  show: false,
  setSideBarTab: () => {},
};

export default SidebarContent;
