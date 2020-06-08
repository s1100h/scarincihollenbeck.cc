/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import Icons from './Icons';

function SocialShareSidebar(props) {
  const { printScreen, title } = props;

  const encodeLink = encodeURIComponent(window.location.href);
  const to = '';
  const w = window.innerWidth;

  return (
    <div className="col-sm-1">
      {
        (w < 796) ? (
          <Icons printScreen={printScreen} title={title} encodeLink={encodeLink} to={to} />
        ) : (
          <Sticky enabled={true} top="#stick-start" bottomBoundary="#stop-scrolling">
            <Icons printScreen={printScreen} title={title} encodeLink={encodeLink} to={to} />
          </Sticky>
        )
      }
    </div>
  );
}

SocialShareSidebar.propTypes = {
  printScreen: PropTypes.func,
  title: PropTypes.string,
};

SocialShareSidebar.defaultProps = {
  printScreen: () => {},
  title: '',
};

export default SocialShareSidebar;
