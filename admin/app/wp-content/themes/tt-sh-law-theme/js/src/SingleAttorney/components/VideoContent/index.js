import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup, addRandomKey } from '../../../utils/helpers';
import './index.scss';


const VideoContent = (props) => {
  const {
    currentTab,
    tabTitle,
    title,
    content,
  } = props;

  console.log(content);

  return (
    <div className={(currentTab === tabTitle) ? 'tab-pane active' : 'tab-pane'} id={tabTitle} role="tabpanel" aria-labelledby={`nav-${tabTitle}-tab`}>
      <h4 className="bg-light-gray">{title}</h4>
      <div className="article-container container" id={`nav-${tabTitle}-tab`}>
        <div className="row">
          {
            content.map(video => (
              <div key={addRandomKey(video.title)} className="col-sm-12">
                <div dangerouslySetInnerHTML={createMarkup(video.embed_video)} className="w-100" />
                <h5 className="mt-2 mb-4">
                  {`${video.title} `}
                  -
                  <span className="red-title">{` ${video.date}`}</span>
                </h5>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

VideoContent.propTypes = {
  currentTab: PropTypes.string,
  tabTitle: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object),
};

VideoContent.defaultProps = {
  currentTab: '',
  tabTitle: '',
  title: '',
  content: [],
};

export default VideoContent;
