import styled from 'styled-components';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const HolidayBox = styled.div`
  width: 200px;
  height: 200px;
  position: fixed;
  top: 70dvh;
  right: -5px;
  transition: 0.5s;

  :hover {
    scale: 1.05;
  }

  ${media_breakpoint_down('lg')} {
    width: 150px;
    height: 150px;
    top: 55dvh;
    right: -5px;
  }

  ${media_breakpoint_down('sm')} {
    width: 120px;
    height: 120px;
    top: 55dvh;
    right: -5px;
  }
`;
