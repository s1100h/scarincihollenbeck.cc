import styled from 'styled-components';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from './mediaBreakpoints.style';

export const DiamondWrapper = styled.div`
  display: none;

  ${media_breakpoint_exactly_down(430)} {
    display: flex;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  position: relative;
  bottom: 33%;

  ${media_breakpoint_down('sm')} {
    img {
      width: 95%;
    }
  }

  ${media_breakpoint_exactly_down(430)} {
    display: none;
  }
`;
