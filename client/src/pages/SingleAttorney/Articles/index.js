/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { addRandomKey } from '../../../utils/helpers';
import './index.scss';

const Post = (props) => {
  const { title, link, img } = props;
  const noImg = `${process.env.API_URL}/wp-content/themes/sh-law-theme/includes/assets/images/88a9c0b8e7ff2ed7ecff91cfdaa0b816.png`;
  return (
    <div className="col-sm-12 col-md-4 my-2 article-card">
      <a href={link}>
        <img src={(img) || noImg} className="img-thumbnail mt-3" alt={title} />
        <h5 className="my-3 small-excerpt text-center mt-2">{title}</h5>
      </a>
    </div>
  );
};

const Articles = (props) => {
  const {
    currentTab,
    tabTitle,
    title,
    content,
  } = props;

  return (
    <div className={(currentTab === tabTitle) ? 'tab-pane active' : 'tab-pane'} id={tabTitle} role="tabpanel" aria-labelledby={`nav-${tabTitle}-tab`}>
      <h4 className="bg-light-gray">{title}</h4>
      <div id={`nav-${tabTitle}-tab`} className="article-container container">
        <div className="row">
          {
            content.map((a) => <Post key={addRandomKey(a.title)} link={a.link} title={a.title} img={a.featuredImg} />)
          }
        </div>
      </div>
    </div>
  );
};


Post.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  img: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.any,
  ]),
};

Post.defaultProps = {
  title: '',
  link: '',
  img: '',
};

Articles.propTypes = {
  currentTab: PropTypes.string,
  tabTitle: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object),
};

Articles.defaultProps = {
  currentTab: '',
  tabTitle: '',
  title: '',
  content: [],
};


export default Articles;
