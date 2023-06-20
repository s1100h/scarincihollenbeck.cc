import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import { globalColor } from './global_styles/Global.styles';

export const NavbarStyled = styled(Navbar)`
  display: flex;
  margin: 10px auto 10px auto;

  .navContainerWrapper {
    width: 100%;
    display: flex;
    gap: 40px;
    align-items: center;
  }

  a {
    color: ${globalColor.black};
  }

  ${media_breakpoint_down('lg')} {
    display: none;
  }
`;
