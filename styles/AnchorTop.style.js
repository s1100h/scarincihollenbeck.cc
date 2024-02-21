import styled from 'styled-components';
import { globalColor } from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const AnchorTopBtn = styled.button`
  position: fixed;
  bottom: 100px;
  right: 50px;
  z-index: 5;
  width: 40px;
  height: 40px;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: rgba(189, 239, 255, 0.08);
  backdrop-filter: blur(4px);
  border-radius: 50%;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 1px solid rgba(189, 239, 255, 0.3);
    svg {
      height: 80%;
    }
  }

  svg {
    fill: ${globalColor.blue.blue500};
    width: 70%;
    height: 70%;
    transition: all 0.3s ease-in-out;
  }

  &.show {
    display: flex;
  }

  ${media_breakpoint_down('lg')} {
    right: 25px;
  }

  ${media_breakpoint_down('md')} {
    width: 30px;
    height: 30px;
  }
`;
