import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from '../../utils/helpers';
import NewsScroller from './NewsScroller';
import RelatedAttorneys from './RelatedAttorneys';

function TabContent(props) {
  const {
    content,
    sortedMembers,
    chair,
    handleLink,
    currentTab,
    attorneysMentioned,
    title,
  } = props;

  return (
    <div>
      {
        (content.length > 0) ? (
          <div className="tab-content">
            <div className={(currentTab === content[0].title) ? 'tab-pane active article-container mt-4' : 'tab-pane article-container mt-4'} id={`#${content[0].title}`} role="tabpanel" aria-labelledby="nav-home-tab" dangerouslySetInnerHTML={createMarkup(content[0].content)} />
            {
               content.map((v, i) => ((i > 0) ? (
                 <div
                   key={v.title}
                   id={`#${v.title}`}
                   className={(currentTab === v.title) ? 'tab-pane active article-container mt-4' : 'tab-pane article-container mt-4'}
                   role="tabpanel"
                   aria-labelledby="nav-home-tab"
                   dangerouslySetInnerHTML={createMarkup(v.content)}
                 />
               ) : ''))
             }
            <div id="team" className={(currentTab === 'members') ? 'tab-pane active mt-4' : 'tab-pane mt-4'} role="tabpanel" aria-labelledby="nav-home-tab">
              <RelatedAttorneys
                members={sortedMembers}
                chair={chair}
                handleLink={handleLink}
              />
            </div>
          </div>
        ) : ''
      }
      <NewsScroller attorneysMentioned={attorneysMentioned} title={title} />
    </div>
  );
}

TabContent.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
  sortedMembers: PropTypes.arrayOf(PropTypes.object),
  chair: PropTypes.arrayOf(PropTypes.object),
  handleLink: PropTypes.func,
  currentTab: PropTypes.string,
  attorneysMentioned: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

TabContent.defaultProps = {
  content: [],
  sortedMembers: [],
  chair: [],
  handleLink: () => {},
  currentTab: '',
  attorneysMentioned: [],
  title: '',
};

export default TabContent;
