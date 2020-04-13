import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons/faPlus'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { createMarkup, addRandomKey, urlify } from '../../utils/helpers';


const SidebarContent = (props) => {
  const { title, content, show, setSideBarTab, currentSidebarTab } = props;
  console.log(props);
  console.log(show);

  return (
    <div>
      <a href={`#${urlify(title)}`} onClick={(e) => setSideBarTab(title)} className="sidebar-title" data-toggle="collapse">
        {title}
        {(title === currentSidebarTab || show) ?  <FontAwesomeIcon icon={faMinus} className="sidebar-icon" /> : <FontAwesomeIcon icon={faPlus} className="sidebar-icon" /> }
      </a>
      <div id={`${urlify(title)}`} className={(show) ? 'collapse show' : 'collapse'}>
        <div className="off-white">
          <ul className="pl-0 py-3 pr-1 no-dots sidebar-content">
            {
              content.map((v) => (
                <li key={`${addRandomKey('sbc')}`} className="mb-2">
                  {(v.link) ? <a href={v.link} className="link-style small-excerpt">{v.title}</a> : <strong>{v.title}</strong>}
                  {(v.content) && <div dangerouslySetInnerHTML={createMarkup(v.content)} />}
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
