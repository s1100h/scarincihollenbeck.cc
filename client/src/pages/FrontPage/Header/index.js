import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cityBckGroundImg from '../../../images/skyline-background.jpg';

const Content = loadable(() => import('./Content'));
const Search = loadable(() => import('./Search'));


const HeaderBackground = styled.div`
  background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(${cityBckGroundImg}) no-repeat 50%;
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
  const { onChange, searchTerm } = props;
  return (
    <HeaderBackground className="jumbotron jumbotron-fluid">
      <BgBlack className="container animated fadeInUp fast mt-4">
        <div className="row">
          <Content />
          <Search onChange={onChange} searchTerm={searchTerm} />
        </div>
      </BgBlack>
    </HeaderBackground>
  );
};

Header.propTypes = {
  onChange: PropTypes.func,
  searchTerm: PropTypes.string,
};

Header.defaultProps = {
  onChange: () => {},
  searchTerm: '',
};

export default Header;
