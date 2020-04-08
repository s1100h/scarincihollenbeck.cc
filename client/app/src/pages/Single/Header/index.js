import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import blogHeader from '../blogheader.jpg';

const HeaderBackground = styled.div`
  background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(${blogHeader}) no-repeat 50%;
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
`;

const Header = (props) => {
  const { title, subTitle } = props;

  return (
    <HeaderBackground className="jumbotron jumbotron-fluid">
      <div className="container animated fadeInUp fast mt--1 max-width-container">
        <div className="row">
          <BgBlack className="col-sm-12 col-md-10 offset-md-1">
            <div className="p-3">
              <span id="red-block" />
              <h1 className="text-white proxima-bold">{title}</h1>
              <span id="white-border" />
              {
                (subTitle !== null) ? <h2 className="proxima-regular mt-3 mb-5">{subTitle[0].replace(/(<([^>]+)>)/ig, '')}</h2> : ''
              }
            </div>
          </BgBlack>
        </div>
      </div>
    </HeaderBackground>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.arrayOf(PropTypes.string),
};

Header.defaultProps = {
  title: '',
  subTitle: [],
};

export default Header;
