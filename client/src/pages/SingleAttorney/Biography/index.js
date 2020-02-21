import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from '../../../utils/helpers';
import './index.scss';

const Biography = (props) => {
  const {
    currentTab,
    tabTitle,
    content,
    title,
    toggleReadMore,
    readMore,
  } = props;

  const c = content.split(/<p[^>]*>/).filter((a) => a !== '');
  const excerpt = c[0].replace('</p>', '');
  const excerptTwo = c[1];

  const full = c.slice(2, c.length).join('<p>');

  return (
    <div className={(currentTab === tabTitle) ? 'tab-pane active' : 'tab-pane'} id={tabTitle} role="tabpanel" aria-labelledby="nav-bio-tab">
      <h4 className="bg-light-gray">{title}</h4>
      <p className="bio" dangerouslySetInnerHTML={createMarkup(excerpt)} id="nav-bio-tab" />
      <p className="bio" dangerouslySetInnerHTML={createMarkup(excerptTwo)} />
      <div id="content" className="collapse mt-4 ml-1">
        <div className="bio" dangerouslySetInnerHTML={createMarkup(full)} />
      </div>
      <a href="#content" type="collapse" className="red-title proxima-bold" data-toggle="collapse" data-target="#content" onClick={() => toggleReadMore()}>
        {
          (readMore) ? <u>Read Less &gt;&gt;</u> : <u>Read More &gt;&gt;</u>
        }
      </a>
    </div>
  );
};

Biography.propTypes = {
  currentTab: PropTypes.string,
  tabTitle: PropTypes.string,
  content: PropTypes.string,
  title: PropTypes.string,
  toggleReadMore: PropTypes.func,
  readMore: PropTypes.bool,
};

Biography.defaultProps = {
  currentTab: '',
  tabTitle: '',
  content: '',
  title: '',
  toggleReadMore: () => {},
  readMore: false,
};

export default Biography;
