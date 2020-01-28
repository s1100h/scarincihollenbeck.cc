import React from 'react';
import PropTypes from 'prop-types';
import RelatedAttorneys from './RelatedAttorneys';
import RelatedArticles from './RelatedArticles';
import FeaturedSlider from './FeaturedSlider';
import AwardScroller from './AwardScroller';
import { createMarkup } from '../../utils/helpers';

const Body = (props) => {
  const {
    currentTab,
    content,
    attorneyList,
    chair,
    handleLink,
    industryTopics,
    highlightReal,
    title,
  } = props;

  return (
    <div>
      <div className="tab-content">
        <div className={(currentTab === content[0].title) ? 'tab-pane active article-container' : 'tab-pane article-container'} id={`#${content[0].title}`} role="tabpanel" aria-labelledby="nav-home-tab" dangerouslySetInnerHTML={createMarkup(content[0].content)} />
        {
          content.map((v, i) => ((i > 0) ? (
            <div
              key={v.title}
              id={`#${v.title}`}
              className={(currentTab === v.title) ? 'tab-pane active article-container' : 'tab-pane article-container'}
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              dangerouslySetInnerHTML={createMarkup(v.content)}
            />
          ) : ''))
        }
        <div id="team" className={(currentTab === 'team') ? 'tab-pane active' : 'tab-pane'} role="tabpanel" aria-labelledby="nav-home-tab">
          <RelatedAttorneys
            members={attorneyList}
            chair={chair}
            handleLink={handleLink}
          />
        </div>
        <div id="blogs" className={(currentTab === 'blogs') ? 'tab-pane active' : 'tab-pane'} role="tabpanel" aria-labelledby="nav-home-tab">
          <RelatedArticles articles={industryTopics} />
        </div>
      </div>
      {/** Awards */}
      {
        (highlightReal.length > 0) ? (
          <AwardScroller highlightReal={highlightReal} />
        ) : ''
      }
      {/** Recent News Article */}
      <div className="w-100 d-block">
        <h4 className="bg-light-gray">
          Latest On
          {' '}
          {title}
        </h4>
        <FeaturedSlider content={industryTopics} />
      </div>
    </div>
  );
};

Body.propTypes = {
  currentTab: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object),
  attorneyList: PropTypes.arrayOf(PropTypes.object),
  chair: PropTypes.arrayOf(PropTypes.object),
  handleLink: PropTypes.func,
  industryTopics: PropTypes.arrayOf(PropTypes.object),
  highlightReal: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

Body.defaultProps = {
  currentTab: '',
  title: '',
  content: [],
  attorneyList: [],
  chair: [],
  industryTopics: [],
  highlightReal: [],
  handleLink: () => {},
};

export default Body;
