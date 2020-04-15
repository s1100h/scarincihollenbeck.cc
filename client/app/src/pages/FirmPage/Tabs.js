import React from 'react';
import PropTypes from 'prop-types';


const Tabs = (props) => {
  const {
    content, members, currentTab, tabClick,
  } = props;

  return (

    <div className="line-header" id="nav-tab" role="tablist">
      { (content.length > 0) && (
        <h3
          className={(currentTab === content[0].title) ? 'active' : ''}
          id="nav-home-tab"
          data-toggle="tab"
          onClick={() => tabClick(content[0].title)}
          onKeyPress={() => tabClick(content[0].title)}
          href={`#${content[0].title}`}
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
        >
          {content[0].title}
        </h3>
      )
      }
      {
      content.map((v, i) => ((i > 0) && (
        <h3
          key={v.title}
          className={(currentTab === v.title) ? 'active' : ''}
          data-toggle="tab"
          href={`#${v.title}`}
          role="tab"
          onClick={() => tabClick(v.title)}
          onKeyPress={() => tabClick(v.title)}
          aria-controls="nav-home"
          aria-selected="true"
        >
          {v.title}
        </h3>
      )))
    }
      {
      (Object.keys(members).length > 0) && (
        <h3
          id="nav-home-tab"
          className={(currentTab === 'members') && 'active'}
          data-toggle="tab"
          href="#members"
          role="tab"
          onClick={() => tabClick('members')}
          onKeyPress={() => tabClick('members')}
          aria-controls="nav-home"
          aria-selected="true"
        >
          Members
        </h3>
      )
    }
    </div>
  );
};

Tabs.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
  members: PropTypes.arrayOf(PropTypes.object),
  currentTab: PropTypes.string,
  tabClick: PropTypes.func,
};

Tabs.defaultProps = {
  content: [],
  members: [],
  currentTab: '',
  tabClick: () => {},
};

export default Tabs;
