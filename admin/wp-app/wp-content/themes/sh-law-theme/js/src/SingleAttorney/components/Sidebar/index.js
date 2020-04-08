import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup, addRandomKey, urlify } from '../../../utils/helpers';
import './index.scss';


const SidebarContent = (props) => {
  const { title, content, collapsed } = props;

  return (
    <div>
      <a href={`#${urlify(title)}`} className={`sidebar-title ${urlify(title)}`} data-toggle="collapse">
        {title}
        <i className="text-white fas float-right mt-1" />
      </a>
      <div id={`${urlify(title)}`} className={collapsed}>
        <div className="off-white">
          <ul className="pl-0 pb-1 pr-1 pt-3 no-dots sidebar-content">
            {
              content.map(v => (
                <li key={`${addRandomKey('sbc')}`} className="mb-3">
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
  content: PropTypes.arrayOf(PropTypes.object),
  collapsed: PropTypes.string,
};

SidebarContent.defaultProps = {
  title: '',
  content: [],
  collapsed: '',
};

export default SidebarContent;
