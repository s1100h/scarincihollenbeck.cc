import React from 'react';


const Tabs = (props) => {
  const { content, members, currentTab} = props;

  return (
    <div className="line-header" id="nav-tab" role="tablist">
    {
      (content.length > 0) ? (
        <h3
          className={(currentTab === content[0].title) ? 'active' : ''}
          id="nav-home-tab"
          data-toggle="tab"
          onClick={() => this.tabClick(content[0].title)}
          onKeyPress={() => this.tabClick(content[0].title)}
          href={`#${content[0].title}`}
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
        >
          {content[0].title}
        </h3>
      ) : ''
      }
    {
      content.map((v, i) => ((i > 0) ? (
        <h3
          key={v.title}
          className={(currentTab === v.title) ? 'active' : ''}
          data-toggle="tab"
          href={`#${v.title}`}
          role="tab"
          onClick={() => this.tabClick(v.title)}
          onKeyPress={() => this.tabClick(v.title)}
          aria-controls="nav-home"
          aria-selected="true"
        >
          {v.title}
        </h3>
      ) : ''))
    }
    {
      (Object.keys(members).length > 0) ? (
        <h3
          id="nav-home-tab"
          className={(currentTab === 'members') ? 'active' : ''}
          data-toggle="tab"
          href="#members"
          role="tab"
          onClick={() => this.tabClick('members')}
          onKeyPress={() => this.tabClick('members')}
          aria-controls="nav-home"
          aria-selected="true"
        >
          Members
        </h3>
      ) : ''
    }
  </div>
  )
};

export default Tabs;
