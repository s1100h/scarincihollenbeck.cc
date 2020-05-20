import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { checkIEBrowser } from '../utils/helpers';

const MultiSubHeader = (props) => {
  const {
    profile, infoCard, imageWebp, imageJXR, imageJPG2000, imageJPG, height,
  } = props;

  let image = '';
  const ieBrowser = checkIEBrowser();

  image = imageWebp;

  if(ieBrowser) {
    image = imageJPG;
  }

  const HeaderBackground = styled.div`
  background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(${image}) no-repeat 50%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
  clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
`;

  const BgBlack = styled.div`
  background-color: rgba(0,0,0, .50);
  border-radius: 4px;
  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 90%, 50% 100%, 1% 90%, 0 0);
  clip-path: polygon(50% 0%, 100% 0, 100% 90%, 50% 100%, 1% 90%, 0 0);
  max-height: ${height};
`;

  return (
    <HeaderBackground className="jumbotron jumbotron-fluid">
      <div className="container animated fadeInUp fast mt--1 max-width-container">
        <div className="row">
          <div className="col-sm-12 col-md-4 mb-3 mr-4 mh-325">
            {profile}
          </div>
          <BgBlack className="col-sm-12 col-md-7">
            {infoCard}
          </BgBlack>
        </div>
      </div>
    </HeaderBackground>
  );
};

MultiSubHeader.propTypes = {
  imageWebp: PropTypes.string,
  imageJPG: PropTypes.string,
  profile: PropTypes.string,
  infoCard: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  height: PropTypes.string,
};

MultiSubHeader.defaultProps = {
  imageWebp: '',
  imageJPG:'',
  profile: '',
  infoCard: '',
  height: '',
};

export default MultiSubHeader;
